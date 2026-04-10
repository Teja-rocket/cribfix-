
---

# 🛠️ CribFix – Apartment Maintenance System

CribFix is a simple, front-end-based apartment maintenance management system that helps residents raise complaints and allows admins to track and resolve them efficiently.

---

## 🚀 Features

### 👤 Resident

* Raise maintenance complaints بسهولة
* Select category and priority
* Track complaint status (Open / In Progress / Resolved)
* View latest updates/notes from admin

### 🛠️ Admin / Staff

* View all complaints across the building
* Update ticket status
* Add notes for residents
* Monitor complaint statistics

---

## 🧩 Tech Stack

* **HTML5**
* **CSS3** (custom styling with variables)
* **Vanilla JavaScript**
* **LocalStorage** (for data persistence)

---

## 📂 Project Structure

```
index.html   # Main application file (UI + logic)
```

Everything is contained in a single HTML file:

* UI layout
* Styling
* JavaScript logic

---

## ⚙️ How It Works

1. **Login**

   * Choose role: Resident or Admin
   * Enter name (and flat number for residents)

2. **Dashboard**

   * Residents see only their tickets
   * Admins see all tickets

3. **Raise Complaint**

   * Fill in details like:

     * Title
     * Category
     * Priority
     * Description

4. **Ticket Lifecycle**

   * Open → In Progress → Resolved

5. **Data Storage**

   * Stored in browser `localStorage`
   * No backend required

---

## 📊 Key Functionalities

* Ticket creation with unique ID
* Status filtering
* Real-time UI updates
* Admin controls for quick updates
* Notes system for communication
* Demo data preloaded

---

## 🧪 Demo Usage

You can use built-in demo accounts:

* **Resident**

  * Name: Priya Sharma
  * Flat: A-101

* **Admin**

  * Name: Admin Suresh

---

## 💡 Highlights

* Clean and modern UI
* Fully responsive design
* No dependencies or frameworks
* Works entirely in the browser

---

## ⚠️ Limitations

* No backend (data stored locally)
* Data resets if localStorage is cleared
* No authentication/security

---

## 🔮 Future Improvements

* Backend integration (Node.js / Firebase)
* User authentication
* Image upload for complaints
* Notifications system
* Role-based access control
* Multi-building support

---

## 🏁 Getting Started

1. Download the project
2. Open `index.html` in your browser
3. Start using CribFix 🎉

---

## 📜 License

This project is open-source and free to use for learning or personal projects.

---


