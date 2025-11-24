# AI ChatBot JavaScript Project  
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

2. addMessage() Function
   
  Dynamic function banaya gaya jo user aur bot ke messages ko UI me add karta hai
  
  Clean aur structured DOM manipulation
  
  Messages ko real-time chat format me display karta hai
  
  Features:
  
  User message alignment
  
  Bot message styling
  
  Auto scroll to latest message

3. Markdown Cleaner Function
   
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
