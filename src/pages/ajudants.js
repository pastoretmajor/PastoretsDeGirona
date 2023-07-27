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
      name: "Imma Salazarmauri Roig",
    },
    {
      name: "Miquel Saló Soler",
    },
    {
      name: "Sara Pujolràs Naspreda",
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
      name: "Alba Morales Donato",
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
      name: "Marc Camacho Cateura",
    },
    {
      name: "Jordi Carreras Tarrés",
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
    {
      name: "Carme Parramon Colom",
    },
    {
      name: "Anna Palahí Mundet"
    },
    {
      name: "Cora Mir Sánchez",
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
