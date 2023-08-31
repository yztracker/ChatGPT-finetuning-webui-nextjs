// pages/api/fetchAllFineTuningJobs.js

import OpenAI from "openai";

export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const openai = new OpenAI(process.env.OPENAI_API_KEY); // 使用你的OpenAI API key

  try {
    const allFineTuningJobs = [];
    for await (const job of openai.fineTuning.jobs.list({ limit: 20 })) {
      allFineTuningJobs.push(job);
    }
    res.status(200).json(allFineTuningJobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fine-tuning jobs." });
  }
};
