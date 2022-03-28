import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Navigation from '../components/navigation';

export default function Menu({ handleItemClick, active }) {
  const [isActive, setIsActive] = useState(false);
  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {/* <div
        className={`${styles.mobileBurger} ${isActive && styles.activeBurger}`}
      >
        <p onClick={handleMenuClick}>Menu</p>
      </div> */}
      <div className={`${styles.mobileMenu} ${isActive && styles.activeMenu}`}>
        <div>
          <Navigation onClick={handleItemClick} active={active} />
        </div>
      </div>
    </div>
  );
}
