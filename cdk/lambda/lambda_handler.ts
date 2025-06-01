import axios from 'axios';

export const handler = async () => {
  const url = process.env.MTG_WIZARD_API_URL;
  if (!url) throw new Error('MTG_WIZARD_API_URL Environemnt Variable Missing');
  const response = await axios.get(url);
  const wizards = response.data.cards;

  return {
    statusCode: 200,
    body: JSON.stringify(wizards.slice(0, 10))
  };
};