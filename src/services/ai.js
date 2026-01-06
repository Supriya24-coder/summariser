import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY

const baseUrl =`https://api.groq.com/openai/v1/chat/completions`;

export const webSummary = async(url)=>{
  const res = await axios.post(baseUrl,{
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes webpages."
        },
        {
          role: "user",
          content: `Summarize this webpage content in simple words:\n\n${url}`
        }
      ],
      temperature: 0.3,
      max_tokens: 200
    },
    {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      }
    })
 return res.data?.choices[0]?.message?.content;
}
