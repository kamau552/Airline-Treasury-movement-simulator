# ✈️ Treasury Movement Simulator

## ✅ Overview  
This project simulates treasury fund movements across regional airline operation accounts. It enables teams to track, simulate, and audit inter-account transfers, including FX (foreign exchange) conversions — all in a simple, clean web interface.

---

## 🧰 Tech Stack

- **🟦 TypeScript** – for strict type safety and scalable interfaces  
- **⚡ Next.js** – for fast, SSR-enabled React development  
- **🎨 Tailwind CSS** – for rapid and responsive UI styling  

---

## 📌 Product Requirements

### 1. Accounts Interface
- Display of **10 virtual accounts** with:
  - Unique identifiers (e.g., `Mpesa_KES_1`, `Bank_USD_3`)
  - Currency (KES, USD, NGN, etc.)
  - Account balances
- Features:
  - **Search bar** to filter accounts
  - **Summary cards** for total account count and USD balance

### 2. Transaction Log
- Shows all transfers with:
  - Source and destination accounts
  - Sent and received amounts
  - Currency and FX rate used
  - Transfer notes and status (Completed, Pending)
- Features:
  - **Searchable log**
  - Future-ready for **filtering by currency or account**

### 3. FX Rates
- Uses a **static FX rate map** (e.g., USD_KES = 142.5)
- Automatically converts amountTo based on FX when currencies differ

### 4. Transfer Validation
- Ensures:
  - **Sufficient balance** in source account
  - **FX conversion** applied if currencies don’t match

---

## 🧠 Assumptions
- FX rates are **predefined and static**
- No user authentication or role-based access
- Data is **stored locally** in code (no DB/API)
- Transfers are **simulations** (no real transactions)

---

## 🚫 Out of Scope
- No database or persistent backend
- No live FX rate APIs
- No advanced analytics
- No user management

---

## 🧱 Features Implemented

| Feature                         | Status        |
|----------------------------------|----------------|
| 10+ virtual accounts             | ✅ Implemented |
| FX conversion logic              | ✅ Static map  |
| Transaction logging              | ✅ Done        |
| Search (Accounts & Logs)         | ✅ Working     |
| Clean UI with Tailwind CSS       | ✅ Styled      |
| Summary cards (Accounts, Logs)   | ✅ Displayed   |
| Sidebar navigation               | ✅ Functional  |
| Responsive layout                | ✅ Mobile-friendly |

---

## 🟢 Future Enhancements
- Modal to **initiate transfers**
- Auto-update account balances
- Add **filtering by currency/date**
- Support for **future-dated transactions** (UI only)
- Deployment to Vercel / Netlify / Replit

---

## 📸 UI Preview
> _Modern dashboard with collapsible sidebar, summary cards, responsive tables, and search functionality._

---
