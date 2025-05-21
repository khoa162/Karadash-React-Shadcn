# Admin Dashboard (KasraDash UI Test)

A clean admin dashboard built with **React**, **Vite**, **Tailwind CSS**, **Shadcn UI**, **Zod**, **React Hook Form**, and optional state management via **Zustand**.

This project implements the tech test spec including:
- Summary cards
- Pending approvals
- Reported posts
- Modal (Shadcn Dialog)
- Settings page with Zod + React Hook Form
- Dark mode toggle
- Zustand state store (optional, but included)

---

## 📦 Tech Stack

| Feature                | Technology                     |
|------------------------|---------------------------------|
| Frontend Framework     | [React](https://reactjs.org/)  |
| Build Tool             | [Vite](https://vitejs.dev/)    |
| Styling                | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components          | [shadcn/ui](https://ui.shadcn.com/) |
| Form Handling          | [React Hook Form](https://react-hook-form.com/) |
| Validation             | [Zod](https://github.com/colinhacks/zod) |
| State Management       | [Zustand](https://github.com/pmndrs/zustand) |

---

## 🚀 Setup Instructions

### Clone & Install & Start The App

```bash
git clone https://github.com/your-repo/admin-dashboard.git
cd admin-dashboard
npm install
npm run dev
```

## 🌸 Tech Stack & Choices

| Feature            | Chosen Tool                        |
|--------------------|------------------------------------|
| UI Framework       | React (with Vite)                  |
| Styling            | Tailwind CSS                       |
| Component Library  | Shadcn UI (manually copied)        |
| Form Handling      | React Hook Form                    |
| Validation         | Zod                                |
| State Management   | Zustand (lightweight, optional)    |

### Why these choices?

- **React + Vite**: React + Vite: Fast setup and dev experience. Vite is optimal for UI-focused projects.
- **Tailwind CSS**: Quick styling with good design consistency. Paired well with Shadcn's design tokens.
- **Shadcn UI**: Offers accessible and customizable UI primitives. Manually integrated for full control (no CLI used).
- **React Hook Form + Zod**: Strongly typed and minimal boilerplate for validation.
- **Zustand**: Extremely lightweight state management for storing saved user settings.

## 💡 Assumptions / Shortcuts Taken

- **No backend**: All data is mocked in `src/data/dashboardStats.ts`
- **Dark mode**: Implemented manually via class toggle (`.dark` on `document.documentElement`)
- **Shadcn components**: Used only necessary components (`Card`, `Dialog`, `Input`, `Switch`, `Button`, etc.), copied manually instead of using CLI
- **Password display**: Hidden behind static dots (`••••••••`) with no toggle for privacy
- **Routing**: Project uses a flat file structure without React Router, as the test only requires 2 pages (Dashboard & Settings)

## ✅ Features Implemented

- Summary Cards (responsive grid)
- Pending Suppliers & Events
- Reported Posts section
- Modal with Shadcn Dialog
- Settings Form with validation (Zod + RHF)
- Dark Mode toggle (Shadcn Switch)
- Zustand state store for user data

## 🛠 Why I Didn't Use the Shadcn CLI

The Shadcn CLI (`npx shadcn-ui`) is designed primarily for **Next.js projects**.  
Since this project uses **Vite + React**, the CLI doesn't work out of the box and will fail to scaffold components or inject configs properly.

Instead, I manually copied only the components I needed (e.g. `Button`, `Card`, `Dialog`) directly from the [Shadcn UI](https://ui.shadcn.com) source.

This approach offers:
- Full control over structure and styling
- No need for `components.json`
- Lightweight, clean setup for a small project
- 100% compatibility with Tailwind, Radix UI, and Shadcn’s design system

The result: **visually and functionally identical to a Shadcn CLI project**, just without automation.

## 📝 Final Notes

The project sticks closely to the test requirements while keeping the code clean, minimal, and scalable.

Structure is flat and maintainable, suitable for small teams or solo contributors.

If extended, routing (React Router) or API integration can be added with minimal refactor.