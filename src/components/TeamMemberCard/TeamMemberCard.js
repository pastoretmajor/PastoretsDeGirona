import React from 'react';
import './TeamGrid.css';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';

const TeamMemberCard = ({ name, role, bio, imageUrl, twitterLink, instagramLink, facebookLink, tiktokLink }) => {
  return (
    <div className="team-member-card">
      <img className="team-member-card__image" src={imageUrl} alt="Profile" />
      <div className="team-member-card__details">
        <h2 className="team-member-card__name">{name}</h2>
        <h3 className="team-member-card__role">{role}</h3>
        <p className="team-member-card__bio">{bio}</p>
        <div className="team-member-card__social">
          {twitterLink && (
            <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="icon">
              <FaTwitter />
            </a>
          )}
          {instagramLink && (
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram />
            </a>
          )}
          {facebookLink && (
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="icon">
              <FaFacebook />
            </a>
          )}
          {tiktokLink && (
            <a href={tiktokLink} target="_blank" rel="noopener noreferrer" className="icon">
              <FaTiktok />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
