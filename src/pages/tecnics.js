import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EquipTecnic from '../images/banners/equiptecnic-actorsactrius-ajudantsproduccio.webP'
import EquipTecnicBlur from '../images/blured/equiptecnic-actorsactrius-ajudantsproduccio.webP'


const Tecnics = () => {
  const teamMembers = [
    {
      name: "Salvador de Castro",
    },
    {
      name: "Núria Donato",
    },
    {
      name: "Alba Saló",
    },
    {
      name: "Paula Saló",
    },
    {
      name: "Natàlia Donato",
    },
    {
      name: "Josep Mitjà",
    },
    {
      name: "Marta Nadal Jimenez",
    },
    {
      name: "Daniel Moreta",
    },
    {
      name: "Isaac d'Aiguaviva",
    },
    {
      name: "Pau Morales",
    },
    {
      name: "Joan Cano",
    },
    {
      name: "Carme Parramon",
    },
  ];

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EquipTecnic} blurSrc={EquipTecnicBlur} alt="Equip tecnic" text="Equip Tècnic" />
      <div className="team-grid">
      <div className="team-grid__cards">
        {teamMembers.map((teamMember, index) => (
          <TeamMemberCard
            key={index}
            name={teamMember.name}
          />
        ))}
      </div>
    </div>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
    
  );
};

export default Tecnics;
