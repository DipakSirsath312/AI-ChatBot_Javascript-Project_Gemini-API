# AI ChatBot JavaScript Project  
---

# Branch: UC-5-message_handleUserInput
This branch focuses on handling user input and message flow in a web-based AI chatbot built using JavaScript and integrated with the Gemini API. It represents the fifth use case in a step-by-step development approach, where core chat interaction logic is implemented.

## 🚀 Features Implemented in This Branch
Capture user input from the chat UI

Validate and process user messages

Display user messages dynamically in the chat window

Send user input to the Gemini API

Receive and render AI-generated responses

Maintain a smooth conversational flow between user and AI

## 🧠 Use Case 5: Handle User Input
Objective: Enable the chatbot to correctly read, process, and respond to user messages.

Key Functionalities:

Event handling for user input submission

Message formatting and rendering in the UI

API request handling for AI responses

Error handling for empty or invalid inputs

## 🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript

AI API: Gemini API

Version Control: Git & GitHub

## 📁 Project Structure
AI-ChatBot_Javascript-Project_Gemini-API/
│

├── index.html # Chatbot UI structure

├── style.css # Chatbot styling

├── App.js # Core logic for handling user input & AI responses

├── README.md # Project documentation

## ▶️ How to Run the Project

1. Clone the repository:
   git clone https://github.com/DipakSirsath312/AI-ChatBot_Javascript-Project_Gemini-API.git

2. Switch to this branch:
   git checkout UC-5-message_handleUserInput

3. Open index.html in a browser (or use Live Server).
4. Add your Gemini API key inside App.js if required.

## 🧩 Notes

This branch is part of a use-case based development flow.

It focuses only on handling user input and responses.

Additional features like chat history, loaders, and UI enhancements are planned in later branches.

##  

---
# Branch: `UC-4-ErrorThrow_addMessage`

## 🚀 Use Case 4: Error Handling & Message Rendering
Is branch me chatbot application ko zyada stable aur user-friendly banaya gaya hai by adding **proper error handling** aur **dynamic message rendering system**.

---
## ✅ What’s Implemented in UC-4

### 1. Error Handling (Error Throw)
- API response ke fail hone par proper error throw kiya gaya hai
- Non-200 response ke liye custom error message
- Network issues aur invalid API response handle kiya gaya

Example logic used:
``js
if (!response.ok) {

  throw new Error("Failed to give response");
  
}

### 2. addMessage() Function
   
  Dynamic function banaya gaya jo user aur bot ke messages ko UI me add karta hai
  
  Clean aur structured DOM manipulation
  
  Messages ko real-time chat format me display karta hai
  
  Features:
  
  User message alignment
  
  Bot message styling
  
  Auto scroll to latest message

### 3. Markdown Cleaner Function
   
cleanMarkdown() function implemented

API se aane wale markdown text ko normal readable text me convert kiya gaya

Unwanted symbols remove kiye gaye

---
# 🧠 How to Run This Branch Locally

1.Clone repository
git clone https://github.com/DipakSirsath312/AI-ChatBot_Javascript-Project_Gemini-API.git

2.Switch to branch
git checkout UC-4-ErrorThrow_addMessage

3.Setup API Key
const API_KEY = "YOUR_API_KEY_HERE";

4.Run project
python -m http.server 8080

5.Open in browser:
http://localhost:8080/index.html

---

# 🛠 Tech Stack

HTML5

CSS3

JavaScript (ES6+)

Fetch API

Gemini API Integration

# 💡 What You Learned in This UC

Proper error handling using throw new Error()

Clean UI message rendering using JS

DOM manipulation best practices

Markdown text sanitization

# 🚀 Next Planned Improvements

Loading animation while fetching response

Typing indicator for bot

Better UI animations

Chat history save feature

---

# 👨‍💻 Developer
Developed by 

Dipak Sirsath

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
>>>>>>> main











