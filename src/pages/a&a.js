import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';

import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import BirthdayList from '../components/BirthdayList/BirthdayList'

import EquipActors from '../images/banners/equiptecnic-actorsactrius-ajudantsproduccio.webP'
import EquipActorsBlur from '../images/blured/equiptecnic-actorsactrius-ajudantsproduccio.webP'
  //any mes dia (els mesos començen a 0)
const Actors = () => {
  const teamMembers = [
    {
      name: "Clara Arxer Vargas",  
      birth: new Date(2010,0,13),
      msg:"",
    },
    {
      name: "Anna Batlle Martínez",
      birth: new Date(2008,4,21),
      msg:"",
    },
    {
      name: "Maria Batlle Martínez",
      birth: new Date(2010,0,4),
      msg:"",
    },
    {
      name: "Marta Batlle Martínez",
      birth: new Date(2014,9,8),
      msg:"",
    },
    {
      name: "Pere Batlle Martínez",
      birth: new Date(2012,5,25),
      msg:"",
    },
    {
      name: "Maria Benitez Diaz",
      birth: new Date(2001,4,2),
      msg:"",
    },
    {
      name: "Estrella Bosch Capdeferro",
      birth: new Date(2008,2,30),
      msg:"",
    },
    {
      name: "Flora Bosch Capdeferro",
      birth: new Date(2004,6,30),
      msg:"Per molts anys! Esperem que tinguis un dia tant brillant com tu!",
    },
    {
      name: "Aina Carreras Ribas",
      birth: new Date(2009,3,8),
      msg:"",
    },
    {
      name: "David Camacho Cateura",
      birth: new Date(1997,5,19),
      msg:"",
    },
    {
      name: "Adrià Cano Puigvert",
      birth: new Date(2001,3,10),
      msg:"",
    },
    {
      name: "Joel Cano Puigvert",
      birth: new Date(2003,3,15),
      msg:"",
    },
    {
      name: "Eva Casadevall Adroher",
      birth: new Date(1976,7,7),
      msg:"",
    },
    {
      name: "Aina Castillo Tremols",
      birth: new Date(2001,10,22),
      msg:"",
    },
    {
      name: "Cristina Cortés Bayod",
      birth: new Date(1973,3,5),
      msg:"",
    },
    {
      name: "Rita Dengra Reyner",
      birth: new Date(2010,2,7),
      msg:"",
    },
    {
      name: "Vicky Expósito",
      birth: new Date(1969,7,2),
      msg:"",
    },
    {
      name: "Isidre Fàbrega",
      birth: new Date(1983,4,16),
      msg:"",
    },
    {
      name: "Rosa Fàbrega Salazarmauri",
      birth: new Date(2009,4,4),
      msg:"",
    },
    {
      name: "Teresa Felipe Palahí",
      birth: new Date(2007,6,29),
      msg: "Per molts anys a la nova membre, esperem que en siguin molts més!",
    },
    {
      name: "David Gonzàlez",
      birth: new Date(1997,8,9),
      msg:"",
    },
    {
      name: "Irene Gonzàlez Comalda",
      birth: new Date(2006,9,6),
      msg:"",
    },
    {
      name: "Robert Gonzàlez Díez",
      birth: new Date(1970,10,3),
      msg:"",
    },
    {
      name: "Irene Hereu Roca",
      birth: new Date(2007,4,7),
      msg:"",
    },
    
    {
      name: "Oriol Marsal Piferrer",
      birth: new Date(2011,6,9),
      msg:"",
    },
    {
      name: "Eduard Martí Pujolràs",
      birth: new Date(2007,3,17),
      msg:"",
    },
    {
      name: "Max Massò Boadas",
      birth: new Date(2011,5,2),
      msg:"",
    },
    {
      name: "Olga Miralles Burgués",
      birth: new Date(2002,2,5),
      msg:"",
    },
    {
      name: "Marta Mitjà Cortés",
      birth: new Date(2010,3,1),
      msg:"",
    },
    {
      name: "Ariadna Morales Donato",
    },
    {
      name: "Arcadi Morales Donato",
      birth: new Date(2009,3,17),
      msg:"",
    },
    {
      name: "Arnau Morales Donato",
      birth: new Date(2003,0,4),
      msg:"",
    },
    {
      name: "Mariona Moreta Mitjà",
      birth: new Date(2011,11,29),
      msg:"",
    },
    {
      name: "Marcel Moreta Mitjà",
      birth: new Date(2009,7,21),
      msg:"",
    },
    {
      name: "Daniel Peracaula",
      birth: new Date(2006,6,23),
      msg:"",
    },
    {
      name: "Laura Prats Tremoleda",
      birth: new Date(2001,5,21),
      msg:"",
    },
    {
      name: "Sònia Poch Anglada",
      birth: new Date(1979,4,25),
      msg:"",
    },
    {
      name: "Sugita Puig Bertran",
      birth: new Date(2002,3,22),
      msg:"",
    },
    
    {
      name: "Joaquín de Rioja Bosch",
    },
    {
      name: "Júlia Ruhí Barnés",
      birth: new Date(2002,3,30),
      msg:"",
    },
    {
      name: "Paula Rullo Burgués",
      birth: new Date(2010,3,6),
      msg:"",
    },

    {
      name: "Aleix Sagrera Casals",
      birth: new Date(2009,10,12),
      msg:"",
    },
    {
      name: "Xavier Sagrera Auñón",
      birth: new Date(1972,4,20),
      msg:"",
    },
    {
      name: "Paula Sanz Nadal",
      birth: new Date(2005,6,8),
      msg:"",
    },
    {
      name: "Gerard Serrat Quidiello",
    },
    {
      name: "Joan Maria Soler Reguera",
      birth: new Date(1972,2,20),
      msg:"",
    },
    {
      name: "Francina Soler Donato",
      birth: new Date(2009,0,15),
      msg:"",
    },
    {
      name: "Elisabet Sierra Hereu",
      birth: new Date(2009,4,15),
      msg:"",
    },
    {
      name: "Josep Lluis Traiter Bota",
    },
    {
      name: "Imma Tremoleda",
      birth: new Date(1976,6,29),
      msg: "Felicitats, et desitgem que tinguis un gran dia!"
    },
    {
      name: "David Vilanova Buixó",
      birth: new Date(1973,9,5),
      msg:"",
    },
  ];

  // Split the teamMembers array into two columns
  const midIndex = Math.ceil(teamMembers.length / 2);
  const firstColumn = teamMembers.slice(0, midIndex);
  const secondColumn = teamMembers.slice(midIndex);

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EquipActors} blurSrc={EquipActorsBlur} alt="Actors i actrius" text="Actors i actrius" opacity={0.5} />
      <BirthdayList teamMembers={teamMembers} />
      <div className="team-grid">
        <div className="team-grid__column">
          {firstColumn.map((teamMember, index) => (
            <TeamMemberCard key={index} name={teamMember.name} />
          ))}
        </div>
        <div className="team-grid__column">
          {secondColumn.map((teamMember, index) => (
            <TeamMemberCard key={index} name={teamMember.name} />
          ))}
        </div>
      </div>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  );
};

export default Actors;
