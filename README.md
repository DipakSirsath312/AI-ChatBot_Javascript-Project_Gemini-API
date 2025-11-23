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

4. API key configure karein (for example config.js ya .env):
   // config.js
  const API_KEY = "YOUR_API_KEY_HERE";
  export default API_KEY;

5. Browser me open karein:
    http://localhost:8080/index.html
---
