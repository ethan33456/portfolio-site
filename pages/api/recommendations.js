// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Caleb Longenecker',
    image: "images/caleb.jpeg",
    designation: 'Senior Media Buyer and Head Project Manager at Dogwood Social',
    view: "Ethan is one of the best developers I have ever worked with! He is good at finding solutions for complex issues and implementing those solutions. He also has an excellent eye for design, so I never had to worry about giving him detailed instructions or mockups for UX and UI work!",
    linkednURL: "https://www.linkedin.com/in/caleb-longenecker-a68611194/"
  },
  {
    id: 1,
    name: 'Muhammad Ullah',
    image: "images/muhammad.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Ethan for web development positions. Their expertise in React and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  }
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
