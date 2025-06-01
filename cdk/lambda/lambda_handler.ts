import axios from 'axios';

let client = axios;

export function setHttpClient(mockClient) {
  client = mockClient;
}


export async function handler() {
  const url = process.env.MTG_WIZARD_API_URL;
  if (!url) throw new Error('MTG_WIZARD_API_URL Environemnt Variable Missing');
  const response = await client.get(url);
  let wizards = response.data?.cards;

  if (!Array.isArray(wizards) || wizards.length === 0) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'No card data obtained.' }),
    };
  }

  wizards = wizards.filter(card => !isNaN(parseInt(card.power)))
  wizards.sort((card1, card2) => parseInt(card1.power) - parseInt(card2.power));
  wizards = wizards.map(card => ({
      name: card.name, 
      type: card.type, 
      power: card.power, 
      toughness: card.toughness, 
      rarity: card.rarity, 
      flavor: card.flavor, 
      colors: card.colors, 
      manaCost: card.manaCost, 
      imageUrl: card.imageUrl
    }));

  return {
    statusCode: 200,
    body: JSON.stringify(wizards)
  };
};