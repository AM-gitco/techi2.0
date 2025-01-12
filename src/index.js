/* eslint-disable no-unused-vars */
let api_Key = "AIzaSyDcwYGo-hWcrAA05ORqscPjZ6ixcDJu5NU";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
//   const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(api_Key);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 30,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    return (result.response.text())
  }
  
 export default run;