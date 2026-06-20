import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <>
            <section className={styles.menu}>
                <div className={styles.menuFood}>
                    <Link to="/menu:food">Food</Link>
                </div>
                <div className={styles.menuDrinks}>
                    <Link to='/menu:drinks'>Drink</Link>
                </div>
            </section>
        </>
    )
};

export default Menu;