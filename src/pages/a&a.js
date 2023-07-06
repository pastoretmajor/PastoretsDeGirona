import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import castingIcon from '../images/castingIcon.png';
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import EquipActors from '../images/backgroundImage.webP'

const Actors = () => {
  const teamMembers = [
    {
      name: "Olga Miralles",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
      twitterLink: "https://twitter.com",
      instagramLink: "https://www.instagram.com",
      facebookLink: "https://www.facebook.com",
      tiktokLink: "https://www.tiktok.com",
    },
    {
      name: "Xavier Sagrera Auñón",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Clara Arxer Vargas",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Joan Maria Soler Reguera",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Adrià Cano Puigvert",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Cora Mir Sanchez",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Eva Casadevall Adroher",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Gerard Serrat",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Maria Benitez",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Joaquim de Rioja Bosch",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Oriol Marsal Piferrer",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Sugita Puig Bertran",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Viki Exposito",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Anna Batlle",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Maria Batlle",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Pere Batlle Martinez",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Marta Batlle Martinez",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Ariadna Morales Donato",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Arcadi Morales Donato",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Arnau Morales Donato",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Cristina Cortés Bayod",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Sònia Poch Anglada",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Elisabet Sierra Hereu",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "David Vilanova Buixó",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Júlia Ruhí Barnés",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Jordi Quera Juher",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Flora Bosch Capdeferro",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Rita Dengra Reyner",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Marta Mitjà Cortés",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Joel Cano Puigvert",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "David Gonzàlez",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "David Camacho Cateura",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Aina Castillo",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Paula Sanz Nadal",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Francina Soler Donato",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Aina Carreras Ribas",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Max Massò Boadas",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Daniel Peracaula",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Eduard Martí Pujolràs",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Laura Prats",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Robert Gonzàlez Díez",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Irene Gonzàlez Comalda",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Aleix Sagrera",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Pol Campos",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Irene Hereu Roca",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Josep Lluis Traiter Bota",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Mariona Moreta Mitjà",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Marcel Moreta Mitjà",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
    {
      name: "Paula Rullo Burgués",
      role: "Paper",
      bio: "Text breu",
      imageUrl: castingIcon,
    },
  ];

  return (
    <div>
      <Navbar />
      <ImageComponent src={EquipActors} alt="Actors i Actrius" text="Actors I Actrius" />
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

export default Actors;
