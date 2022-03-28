import styles from '../styles/Experiences.module.css';
import Experience from './Experience';

export default function Experiences() {
  let data = require('../assets/constants/experiences.json');

  const typesprojets = data['typesprojets'];
  const experiences = data['items'];

  return (
    <div className={styles.experiences}>
      {experiences.map((item, i) => {
        return (
          <Experience key={i} item={item} type={typesprojets[item.type]} />
        );
      })}
    </div>
  );
}
