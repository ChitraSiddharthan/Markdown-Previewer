# Markdown Previewer

## 📘 Project Description

This project is a web application that empowers users to type in **Markdown** and instantly see a live preview of the rendered **HTML**. Crafted as a single-page application built with **React**, it delivers a dynamic and intuitive user experience.

---

## ✨ Key Features

- **Real-time Preview**: The preview updates instantaneously as you type your Markdown.
- **Comprehensive Markdown Support**: Includes rendering for:
    - Headers (H1–H6)
    - Paragraphs
    - **Bold** and *Italic* text
    - Blockquotes
    - Ordered and Unordered lists
    - Inline and Block Code
    - Horizontal Rules
    - Links
    - Images
- **Responsive Layout**: Designed to function seamlessly across various devices and screen sizes.

---

## ✅ User Stories

- As a user, I can see a `textarea` input field where I can enter my Markdown text.
- As a user, I can see a dynamic preview of the rendered output that updates in real time as I type in the `textarea`.

---

## 🛠️ Technical Specifications

- **Core Framework**: React
- **Markdown Parsing**: Utilizes the [marked](https://marked.js.org/) library (delivered via CDN) for efficient Markdown-to-HTML conversion.
- **Styling**: Tailwind CSS (delivered via CDN) and custom CSS for a responsive and visually appealing design.
- **HTML Structure**: HTML5 provides the fundamental structure of the web application, rendered and managed by React components.

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/ChitraSiddharthan/Markdown-Previewer.git](https://github.com/ChitraSiddharthan/Markdown-Previewer.git)
```

### 2. Navigate to the Project Directory

```bash
cd Markdown-Previewer
```

### 3. Open `index.html` in Your Browser

While this project is built with React, for simplicity and to avoid a build process, the `index.html` directly includes the necessary scripts via CDNs. You can open this file directly in your web browser to view the application. For development or more complex features, a typical React development setup might be used.

---

## ⚙️ Technologies Used

- React
- HTML5
- Tailwind CSS (via CDN)
- Marked.js (via CDN)
- Custom CSS
