# AI ChatBot JavaScript Project  
## Branch: `UC-4-ErrorThrow_addMessage`

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
