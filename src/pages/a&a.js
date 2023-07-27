import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';

import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EquipActors from '../images/banners/equiptecnic-actorsactrius-ajudantsproduccio.webP'
import EquipActorsBlur from '../images/blured/equiptecnic-actorsactrius-ajudantsproduccio.webP'

const Actors = () => {
  const teamMembers = [
    {
      name: "Olga Miralles",
    },
    {
      name: "Xavier Sagrera Auñón",
    },
    {
      name: "Clara Arxer Vargas",
      
    },
    {
      name: "Joan Maria Soler Reguera",
    },
    {
      name: "Adrià Cano Puigvert",
    },
    {
      name: "Cora Mir Sanchez",
    },
    {
      name: "Eva Casadevall Adroher",
    },
    {
      name: "Gerard Serrat",
    },
    {
      name: "Maria Benitez",
    },
    {
      name: "Joaquim de Rioja Bosch",
    },
    {
      name: "Oriol Marsal Piferrer",
    },
    {
      name: "Sugita Puig Bertran",
    },
    {
      name: "Viki Exposito",
    },
    {
      name: "Anna Batlle",
    },
    {
      name: "Maria Batlle",
    },
    {
      name: "Pere Batlle Martinez",
    },
    {
      name: "Marta Batlle Martinez",
    },
    {
      name: "Ariadna Morales Donato",
    },
    {
      name: "Arcadi Morales Donato",
    },
    {
      name: "Arnau Morales Donato",
    },
    {
      name: "Cristina Cortés Bayod",
    },
    {
      name: "Sònia Poch Anglada",
    },
    {
      name: "Elisabet Sierra Hereu",
    },
    {
      name: "David Vilanova Buixó",
    },
    {
      name: "Júlia Ruhí Barnés",
    },
    {
      name: "Flora Bosch Capdeferro",
    },
    {
      name: "Rita Dengra Reyner",
    },
    {
      name: "Marta Mitjà Cortés",
    },
    {
      name: "Joel Cano Puigvert",
    },
    {
      name: "David Gonzàlez",
    },
    {
      name: "David Camacho Cateura",
    },
    {
      name: "Aina Castillo",
    },
    {
      name: "Paula Sanz Nadal",
    },
    {
      name: "Francina Soler Donato",
    },
    {
      name: "Aina Carreras Ribas",
    },
    {
      name: "Max Massò Boadas",
    },
    {
      name: "Daniel Peracaula",
    },
    {
      name: "Eduard Martí Pujolràs",
    },
    {
      name: "Laura Prats",
    },
    {
      name: "Robert Gonzàlez Díez",
    },
    {
      name: "Irene Gonzàlez Comalda",
    },
    {
      name: "Aleix Sagrera",
    },
    {
      name: "Pol Campos",
    },
    {
      name: "Irene Hereu Roca",
    },
    {
      name: "Josep Lluis Traiter Bota",
    },
    {
      name: "Mariona Moreta Mitjà",
    },
    {
      name: "Marcel Moreta Mitjà",
    },
    {
      name: "Paula Rullo Burgués",
    },
    {
      name: "Teresa Felip Palahí",
    },
    {
      name: "Isidre Fàbrega",
    },
    {
      name: "Estrella Bosch Capdeferro",
    },
    {
      name: "Rosa Fàbrega Salazarmauri",
    },
  ];

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EquipActors} blurSrc={EquipActorsBlur} alt="Actors i Actrius" text="Actors I Actrius" opacity={.5}/>
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

export default Actors;
