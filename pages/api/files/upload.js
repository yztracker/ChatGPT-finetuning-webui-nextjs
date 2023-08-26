import OpenAI from 'openai';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new OpenAI();

    let file = await client.files.create({
      file: fs.createReadStream(req.file.path),
      purpose: 'fine-tune',
    });


    res.status(200).json({ fileId: file.id });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
