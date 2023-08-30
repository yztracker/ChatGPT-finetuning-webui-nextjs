// pages/api/fetchAllFineTuningJobs.js

import OpenAI from "openai";

export default async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).end();
    }
  
    const { fileId } = req.body; // 從請求體中提取文件ID
  
    if (!fileId) {
      return res.status(400).json({ error: "File ID is required." });
    }
  
    const openai = new OpenAI(process.env.OPENAI_API_KEY); // 使用你的OpenAI API key
  
    try {
      const file = await openai.files.del(fileId);
      res.status(200).json(file);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete the file." });
    }
  };
  