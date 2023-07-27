import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EquipTecnic from '../images/banners/equiptecnic-actorsactrius-ajudantsproduccio.webP'
import EquipTecnicBlur from '../images/blured/equiptecnic-actorsactrius-ajudantsproduccio.webP'


const Ajudants = () => {
  const teamMembers = [
    {
      name: "Lluís Bachs",
    },
    {
      name: "Montserrat Bertran",
    },
    {
      name: "Gemma Boada Casals",
    },
    {
      name: "Jordi Carreras Tarrés",
    },
    {
      name: "Marc Camacho Cateura",
    },
    {
      name: "Cristina Esteve i Bosch",
    },
    {
      name: "Antoni Fernandez Sandoval",
    },
    {
      name: "Carmina Juher Iglesias",
    },
    {
      name: "Josep Maria Martí",
    },
    {
      name: "Iris Martí Pujolràs",
    },
    {
      name: "Cora Mir Sánchez",
    },
    {
      name: "Alba Morales Donato",
    },
    {
      name: "Sara Pujolràs Naspreda",
    },
    {
      name: "Anna Palahí Mundet"
    },
    {
      name: "Carme Parramon Colom",
    },
    {
      name: "Mariona Pèlach",
    },
    {
      name: "Maria Puigvert Pell",
    },
    {
      name: "Carme Rocas Alsina",
    },
    {
      name: "Imma Salazarmauri Roig",
    },
    {
      name: "Miquel Saló Soler",
    },
    {
      name: "Joan Solà Espuña",
    },
    {
      name: "Oriol Tugas Prats",
    },   
  ];

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EquipTecnic} blurSrc={EquipTecnicBlur} alt="Ajudants de Producció" text="Ajudants de Producció" opacity={.5}/>
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
