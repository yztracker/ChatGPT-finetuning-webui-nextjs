import OpenAI from "openai";

export default async (req, res) => {
  if (req.method !== 'DELETE') {
    return res.status(405).end();
  }

  const { modelId, apiKey } = req.body;
  
  if (!modelId) {
    return res.status(400).json({ error: 'missing model ID' });
  }

  if (!apiKey) {
    return res.status(400).json({ error: 'missing api key' });
  }

  const openai = new OpenAI(apiKey);  

  try {
    const deletedModel = await openai.models.del(modelId);
    return res.status(200).json(deletedModel);
  } catch (error) {
    return res.status(500).json({ error: '伺服器錯誤', details: error.message });
  }
};
