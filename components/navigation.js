import styles from '../styles/Navigation.module.css';
import { isMobile } from 'react-device-detect';

export default function Navigation({ onClick, active }) {
  let menu = require('../assets/constants/menu.json');
  const handleItemClick = (e) => {
    onClick(e);
  };

  console.log(active);

  return (
    <div className={styles.tab}>
      <ul>
        {menu.map((item, i) => {
          return (
            <li
              key={i}
              data-number={i}
              onClick={handleItemClick}
              className={`${active == i ? styles.active : ''} noselect`}
            >
              {item.name.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
