import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EquipTecnic from '../images/banners/equiptecnic-actorsactrius-ajudantsproduccio.png'

const Ajudants = () => {
  const teamMembers = [
    {
      name: "Lluís Bachs",
    },
    {
      name: "Imma Salazarmauri Roig",
    },
    {
      name: "Núria Sanchez Vilches",
    },
    {
      name: "Miques Saló Soler",
    },
    {
      name: "Sara Pujolràs",
    },
    {
      name: "Josep Maria Martí",
    },
    {
      name: "Carmina Juher Iglesias",
    },
    {
      name: "Oriol Tugas Prats",
    },
    {
      name: "Cristina Esteve i Bosch",
    },
    {
      name: "Antoni Fernandez Sandoval",
    },
    {
      name: "Alba Morales",
    },
    {
      name: "Maria Puigvert Pell",
    },
    {
      name: "Carme Rocas Alsina",
    },
    {
      name: "Montserrat Bertran",
    },
    {
      name: "Joan Solà Espuña",
    },
    {
      name: "Marc Camacho",
    },
    {
      name: "Jordi Carreras",
    },
    {
      name: "Gemma Boada Casals",
    },
    {
      name: "Iris Martí Pujolràs",
    },
    {
      name: "Mariona Pèlach",
    },
  ];

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EquipTecnic} alt="Ajudants de Producció" text="Ajudants de Producció" />
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

export default Ajudants;
