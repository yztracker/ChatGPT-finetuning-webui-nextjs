import OpenAI from 'openai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fileId } = req.body;
    const client = new OpenAI(); 

    console.log(`Starting fine-tuning`);
    let fineTune = await client.fineTuning.jobs.create({ model: 'gpt-3.5-turbo', training_file: fileId });
    console.log(`Fine-tuning ID: ${fineTune.id}`);


    res.status(200).json({ fineTuningId: fineTune.id });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
