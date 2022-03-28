import styles from '../styles/Navigation.module.css';

export default function Navigation({ onClick, active }) {
  let menu = require('../assets/constants/menu.json');

  return (
    <div className={styles.tab}>
      <ul>
        {menu.map((item, i) => {
          return (
            <li
              key={i}
              data-number={i}
              onClick={onClick}
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
