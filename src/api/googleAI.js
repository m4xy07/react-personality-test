import { TextServiceClient } from "@google-ai/generativelanguage.v1beta2";
import { GoogleAuth } from "google-auth-library";

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export async function generateSuperheroNameAndPersonality(prompt) {
  const result = await client.generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
  });

  return result;
}