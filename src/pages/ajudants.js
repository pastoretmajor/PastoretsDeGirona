import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import castingIcon from '../images/castingIcon.png';
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import EquipTecnic from '../images/backgroundImage.jpg'

const Ajudants = () => {
  const teamMembers = [
    {
      name: "Lluís Bachs",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      facebookLink: "https://www.facebook.com",
    },
    {
      name: "Imma Salazarmauri Roig",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
    },
    {
      name: "Núria Sanchez Vilches",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      instagramLink: "https://www.instagram.com",
    },
    {
      name: "Miques Saló Soler",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Sara Pujolràs",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Josep Maria Martí",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
    },
    {
      name: "Carmina Juher Iglesias",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Oriol Tugas Prats",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Cristina Esteve i Bosch",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Antoni Fernandez Sandoval",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Alba Morales",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Maria Puigvert Pell",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Carme Rocas Alsina",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Montserrat Bertran",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Joan Solà Espuña",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Marc Camacho",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Jordi Carreras",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Gemma Boada Casals",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Iris Martí Pujolràs",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Mariona Pèlach",
      role: "Rol",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
  ];

  return (
    <div>
      <Navbar />
      <ImageComponent src={EquipTecnic} alt="Ajudants de Producció" text="Ajudants de Producció" />
      <div className="team-grid">
      <div className="team-grid__cards">
        {teamMembers.map((teamMember, index) => (
          <TeamMemberCard
            key={index}
            name={teamMember.name}
            role={teamMember.role}
            bio={teamMember.bio}
            imageUrl={teamMember.imageUrl}
            twitterLink={teamMember.twitterLink}
            instagramLink={teamMember.instagramLink}
            facebookLink={teamMember.facebookLink}
            tiktokLink={teamMember.tiktokLink}
          />
        ))}
      </div>
    </div>
      <Footer />
    </div>
    
  );
};

export default Ajudants;