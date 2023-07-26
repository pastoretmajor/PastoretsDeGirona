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
      rol: "Director"
    },
    {
      name: "Núria Donato",
      rol: "Ajudant de direcció"
    },
    {
      name: "Alba Saló",
      rol: "Gestió de comunicació i màrqueting"
    },
    {
      name: "Paula Saló",
    },
    {
      name: "Natàlia Donato",
      rol: "Tècnic de caracterització"
    },
    {
      name: "Josep Mitjà",
      rol: "Gestió administrativa"
    },
    {
      name: "Marta Nadal Jimenez",
      rol: "Tècnic de llums i so"
    },
    {
      name: "Daniel Moreta",
      rol: "Director musical"
    },
    {
      name: "Isaac d'Aiguaviva",
      rol: "Disseny d'escenografia"
    },
    {
      name: "Pau Morales",
      rol: "Dissenyador gràfic"
    },
    {
      name: "Joan Cano",
      rol: "Gestió de personal"
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
            rol={teamMember.rol}
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
