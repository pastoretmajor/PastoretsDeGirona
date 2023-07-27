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
      name: "Clara Arxer Vargas",
      
    },
    {
      name: "Anna Batlle",
    },
    {
      name: "Maria Batlle",
    },
    {
      name: "Marta Batlle Martinez",
    },
    {
      name: "Pere Batlle Martinez",
    },
    {
      name: "Maria Benitez Diaz",
    },
    {
      name: "Estrella Bosch Capdeferro",
    },
    {
      name: "Flora Bosch Capdeferro",
    },
    {
      name: "Aina Carreras Ribas",
    },
    {
      name: "David Camacho Cateura",
    },
    {
      name: "Adrià Cano Puigvert",
    },
    {
      name: "Joel Cano Puigvert",
    },
    {
      name: "Eva Casadevall Adroher",
    },
    {
      name: "Aina Castillo Tremols",
    },
    {
      name: "Cristina Cortés Bayod",
    },
    {
      name: "Rita Dengra Reyner",
    },
    {
      name: "Vicky Expósito",
    },
    {
      name: "Isidre Fàbrega",
    },
    {
      name: "Rosa Fàbrega Salazarmauri",
    },
    {
      name: "Teresa Felip Palahí",
    },
    {
      name: "David Gonzàlez",
    },
    {
      name: "Irene Gonzàlez Comalda",
    },
    {
      name: "Robert Gonzàlez Díez",
    },
    {
      name: "Irene Hereu Roca",
    },
    
    {
      name: "Oriol Marsal Piferrer",
    },
    {
      name: "Eduard Martí Pujolràs",
    },
    {
      name: "Max Massò Boadas",
    },
    {
      name: "Olga Miralles",
    },
    {
      name: "Marta Mitjà Cortés",
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
      name: "Mariona Moreta Mitjà",
    },
    {
      name: "Marcel Moreta Mitjà",
    },
    {
      name: "Daniel Peracaula",
    },
    {
      name: "Laura Prats Tremoleda",
    },
    {
      name: "Sònia Poch Anglada",
    },
    {
      name: "Sugita Puig Bertran",
    },
    
    {
      name: "Joaquim de Rioja Bosch",
    },
    {
      name: "Júlia Ruhí Barnés",
    },
    {
      name: "Paula Rullo Burgués",
    },

    {
      name: "Aleix Sagrera Casals",
    },
    {
      name: "Xavier Sagrera Auñón",
    },
    {
      name: "Paula Sanz Nadal",
    },
    {
      name: "Gerard Serrat",
    },
    {
      name: "Joan Maria Soler Reguera",
    },
    {
      name: "Francina Soler Donato",
    },
    {
      name: "Elisabet Sierra Hereu",
    },
    {
      name: "Josep Lluis Traiter Bota",
    },
    {
      name: "David Vilanova Buixó",
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
