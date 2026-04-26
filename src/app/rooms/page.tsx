import React from "react";
import { getRooms } from "@/lib/data";
import RoomsClient from "./RoomsClient";

export default async function RoomsPage() {
  const rooms = await getRooms();

  return <RoomsClient initialRooms={rooms} />;
}
