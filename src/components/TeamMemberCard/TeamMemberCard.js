import React from 'react';
import './TeamGrid.css';

const TeamMemberCard = ({ name }) => {
  return (
    <div className="team-member-card">
      <h2 className="team-member-card__name">{name}</h2>
    </div>
  );
};

export default TeamMemberCard;
