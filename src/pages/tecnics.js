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
      name: "Salvador de Castro Vila",
      rol: "Director"
    },
    {
      name: "Núria Donato Vilanova",
      rol: "Ajudant de direcció"
    },
    {
      name: "Alba Saló Rocas",
      rol: "Gestió de comunicació i màrqueting"
    },
    {
      name: "Paula Saló Rocas",
    },
    {
      name: "Natàlia Donato Vilanova",
      rol: "Tècnic de caracterització"
    },
    {
      name: "Josep Mitjà Pau",
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
      name: "Pau Morales Albert",
      rol: "Dissenyador gràfic"
    },
    {
      name: "Joan Cano Dorca",
      rol: "Gestió de personal"
    },
  ];

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EquipTecnic} blurSrc={EquipTecnicBlur} alt="Equip tecnic" text="Equip Tècnic" opacity={.5}/>
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
