const axios = require('axios');

export const handler = async () => {
  const url = process.env.MTG_WIZARD_API_URL;
  if (!url) throw new Error('MTG_WIZARD_API_URL Environemnt Variable Missing');
  const response = await axios.get(url);
  let wizards = response.data.cards;

  wizards.filter(card => !isNaN(parseInt(card.power)))
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