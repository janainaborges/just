"use client"

import { TicketsProvider } from "@/provider/TicketContext";
import Tickets from "./just/page";

export default function Home() {
  return (
    <TicketsProvider>
        <Tickets />
    </TicketsProvider>
  );
}
