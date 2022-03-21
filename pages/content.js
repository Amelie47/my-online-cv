import styles from '../styles/Content.module.css';
import React, { useState } from 'react';
import Experiences from '../components/experiences';
import Diplomes from '../components/diplomes';
import Competences from '../components/competences';
import Personnalite from '../components/personnalite';
import Valeurs from '../components/valeurs';
import Navigation from '../components/navigation';

export default function Content() {
  const [active, setActive] = useState(1);
  const handleItemClick = (e) => {
    const active = e.target.dataset.number;
    setActive(active);
  };
  const menuPages = [
    myExperiences(),
    myDiplomes(),
    myCompetences(),
    myPersonnalite(),
    myValeurs(),
  ];
  return (
    <div className={styles.content}>
      <Navigation onClick={handleItemClick} active={active} />
      <div className={styles.contents}>{menuPages[active]}</div>
    </div>
  );

  function myExperiences() {
    return <Experiences />;
  }

  function myDiplomes() {
    return <Diplomes />;
  }

  function myCompetences() {
    return <Competences />;
  }

  function myPersonnalite() {
    return <Personnalite />;
  }

  function myValeurs() {
    return <Valeurs />;
  }
}
