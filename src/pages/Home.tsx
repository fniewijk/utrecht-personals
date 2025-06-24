import React from "react";
import PersonalCard from "../components/PersonalCard";

const Home: React.FC = () => {
  const featuredPersonals = [
    {
      id: 1,
      name: "Emma van Utrecht",
      age: 30,
      location: "Utrecht",
      bio: "Loves cycling along the canals and outdoor activities.",
      imageUrl: "https://via.placeholder.com/300x400?text=Emma",
    },
    {
      id: 2,
      name: "Lars de Vries",
      age: 28,
      location: "Utrecht",
      bio: "Avid reader and coffee enthusiast. Love exploring local cafes.",
      imageUrl: "https://via.placeholder.com/300x400?text=Lars",
    },
    {
      id: 3,
      name: "Sophie Jansen",
      age: 25,
      location: "Utrecht",
      bio: "Passionate about art and music. Regular at local galleries.",
      imageUrl: "https://via.placeholder.com/300x400?text=Sophie",
    },
  ];

  return (
    <div className="home-page">
      <h1>Welcome to Utrecht Personals</h1>
      <p>Discover amazing people in your area!</p>
      <div className="featured-personals">
        {featuredPersonals.map((person) => (
          <PersonalCard
            key={person.id}
            name={person.name}
            age={person.age}
            location={person.location}
            bio={person.bio}
            imageUrl={person.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
