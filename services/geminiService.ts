import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from '../types';

// Initialize the Gemini client
// Note: In a real environment, handle the case where API_KEY might be missing gracefully.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectBlueprint = async (idea: string): Promise<AIResponse> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: `You are a Senior Technical Architect at a high-end web agency.
      A client has pitched this idea: "${idea}".
      Create a technical blueprint JSON with:
      1. A recommended tech stack (array of strings, e.g., "React", "Node.js").
      2. 3 key features that would make it stand out (array of strings).
      3. A design aesthetic recommendation (short string).
      4. Estimated development time (short string).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            stack: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            features: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            aesthetic: { type: Type.STRING },
            estimatedTime: { type: Type.STRING }
          },
          required: ["stack", "features", "aesthetic", "estimatedTime"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as AIResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback response in case of error to keep UI functional
    return {
      stack: ["React", "Tailwind", "Node.js"],
      features: ["Error handling integration", "System resilience", "Fallback UI"],
      aesthetic: "Cyberpunk Glitch (System Failure Mode)",
      estimatedTime: "Unknown"
    };
  }
};
