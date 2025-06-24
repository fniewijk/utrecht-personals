import React from "react";
import PersonalCard from "../components/PersonalCard";
import { Personal } from "../utils/api";

const Browse: React.FC = () => {
  const [personals, setPersonals] = React.useState<Personal[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadPersonals = async () => {
      try {
        // Mock data for now - in a real app, this would fetch from an API
        const mockData: Personal[] = [
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
          {
            id: 4,
            name: "Daan Bakker",
            age: 32,
            location: "Utrecht",
            bio: "Tech enthusiast and startup founder. Looking for adventure partners.",
            imageUrl: "https://via.placeholder.com/300x400?text=Daan",
          },
        ];

        setTimeout(() => {
          setPersonals(mockData);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError("Failed to load personals");
        setLoading(false);
      }
    };

    loadPersonals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="browse-page">
      <h1>Browse Personals</h1>
      <div className="personal-cards">
        {personals.map((personal) => (
          <PersonalCard
            key={personal.id}
            name={personal.name}
            age={personal.age}
            location={personal.location}
            bio={personal.bio}
            imageUrl={personal.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
