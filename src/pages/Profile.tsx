import React from "react";
import { useParams } from "react-router-dom";
import PersonalCard from "../components/PersonalCard";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [personalData, setPersonalData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Mock data for now - in a real app, this would fetch from an API
    const mockData = {
      id: id,
      name: "Emma van Utrecht",
      age: 30,
      location: "Utrecht",
      bio: "Loves cycling along the canals and outdoor activities. Looking for someone to explore the city with!",
      imageUrl: "https://via.placeholder.com/300x400?text=Emma",
    };

    setTimeout(() => {
      setPersonalData(mockData);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!personalData) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-page">
      <h1>{personalData.name}'s Profile</h1>
      <PersonalCard
        name={personalData.name}
        age={personalData.age}
        location={personalData.location}
        bio={personalData.bio}
        imageUrl={personalData.imageUrl}
      />
    </div>
  );
};

export default Profile;
