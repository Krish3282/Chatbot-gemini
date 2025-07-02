// config/gemini.js
import { GoogleGenAI } from "@google/genai";
//  AIzaSyAmA9AEEk3OKCmOFkk2Cj-vtuSON2MKpWg
const ai = new GoogleGenAI({ apiKey: "" });
async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:  [
  {
    "role": "user",
    "parts": [
      {
        "text": prompt 
      }
    ]
  }
]
  });
  console.log(response.text);
  return response.text;
}

export default main;


