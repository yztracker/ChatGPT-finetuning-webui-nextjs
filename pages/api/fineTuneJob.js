import OpenAI from "openai";

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { training_file, model } = req.body;

  if (!training_file) {
    return res.status(400).json({ error: 'missing trainingFileId' });
  }

  const openai = new OpenAI(process.env.OPENAI_API_KEY);

  try {
    const fineTune = await openai.fineTuning.jobs.create({
      "training_file": training_file,
      "model": model
    });
    console.log(fineTune)
    return res.status(200).json(fineTune);
  } catch (error) {
    return res.status(500).json({ error: '伺服器錯誤', details: error.message });
  }
};
