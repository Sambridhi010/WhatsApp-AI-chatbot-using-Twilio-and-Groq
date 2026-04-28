require('dotenv').config();
const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
const OpenAI = require('openai');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1'
});

app.post('/whatsapp', async (req, res) => {
  const incomingMsg = req.body.Body;

  let aiReply = "Sorry, something went wrong.";

  try {
    const response = await openai.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a helpful WhatsApp assistant." },
        { role: "user", content: incomingMsg }
      ],
    });

    aiReply = response.choices[0].message.content;
  } catch (err) {
    console.error('AI Error:', err.message);
  }

  const twiml = new MessagingResponse();
  twiml.message(aiReply);

  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});