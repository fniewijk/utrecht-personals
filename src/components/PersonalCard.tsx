import React from 'react';

interface PersonalCardProps {
    name: string;
    age: number;
    location: string;
    bio: string;
    imageUrl: string;
}

const PersonalCard: React.FC<PersonalCardProps> = ({ name, age, location, bio, imageUrl }) => {
    return (
        <div className="personal-card">
            <img src={imageUrl} alt={`${name}'s profile`} className="personal-card-image" />
            <h2 className="personal-card-name">{name}</h2>
            <p className="personal-card-age">Age: {age}</p>
            <p className="personal-card-location">Location: {location}</p>
            <p className="personal-card-bio">{bio}</p>
        </div>
    );
};

export default PersonalCard;