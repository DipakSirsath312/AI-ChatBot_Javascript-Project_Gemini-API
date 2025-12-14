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

    // Defines a function `cleanMarkdown` to remove any Markdown formatting
    // (like headers, bold text) from the response.
    return text
    .replace(/#{1,6}\s?/g,'') // Remove any Markdown headers #, ##, ###.

    .replace(/\*\*/g,'') // Removes bold formatting double asterisks **

    .replace(/\n{3,}/g,'\n\n') // replaces more than two newlines with two.

    .trim() // Removes any whitespace from the start and end of the string.
}

function addMessage(message,isUser){
    const messageElement = document.createElement('div');
    messageElement.classList.add('message')

    messageElement.classList.add(isUser? 'user-message' : 'bot-message')

    const profileImage = document.createElement('img')
    profileImage.classList.add('profile-image')

    profileImage.src = isUser ? 'profile_Picture/user1.jpg' : 'chatbot.jpg'

    profileImage.alt = isUser? 'User' : 'bot'

    const messageContent = document.createElement('div')
    messageContent.classList.add('message-content')

     messageContent.textContent = message
     
     messageElement.appendChild(profileImage)
     messageElement.appendChild(message)

     chatMessages.appendChild(messageElement)
}

async function handleUserInput() {
    const userMessage = userInput.ariaValueMax.trim();

    if(userMessage){
        addMessage(userMessage, true)

        userInput.value = ''

        sendButton.disabled = true
        userInput.disabled = true
    }

    try{
        const botMessage = await generateResponse
        (userMessage)
        addMessage(cleanMarkdown(botMessage), false)
    } catch (error){

    }
}
