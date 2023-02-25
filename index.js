const intro = [
  "Hello",
  "Greetings",
  "Good morning",
  "Good afternoon",
  "Hey there",
  "Hi",
  "Salutations",
  "Welcome",
  "Nice to meet you",
  "Howdy",
];

const inspire1 = [
  "Believe in yourself, and you can achieve anything you set your mind to.",
  "Every mistake is a valuable lesson, and every failure is a stepping stone to success.",
  "The only limit to your potential is the one you set for yourself.",
  "Success is not final, and failure is not fatal; it's the courage to continue that counts.",
  "Your attitude determines your altitude; a positive outlook leads to great heights.",
  "Don't wait for opportunities, create them yourself and make the most of every moment.",
  "You have the power to change your life; take action and make it happen.",
  "A small act of kindness can make a big difference in someone's life.",
  "Embrace your imperfections and use them to fuel your growth and development.",
  "You are capable of amazing things, believe in yourself and go for it!"
];

const inspire2 = [
  "Dream big, work hard, and never give up on your aspirations.",
  "Your past does not define your future; the choices you make today do.",
  "Embrace challenges as opportunities to learn and grow, and never be afraid to try new things.",
  "Success is not just about achieving your goals; it's about the journey and the person you become along the way.",
  "Believe in the power of positivity, and you will attract positivity into your life.",
  "Happiness is a choice; choose to focus on the good and let go of the negative.",
  "Don't compare yourself to others; focus on being the best version of yourself.",
  "Take care of your mental, emotional, and physical well-being, and everything else will fall into place.",
  "You have the ability to create your own reality; use your thoughts and actions to manifest the life you desire.",
  "Life is too short to hold onto grudges and negative energy; choose forgiveness and move forward with peace in your heart."
];

const goodbyes = [
  "Farewell, my dear friend. May our paths cross again in the future.",
  "Goodbye for now. I'll miss our conversations and laughter.",
  "It's time for me to go. Thank you for the memories and experiences.",
  "Wishing you all the best as we say our goodbyes.",
  "It's hard to say goodbye, but I know we'll always be connected in our hearts.",
  "Take care of yourself as we bid farewell.",
  "Farewell, my love. I'll carry our time together with me always.",
  "It's time to say goodbye, but I'm grateful for the moments we shared.",
  "Farewell, and may your journey ahead be filled with joy and success.",
  "Goodbye, and may the memories we've created together be cherished forever."
];

const randIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
}

console.log(`\n ${intro[randIndex(intro)]},\n ${inspire1[randIndex(inspire1)]}
  \n ${inspire2[randIndex(inspire2)]} \n ${goodbyes[randIndex(goodbyes)]} \n`);
