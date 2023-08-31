// /api/listModels.js
import OpenAI from "openai";

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { apiKey } = req.body;
    
    const openai = new OpenAI(apiKey);
    const modelList = [];

    try {
        const models = await openai.models.list();
        
        for await (const model of models) {
            modelList.push(model);
        }

        return res.status(200).json({ models: modelList });
    } catch (error) {
        return res.status(500).json({ error: '伺服器錯誤', details: error.message });
    }
};
