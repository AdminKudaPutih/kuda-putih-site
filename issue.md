# Backend Infrastructure & Supabase Integration for Kuda Putih House

## Objective
Establish a robust backend architecture using Supabase to manage dynamic content and the booking lifecycle. This phase transitions the project from a static frontend to a data-driven application with persistence for rooms, bookings, and administrative control.

## System Architecture Requirements

### 1. Supabase Project Initialization
- **Environment Configuration:** Securely integrate Supabase keys using environment variables (`.env.local`).
- **Database Schema Design:** Architect a relational schema to support:
  - `rooms`: Store inventory (19 Basic, 2 Suite), pricing, and metadata.
  - `bookings`: Track reservation status, quantities, and user association.
  - `posts`: Manage dynamic content for "Memories" and blog updates.
  - `admin_profiles`: RBAC (Role-Based Access Control) for dashboard management.

### 2. Room Inventory Management
- **Initial Data Seed:**
  - **Basic Room:** 19 units, IDR 3.000.000/month.
  - **Suite Room:** 2 units, IDR 5.500.000/month.
- **Availability Logic:** Implement real-time inventory tracking where `available = total - active_bookings`.

### 3. Booking & Transactional Logic
- **Cart Persistence:** Implement a robust state management solution to allow users to add specific room quantities to a cart.
- **Checkout Workflow:** 
  - Validate inventory availability at the moment of checkout.
  - Generate a "Pending" booking record in the database.
  - Implementation of a secure handover to the administrative payment flow.
- **Payment Verification:** Enable an admin-facing status update to transition bookings from "Pending" to "Confirmed" upon payment verification.

### 4. Admin Authentication
- **Secure Access:** Configure Supabase Auth to restrict management routes to authorized admin accounts.
- **Data Fetching:** Standardize on server-side fetching (RSC) where possible for performance, with client-side real-time updates for inventory status.

---
**Senior Developer Action Required:**
Please initialize the Supabase client, deploy the initial migration scripts for the schema described above, and establish the API layer (or Server Actions) required to connect the frontend UI to these data structures.
