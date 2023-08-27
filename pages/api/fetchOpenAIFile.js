export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    const apiKey = req.body.apiKey; 
  
    if (!apiKey) {
      return res.status(400).json({ error: 'API key is required.' });
    }
  
    try {
      const response = await fetch('https://api.openai.com/v1/files', {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data from OpenAI.' });
    }
  };
  