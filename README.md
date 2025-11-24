# AI-ChatBot_Javascript-Project_Gemini-API
This Repository Present AI Chatbot With Gemini-API Project In JavaScript

---
# Branch: UC-3-API_KEY-GenerateResponse

## 🎯 Use Case 3: API Key Integration & Generate Response  
Is branch ka aim hai:  
- API key (jaise Gemini API ya koi aur) securely project mein integrate karna  
- User ke input ko process karke API request bhejna  
- API ka response handle karna aur chatbot UI mein display karna  

✅ What’s Completed in UC-3  
- Project structure setup (HTML, CSS, JS)  
- Chatbot UI ready — user input field, send button, chat history area  
- API key configuration mechanism banaaya gaya (config file / environment variable)  
- `generateResponse()` jaisa function implement kiya gaya hai jo API ko call karega  
- API response se data parse karke UI mein show karega  
- Basic error handling & response display added  
---

## 🧠 How to Run Locally 

1. Repository clone karein:  
   ```bash
   git clone https://github.com/DipakSirsath312/AI-ChatBot_Javascript-Project_Gemini-API.git

2. Branch switch karein:
   ```bash
   git checkout UC-3-API_KEY-GenerateResponse

3. API key configure karein (for example config.js ya .env):
   
   // config.js
   
     const API_KEY = "YOUR_API_KEY_HERE";
  
     export default API_KEY;

5. Browser me open karein:
   
    http://localhost:8080/index.html
   
---

## 🗂 File Structure

/project-root
|
│  index.html
|
│  style.css
|
│  App.js (or main JS file)
|
│  config.js (API key & config)
|
└  … (agar modules / utils hain)

---

## 🛠 Tech Stack

HTML5

CSS3

JavaScript (ES6+)

API integration via fetch/axios

Static local server for development

---

# 🚀 Next Steps & Enhancements

API failures ke liye improved error handling

Chatbot ke responses ke liye typing indicator add karna

Logging/analytics integrate karna user interactions ke liye

UI polish aur theme options add karna

---

# 🧑‍💻 Developer

Project by Dipak Sirsath

---

# Branch: UC-2 – Style Input Container
This branch focuses on improving the **input container styling** for the AI ChatBot UI.

---
## 🌱 What’s New / Changed in UC-2
- Better CSS styling for input text box, send button, and chat area.
- More responsive UI: input container works well on different screen sizes.  
- Improved user experience when typing and sending messages.

---
## 📁 Files Affected

📁profile_Picture

index.html → Updated structure of chat and input container

style.css → CSS styles for the input container, chat UI look & feel

App.js 

---
## 🚀 How to Run This Branch

1. **Clone the repository (if not already):**  
   ```bash
   git clone https://github.com/DipakSirsath312/AI-ChatBot_Javascript-Project_Gemini-API.git

2. Checkout this branch:
   ```bash
   git checkout UC-2-Style-Input-Container

3. Open index.html in a browser, or run a local server:
   ```bash
   python3 -m http.server 8080
Then go to http://localhost:8080.
   
---
# ✅ Status
✅ Input container styling is complete

✅ UI looks better and is more user-friendly

---
# 👤 Developer / Maintainer

Author: Dipak Sirsath

---

# Branch: UC-1 Completed for AI ChatBot Created
This branch contains the **first use case (UC-1)** completed for the AI ChatBot project.

---

## 🌱 About This Branch
This branch is created to store the **initial working version** of the chatbot.  
It represents the first successful milestone of the project.

---
## ✅ What is Completed in UC-1
- Basic chatbot UI created using HTML and CSS
---
## 📁 Files Included
index.html → Chat user interface

style.css → Chatbot design & layout

---

## 🚀 How to Run This Branch Code

1. Clone the repository:
   ```bash
   git clone https://github.com/DipakSirsath312/AI-ChatBot_Javascript-Project_Gemini-API.git

---
2. Switch to this branch:
    ```bash
    git checkout UC-1-Completed-for-AI-ChatBot-Created

3. Open index.html in your browser
OR run:
   ```bash
   python -m http.server 8080

---
# 📌 Status

✅ UC-1 Successfully Completed
🚧 More features will be implemented in other branches

---
