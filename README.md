# 🚫 Angular 404 Error Page

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Angular Router](https://img.shields.io/badge/Angular%20Router-Routing-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/guide/routing)
[![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-Package%20Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

> A modern, responsive, and interactive **404 Page Not Found** experience built with **Angular 21**.

The project provides a clean error experience for invalid routes with navigation controls, automatic home redirection, theme switching, animated route visualization, and developer profile links.

---

## 🚀 Live Demo

**Coming Soon**

---

## ✨ Features

### 🎨 User Interface

- Modern Angular 21 implementation
- Responsive 404 error page
- Dark and light theme
- Animated route visualization
- Responsive mobile layout
- Clean standalone Angular components
- No external UI framework required

### 🧭 Navigation & Error Handling

- Automatic home redirection
- 10-second countdown
- **Stay Here** option
- **Go Home** navigation
- **Go Back** navigation
- Angular wildcard route handling for invalid URLs

### 👨‍💻 Developer Links

- Developer social links
- Portfolio links
- Angular portfolio
- Profile Card

---

## 🛠️ Tech Stack

| Technology         | Details                          |
| ------------------ | -------------------------------- |
| **Angular**        | 21.2.22                          |
| **TypeScript**     | TypeScript                       |
| **HTML5**          | Application structure            |
| **CSS3**           | Styling and responsive design    |
| **Angular Router** | Route handling and 404 detection |
| **Node.js**        | JavaScript runtime               |
| **npm**            | Package management               |

---

## 📁 Project Structure

```text
angular-error-pages/
│
└── src/
    └── app/
        ├── pages/
        │   ├── home/
        │   └── not-found/
        │
        ├── app.ts
        ├── app.html
        ├── app.css
        ├── app.config.ts
        └── app.routes.ts
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/charanepuri/angular-404-error-page.git
```

### 2. Navigate into the Project

```bash
cd angular-error-pages
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
ng serve
```

### 5. Open in Browser

```text
http://localhost:4200/
```

---

## 🧪 Testing the 404 Page

After starting the development server, visit any invalid route.

### Example 1

```text
http://localhost:4200/test
```

### Example 2

```text
http://localhost:4200/page-does-not-exist
```

Angular's **wildcard route** will match the invalid URL and display the custom **404 Not Found** page.

---

## 🔄 404 Page Flow

```text
User
  │
  ▼
Invalid URL
  │
  ▼
Angular Router
  │
  ▼
Wildcard Route (**)
  │
  ▼
404 Not Found Page
  │
  ├── Stay Here
  │
  ├── Go Back
  │
  ├── Go Home
  │
  └── Automatic Redirect
          │
          ▼
       Home Page
```

---

## ⏱️ Automatic Redirect

The 404 page includes a **10-second countdown**.

```text
Invalid Route
      │
      ▼
404 Page
      │
      ▼
10-Second Countdown
      │
      ├── Stay Here
      │
      ├── Go Back
      │
      └── Countdown Completes
              │
              ▼
          Home Page
```

Users can choose to remain on the 404 page or navigate away using the available controls.

---

## 🌓 Theme Support

The page supports both:

- 🌙 Dark Theme
- ☀️ Light Theme

The theme switching experience is designed to keep the 404 page visually consistent across different viewing preferences.

---

## 📱 Responsive Design

The interface is designed to adapt across:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

The layout adjusts navigation controls, content spacing, typography, and route visualization for smaller screens.

---

## 🏗️ Production Build

Create an optimized production build using:

```bash
ng build
```

The production files will be generated inside the:

```text
dist/
```

directory.

---

## 👨‍💻 Developer

### Charan Teja

**LinkedIn**

https://www.linkedin.com/in/charan-teja-972aa9231

**GitHub**

https://github.com/charanepuri

**Instagram**

https://www.instagram.com/_just_call_me_charan_tej

**Snapchat**

https://www.snapchat.com/add/justcalltej2003

---

## 🌐 Portfolio

### Angular Portfolio

https://angular-portfolio-sigma-eight.vercel.app/

### Angular Profile Card

https://profile-card-angular.vercel.app/

---

## 📌 Project Information

| Item                  | Details                |
| --------------------- | ---------------------- |
| Project               | Angular 404 Error Page |
| Framework             | Angular                |
| Angular Version       | 21.2.22                |
| Routing               | Angular Router         |
| UI                    | Custom CSS             |
| Responsive            | Yes                    |
| Theme                 | Dark / Light           |
| 404 Handling          | Angular Wildcard Route |
| External UI Framework | None                   |
| Live Demo             | Coming Soon            |

---

## 📄 License

This project is created as a personal developer project for **learning, experimentation, and portfolio purposes**.

---

<div align="center">

### 🚫 Angular 404 Error Page

**Handle Errors · Guide Users · Keep Exploring**

Built with **Angular 21**

</div>
