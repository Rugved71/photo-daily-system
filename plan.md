# Photo Appointment Management System

## Project Goal
Build a web application where parents can book photography sessions for their babies.  
Users can login, view available slots, and book an appointment.

---

# Main Features

## 1. User Authentication
Users should be able to:
- Register
- Login
- Logout

Authentication will protect the dashboard routes.

---

## 2. User Dashboard
After login the user should see:

- Upcoming booked session
- Available photo session slots
- Option to book a session

---

## 3. Session Management
Admin or system manages available slots.

Each session contains:
- sessionId
- date
- time
- availability status
- booked user

Example:

Date | Time | Status
---- | ---- | ----
10 May | 10:00 AM | Available
10 May | 12:00 PM | Booked

---

## 4. Booking System
User should be able to:
- view available sessions
- book a session
- see booking confirmation

Rules:
- one slot = one booking
- booked slots cannot be booked again

---

# Backend Architecture

## Backend Tech
Node.js  
Express.js  
MongoDB  

---

# Backend Folder Structure

backend/
│
├── server.js
├── config/
│   └── db.js
│
├── routes/
│   ├── authRoutes.js
│   ├── sessionRoutes.js
│   └── bookingRoutes.js
│
├── controllers/
│   ├── authController.js
│   ├── sessionController.js
│   └── bookingController.js
│
├── models/
│   ├── User.js
│   ├── Session.js
│   └── Booking.js
│
├── middleware/
│   └── authMiddleware.js

---

# Database Design

## User Collection

User
- id
- name
- email
- password (hashed)

---

## Session Collection

Session
- id
- date
- time
- isBooked

---

## Booking Collection

Booking
- id
- userId
- sessionId
- bookingDate

---

# Backend APIs

## Auth APIs

POST /api/auth/register  
POST /api/auth/login  

---

## Session APIs

GET /api/sessions  
Show available photo sessions.

---

## Booking APIs

POST /api/book  
Book a session.

GET /api/my-bookings  
Show user's bookings.

---

# Development Steps

Step 1  
Setup Node + Express server

Step 2  
Connect MongoDB

Step 3  
Create User model

Step 4  
Implement login & register

Step 5  
Create session slots

Step 6  
Build booking API

Step 7  
Connect frontend dashboard

---

# Future Improvements

- Admin panel to create session slots
- Email confirmation
- Photo gallery for booked sessions
- Payment integration