import Competences from '../components/competences';
import Diplomes from '../components/diplomes';
import Experiences from '../components/experiences';
import Footer from '../components/footer';
import Menu from '../components/menu';
import Personnalite from '../components/personnalite';
import Valeurs from '../components/valeurs';
import styles from '../styles/MobileContent.module.css';

export default function MonCv({ active = 1 }) {
  let menu = require('../assets/constants/menu.json');
  const menuPages = [
    'home sweet home',
    myExperiences(),
    myDiplomes(),
    myCompetences(),
    myPersonnalite(),
    myValeurs(),
  ];

  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <Menu />
        <h1>{menu[active].name}</h1>
        {menuPages[active]}
      </div>
      <Footer />
    </div>
  );
}

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
