const API_KEY = 'AIzaSyDb63Cvh9AC2I46rO2F8z1aJkYBrpKUeiE';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const chatMessages = document.getElementById("chat-message");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send - button");

async function generateResponse(prompt) {
    const response = await fetch(`${API_URL} ?key= ${API_KEY}`,{

        method: 'POST',
        headers:{
            'Content-Type' : 'application/json' 
        },
        body:JSON.stringify({
            contents:[
                {
                    parts:[
                        {
                            text:prompt
                        }
                    ]
                }
            ]
        })
    })

    if(!response.ok){
        throw new Error('Failed to give response');
    }

    const data = await response.json()
    return data.candidates[0].content.parts[0].text;
}

function cleanMarkdown(text){
    return text
    .replace(/#{1,6}\s?/g,'')

    .replace(/\*\*/g,'')

    .replace(/\n{3,}/g,'\n\n')

    .trim()
}

function addMessage(message,isUser){
    const messageElement = document.createElement('div');
    messageElement.classList.add('message')

    messageElement.classList.add(isUser? 'user-message' : 'bot-message')
}