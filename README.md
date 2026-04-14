# Quote-Based Remittance System (Frontend)

## Overview

This is the frontend application for the [Quote-Based Remittance System](https://github.com/kadelcode/quote-remittance-backend)

It provides a user interface for:
- Requesting exchange quotes
- Viewing fees and rates
- Initiating remittance transactions
- Tracking remittance status

The frontend communicates with the backend API built using **Sprint Boot**

----

## Core User Flow
```mermiad
graph LR
  A[Requst Quote] --> B[Review Details]
  B[Review Details] --> C[Confirm]
  C[Confirm] --> D[Track Status]
```

---

## Tech Stack
- React (Vite)
- TypeScript
- Axios (API calls)
- React Router (routing)
- React Query (data fetching & caching)
- Zustand (state management)

---

## Project Structure
```
src/
│
├── api/          → Axios client & API calls
├── components/   → Reusable UI components
├── pages/        → Application screens (Quote, Dashboard, etc.)
├── store/        → Global state (Zustand)
├── hooks/        → Custom hooks (React Query logic)
├── types/        → TypeScript interfaces/types
├── utils/        → Helper functions
└── App.tsx       → Root component
```

---

## Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/kadelcode/quote-remittance-frontend.git
```
then:
```bash
cd quote-remittance-frontend
```

---

### 2. Install Dependencies
```bash
npm install
```

---

### 3. Run Development Server
```
npm run dev
```

---

### 4. Access App
```
http://localhost:5173
```

---

## Backend Integration
The frontend connects to the backend API:
```
http://localhost:8080
```

---

### Requirements
Make sure the backend is running before using the frontend.

**Backend repo**
```
quote-remittance-backend
```

---

## API Configuration
Axios base URL:
```TypeScript
// src/api/client.ts
export const api = axios.create({
  baseURL: "http://localhost:8080",
})
```

---

## Features (Planned / In Progress)
### Quote Flow
- Request exchange quote
- Display exchange rate and fees
- Show expiry countdown

### Transaction Flow
- Accept quote
- Initiate payment
- Confirm deposit

### Tracking
- View remittance status
- Display transaction progress

---

## Architecture Philosophy
This frontend follows a modular and scalable structure:
```mermiad
graph LR
A[UI];
B[Hooks];
C[API];
D[Backend];

A --> B
B --> C
C --> D
```

This ensures:
- Separation of concerns
- Reusability
- Maintainability

---

## Known Considerations
- CORS must be enabled on backend
- Backend must be running for API calls
- API errors are handled via React Query

---

## Future Improvements
- Authentication (JWT)
- Form validation (React Hook Form + Zod)
- UI library (MUI / Tailwind)
- Dark mode
- Error boundary handling

---

## Author
Built as part of a full-stack fintech system simulation project

---

## Summary
This frontend:
- Interacts with a real backend system
- Simulates remittance workflows
- Demonstrates modern React architecture

