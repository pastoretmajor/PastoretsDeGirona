import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';

import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EquipActors from '../images/banners/equiptecnic-actorsactrius-ajudantsproduccio.webP'
import EquipActorsBlur from '../images/blured/equiptecnic-actorsactrius-ajudantsproduccio.webP'
  //any mes dia (els mesos començen a 0)
const Actors = () => {
  const teamMembers = [
    {
      name: "Ada Trinidad Aranda Jáimez",  
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
      name: "Xavier Batlle Martínez",
    },
    {
      name: "Mariona Borgoglio Vidal",
    },
    {
      name: "Marc Camacho Cateura",
    },
    {
      name: "Joan Cano Dorca",
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
      name: "Rita Dengra Reyner",
      birth: new Date(2010,2,7),
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
      name: "Isabel Fita Blanes",
    },
    {
      name: "Teresa Felipe Palahí",
      birth: new Date(2007,6,29),
      msg: "Per molts anys a la nova membre, esperem que en siguin molts més!",
    },
    {
      name: "Rita Bancells Ferrer"
    },
    {
      name: "Abril Garcia Martí"
    },
    {
      name: "Roger Garcia Martí"
    },
    {
      name: "Irene Hereu Roca",
      birth: new Date(2007,4,7),
      msg:"",
    },
    {
      name: "Tomas Hereu",
    },
    {
      name: "Josep Maria Iglesias González",
    },
    {
      name: "Jana Lazaro Salvador",
    },
    {
      name: "Oriol Marsal Piferrer",
      birth: new Date(2011,6,9),
      msg:"",
    },
    {
      name: "Sílvia Martí Buxadera"
    },
    {
      name: "Eduard Martí Pujolràs",
      birth: new Date(2007,3,17),
      msg:"",
    },
    {
      name: "Blanca Martínez Mundet"
    },
    {
      name: "Marta Mitjà Cortés",
      birth: new Date(2010,3,1),
      msg:"",
    },
    {
      name: "Isabel Mitjà Pau",
    },
    {
      name: "Cesc Molina Garcés",
    },
    {
      name: "Xavier Morales Albert",
    },
    {
      name: "Alba Morales Donato",
    },
    {
      name: "Arcadi Morales Donato",
      birth: new Date(2009,3,17),
      msg:"",
    },
    {
      name: "Ariadna Morales Donato",
    },
    {
      name: "Arnau Morales Donato",
      birth: new Date(2003,0,4),
      msg:"",
    },
    {
      name: "Maria Morales Sánchez",
    },
    {
      name: "Chiloé Moratinos Busquets"
    },
    {
      name: "Maitén Moratinos Busquets",
    },
    {
      name: "Mariona Moreta Mitjà",
      birth: new Date(2011,11,29),
      msg:"",
    },
    {
      name: "Pau Pacheco Domingo",
    },
    {
      name: "Valentina Parremont Celoya"
    },
    {
      name: "Daniel Peracaula",
      birth: new Date(2006,6,23),
      msg:"",
    },
    {
      name: "Maria Pla Voz",
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
      name: "Judith Rico Fàbregas",
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
      name: "Xavier Sagrera Auñón",
      birth: new Date(1972,4,20),
      msg:"",
    },
    {
      name: "Jana Sagrera Casals",
    },
    {
      name: "Coralí Saló Esteve",
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
      name: "Gisela Sidera Roca",
      birth: new Date(1974,3,12),
      msg: ""
    },
    {
      name: "Marc Solé Martí",
    },
    {
      name: "Francina Soler Donato",
      birth: new Date(2009,0,15),
      msg:"",
    },
    {
      name: "Joan Maria Soler Reguera",
      birth: new Date(1972,2,20),
      msg:"",
    },
    {
      name: "Jana Torrellas Casadevall",
    },
    {
      name: "Josep Lluis Traiter Bota",
    },
    {
      name: "Imma Tremoleda",
      birth: new Date(1976,6,29),
      msg: ""
    },
    {
      name: "Oriol Tugas Prats",
    },
    {
      name: "Irina Vidal Aranda",
    },
    {
      name: "David Vilanova Buxó",
      birth: new Date(1973,9,5),
      msg:"",
    },
    {
      name: "Natana Vilanova Romo",
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
