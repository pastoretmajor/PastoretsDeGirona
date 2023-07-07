import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import castingIcon from '../images/castingIcon.webP';
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import EquipTecnic from '../images/forcaCompleta.webP'
import BlurEquipTecnic from '../images/forcaCompletaBlur.webP'


const Tecnics = () => {
  const teamMembers = [
    {
      name: "Salvador de Castro",
      role: "Director",
      bio: "Text breu",
      imageUrl: castingIcon,
      facebookLink: "https://www.facebook.com",
    },
    {
      name: "Núria Donato",
      role: "Ajudant de direcció",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
    },
    {
      name: "Alba Saló",
      role: "Gestió de Comunicació i Màrquesting",
      bio: "Text breu",
      imageUrl: castingIcon,
      instagramLink: "https://www.instagram.com",
    },
    {
      name: "Paula Saló",
      role: "Gestió de Comunicació i Màrqueting",
      bio: "Text breu",
      imageUrl: castingIcon,
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Natàlia Donato",
      role: "Tècnic de caracterització & Disseny de vestuari",
      bio: "Text breu",
      imageUrl: castingIcon,
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Josep Mitjà",
      role: "Gestió administrativa",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
    },
    {
      name: "Marta Nadal Jimenez",
      role: "Tècnic de llums i so",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Daniel Moreta",
      role: "Direcció musical",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Isaac d'Aiguaviva",
      role: "Disseny d'escenografía",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Pau Morales",
      role: "Dissenyador gràfic",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Joan Cano",
      role: "Gestió de personal",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Carme Parramon",
      role: "Dissenyador gràfic",
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
      <ImageComponent src={EquipTecnic} blurSrc={BlurEquipTecnic} alt="Equip tecnic" text="Equip Tècnic" />
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

export default Tecnics;
