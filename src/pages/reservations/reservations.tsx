import { Link } from 'react-router-dom';
import styles from './reservations.module.scss';

function Reservations(){
    return(
        <>
            <section className={styles.reservations}>
                <div className={styles.reservationsDetails}>
                    <h3>Book With US</h3>
                </div>
                <div className={styles.reservationsLink}>
                    <h3>BOOK AN EVENT</h3>
                    <p>For all inquiries, please fill out the form below and we’ll be in touch soon.</p>
                    <Link to="/contact">INQUIRE NOW</Link>
                </div>
            </section>
        </>
    )
};

export default Reservations;