import styles from './header.module.scss';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    const [drop, setDrop] = useState<boolean>(false);

    const clickDrop = () => {
        setDrop(prev => !prev);
    }
    return(
        <>
                <header className={styles.header}>
                    <div className={styles.headerContainer}>
                        <h1><NavLink to="/">HighburyPub</NavLink></h1>
                        <button onClick={clickDrop}>
                            <p>
                            ___
                            ___
                            ___
                            </p>
                            {/*<img src="/drop.png" height="100%" width="100%" alt="drop down icon"/>*/}
                            </button>
                    </div>
                    <nav>
                        <ul className={styles.navList}>
                            <li className={styles.navLink}><NavLink to="/visit">Visit</NavLink></li>
                            <li className={styles.navLink}><NavLink to="/menu">Menu</NavLink></li>
                            <li className={styles.navLink}><NavLink to="/reservations">Reservations</NavLink></li>
                            <li className={styles.navLink}><NavLink to="/about">About</NavLink></li>
                            <li className={styles.navLink}><NavLink to="/events">Events</NavLink></li>
                            <li className={styles.orderDelivery}><NavLink to="/order">Order & Delivery</NavLink></li>
                            <li className={styles.navLink}><NavLink to="/contact">Contact</NavLink></li>
                        </ul>

                        <ul className={drop ? styles.show : styles.dropUL}>
                            <div className={styles.close}>
                                <button onClick={clickDrop}>x</button>
                            </div>
                            <li className={styles.dropLink}><NavLink onClick={clickDrop} to="/visit">Visit</NavLink></li>
                            <li className={styles.dropLink}><NavLink onClick={clickDrop} to="/menu">Menu</NavLink></li>
                            <li className={styles.dropLink}><NavLink onClick={clickDrop} to="/reservations">Reservations</NavLink></li>
                            <li className={styles.dropLink}><NavLink onClick={clickDrop} to="/about">About</NavLink></li>
                            <li className={styles.dropLink}><NavLink onClick={clickDrop} to="/events">Events</NavLink></li>
                            <li className={styles.dropLink}><NavLink onClick={clickDrop} to="/order">Order & Delivery</NavLink></li>
                            <li className={styles.dropLink}><NavLink onClick={clickDrop} to="/contact">Contact</NavLink></li>
                        </ul>

                    </nav>
                </header>
            
        </>
    )
};

export default Header