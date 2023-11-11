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
      name: "Lluís Bachs Panadés",
    },
    {
      name: "Montserrat Bertran Tenas",
    },
    {
      name: "Gemma Boada Casals",
    },
    {
      name: "Adrià Cano Puigvert",
    },
    {
      name: "Pol Campos Berenguer",
    },
    {
      name: "Cristina Esteve i Bosch",
    },
    {
      name: "Vicky Expósito",
    },
    {
      name: "Antoni Fernandez Sandoval",
    },
    {
      name: "Jonathan Ferrer Visa",
    },
    {
      name: "Eva Gruartmoner Lama",
    },
    {
      name: "Carmina Juher Iglesias",
    },
    {
      name: "Josep M. Martí Aliu",
    },
    {
      name: "Maria Martínez Vicente",
    },
    {
      name: "Cora Mir Sánchez",
    },
    {
      name: "Marcel Moreta Mitjà"
    },
    {
      name: "Anna Palahí Mundet"
    },
    {
      name: "Carme Parramon Colom",
    },
    {
      name: "Mariona Pèlach i de Ribot",
    },
    {
      name: "Anna Piferrer Márquez",
    },
    {
      name: "Maria Puigvert Pell",
    },
    {
      name: "Sara Pujolràs Naspreda",
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
      name:"Lidia Vidal Juventench",
    },   
    {
      name:"Anna Voz Garcia",
    },
  ];

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EquipTecnic} blurSrc={EquipTecnicBlur} alt="Ajudants de Producció" text="Ajudants de Producció" opacity={0.5} />
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
