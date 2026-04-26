import { supabase } from './supabase';

export interface Room {
  id: string;
  type: 'basic' | 'suite';
  total_quantity: number;
  current_price: number;
  description: string;
  facilities: string[];
  created_at: string;
}

export async function getRooms(): Promise<Room[]> {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('current_price', { ascending: true });

  if (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }

  return data as Room[];
}

export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data;
}

export interface BookingInput {
  room_id: string;
  quantity: number;
  start_date: string;
  end_date: string;
  total_price: number;
  customer_name: string;
  customer_email: string;
}

export async function createBooking(booking: BookingInput) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([
      {
        ...booking,
        status: 'pending',
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking');
  }

  return data;
}

export async function getRoomAvailability(roomId: string, startDate: string, endDate: string) {
  // Fetch the room total quantity
  const { data: room, error: roomError } = await supabase
    .from('rooms')
    .select('total_quantity')
    .eq('id', roomId)
    .single();

  if (roomError || !room) {
    console.error('Error fetching room for availability:', roomError);
    return 0;
  }

  // Fetch overlapping bookings
  const { data: bookings, error: bookingsError } = await supabase
    .from('bookings')
    .select('quantity')
    .eq('room_id', roomId)
    .in('status', ['pending', 'paid'])
    .filter('start_date', 'lt', endDate)
    .filter('end_date', 'gt', startDate);

  if (bookingsError) {
    console.error('Error fetching bookings for availability:', bookingsError);
    return 0;
  }

  const bookedQuantity = (bookings || []).reduce((sum, b) => sum + b.quantity, 0);
  return Math.max(0, room.total_quantity - bookedQuantity);
}
