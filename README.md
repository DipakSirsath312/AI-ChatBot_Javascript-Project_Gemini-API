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

