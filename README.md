# WhatsApp AI Chatbot 🤖

A WhatsApp chatbot powered by Groq's Llama 3.1 model that replies to messages with AI-generated responses using Twilio's messaging API.

## Tech Stack
- **Node.js** - Runtime environment
- **Express.js** - Web framework for handling webhooks
- **Twilio** - WhatsApp messaging API
- **Groq API** - Free AI inference (Llama 3.1)
- **ngrok** - Webhook tunneling for local development

## How It Works
1. User sends a WhatsApp message to the Twilio sandbox number
2. Twilio forwards the message to the Express.js webhook
3. The message is sent to Groq's Llama 3.1 model
4. The AI response is sent back to the user via Twilio

## Setup

### Prerequisites
- Node.js installed
- Twilio account
- Groq API key (free at console.groq.com)
- ngrok

### Installation
1. Clone the repo
   git clone https://github.com/yourusername/whatsapp-ai-bot.git

2. Install dependencies
   npm install

3. Create a .env file
   TWILIO_ACCOUNT_SID=your_sid
   TWILIO_AUTH_TOKEN=your_token
   GROQ_API_KEY=your_groq_key

4. Start the server
   node index.js

5. Start ngrok
   ngrok http 3000

6. Add the ngrok URL to Twilio sandbox webhook
   https://your-url.ngrok-free.app/whatsapp

## Author
Sambridhi Neupane
