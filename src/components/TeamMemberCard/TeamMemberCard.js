import React from 'react';
import './TeamGrid.css';

const TeamMemberCard = ({ name, rol }) => {
  return (
    <div className="team-member-card">
      <div className="team-member-card__rol">{rol}</div>
      <div className="team-member-card__name">{name}</div>
    </div>
  );
};

export default TeamMemberCard;
