import { GoogleGenerativeAI } from "https://cdn.skypack.dev/-/@google/generative-ai@v0.14.0-qAGGYYPDGa5jQ4SREiyQ/dist=es2019,mode=imports/optimized/@google/generative-ai.js";
let prompt = "Do these look store-bought or homemade?";
const textarea = document.getElementById('textarea');
textarea.addEventListener('input', OnSend);

textarea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey){
        event.preventDefault();
        OnClick();
        textarea.value = "";
    }
});

const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    OnClick();
});

function OnSend() {
  textarea.style.height = 'auto';
  if (textarea.scrollHeight < 188){
  textarea.style.height = textarea.scrollHeight + 'px';
  } else {
    textarea.style.height = '188px';
  }
}

function OnClick() {
    const text = textarea.value;
    if (text){
      const message = document.createElement('div');
      message.classList.add('chat-message');
      message.textContent = text;
      const chatHistory = document.getElementById('chat-history');
      chatHistory.appendChild(message);
      Respond(text);
    }
    textarea.value = "";
}

async function Respond(userPrompt) {
  prompt = userPrompt;
  const API_KEY = "AIzaSyA4hN7zS8LnsJgz20Nm4GHbNIuEFJemp8I";
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const message = document.createElement('div');
  message.classList.add('message-response');
  message.textContent = text;
  const chatHistory = document.getElementById('chat-history');
  chatHistory.appendChild(message);
}



