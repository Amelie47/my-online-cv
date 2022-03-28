import styles from '../styles/components/Experience.module.css';

export default function Experience({ item, type }) {
  return (
    <div className={styles.experience}>
      <div className={styles.expYears}>
        <div className={styles.expYearsContainer}>
          <span>{item.years}</span>
        </div>
      </div>
      <div className={styles.expContainer}>
        <div className={styles.expHeader}>
          <h2 className={styles.expTitle}>{item.title}</h2>
          <div className={styles.expType}>{type}</div>
          <div className={styles.expTechnos}>
            <ul>
              {item.technos.map((techno, i) => {
                return <li key={i}>#{techno}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.explocalisation}>
          <p>
            {item.localisation}, {item.etablissement}
          </p>
        </div>
        <div className={styles.expDescription}>
          <p>{item.description}</p>
        </div>
        <div className={styles.expRoles}>
          <ul>
            {item.roles.map((role, i) => {
              return <li key={i}>{role}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
