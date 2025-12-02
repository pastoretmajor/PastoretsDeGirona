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
      rol: "Direcció de l'obra"
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
      name: "Marta Nadal Jiménez",
      rol: "Tècnic de llums i so"
    },
    {
      name: "Natàlia Donato \n Arnau Morales\n Daniel Moreta \n Sara Pujolràs",
      rol: "Equip musical"
    },
    {
      name: "Adrià Cano Puigvert",
      rol: "Dissenyador gràfic"
    },
    {
      name: "Joan Cano Dorca",
      rol: "Gestió de personal"
    },
  ];

  const renderNamesWithLineBreaks = (name) => {
    const names = name.split('\n');
    return names.map((part, index) => <div key={index}>{part}</div>);
  };

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
            name={renderNamesWithLineBreaks(teamMember.name)}
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
