// /* eslint-disable no-undef */
// // let api_key = "20ac52629998f552eabdceab7e918aec294c227a";
// // let apiKey = "AIzaSyAnGBJmhox6qkBEN3BqQTI7avOZgUtGA0";

// import {
//     GoogleGenerativeAI,
//     // eslint-disable-next-line no-unused-vars
//     HarmCategory,
//     // eslint-disable-next-line no-unused-vars
//     HarmBlockThreshold,
// } from "@google/generative-ai";

// // const apiKey = process.env.API_KEY || api_key;
// const genAI = new GoogleGenerativeAI(api_key);

// const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash"
// });

// const generationConfig = {
//     temprature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
// }

// async function run(prompt){
//     const chatSession = model.startChat({
//         generationConfig,
//         history: [
//         ],
//     })

//     const result = await chatSession.sendMessage(prompt);
//     return (result.response.text)
// }


// export default run;