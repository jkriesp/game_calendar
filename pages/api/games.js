import axios from 'axios';

export default async function handler(req, res) {
  const { dates } = req.query;

  try {
    const apiUrl = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=${dates}`;
    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {

    res.status(500).json({ message: 'Error fetching data from RAWG API', error: error.message });
  }
}
