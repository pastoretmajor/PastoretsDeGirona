import React from 'react';
import './TeamGrid.css';

const TeamMemberCard = ({ name, rol }) => {
  return (
    <div className="team-member-card">
      <h3 className="team-member-card__rol">{rol}</h3>
      <h4 className="team-member-card__name">{name}</h4>
    </div>
  );
};

export default TeamMemberCard;
