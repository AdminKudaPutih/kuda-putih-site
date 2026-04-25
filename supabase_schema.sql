-- Create rooms table
CREATE TABLE IF NOT EXISTS public.rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type TEXT NOT NULL CHECK (type IN ('basic', 'suite')),
    total_quantity INTEGER NOT NULL DEFAULT 1,
    current_price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    facilities JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID NOT NULL REFERENCES public.rooms(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'paid', 'cancelled')) DEFAULT 'pending',
    total_price NUMERIC(10, 2) NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create posts table (for blog/news)
CREATE TABLE IF NOT EXISTS public.posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create admin_profiles table
-- Note: references auth.users which is managed by Supabase Auth
CREATE TABLE IF NOT EXISTS public.admin_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('admin')) DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- Create basic policies (Example: public read for rooms and posts)
CREATE POLICY "Public read for rooms" ON public.rooms FOR SELECT USING (true);
CREATE POLICY "Public read for posts" ON public.posts FOR SELECT USING (true);

-- Seed Initial Data for Rooms
INSERT INTO public.rooms (type, total_quantity, current_price, description, facilities)
VALUES 
('basic', 19, 500000.00, 'Comfortable basic room for a relaxing stay.', '["WiFi", "AC", "TV", "Shower"]'::jsonb),
('suite', 2, 1200000.00, 'Luxurious suite with premium amenities and extra space.', '["WiFi", "AC", "TV", "Bathtub", "Mini Bar", "Balcony"]'::jsonb)
ON CONFLICT DO NOTHING;
