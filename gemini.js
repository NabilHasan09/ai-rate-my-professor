const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

export const model = genAI.getGenerativeModel({
     model: "gemini-1.5-flash", 
     systemInstruction: "You are an assistant that answers questions about professors at different colleges, your job is to let customers know what teachers are available at a certain institution/college/university and guide them get the best teacher available for a specific course/discipline"});

