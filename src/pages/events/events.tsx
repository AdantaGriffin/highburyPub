import styles from './events.module.scss';
import { Link } from 'react-router-dom';

function Events(){
    return(
        <>
             <section className={styles.reservations}>
                <div className={styles.reservationsDetails}>
                    <h3>Celebrate with us</h3>
                </div>
                <div className={styles.recentEvents}>Recent Events Gallery</div>
                <div className={styles.reservationsLink}>
                    <h3>BOOK AN EVENT</h3>
                    <p>For all inquiries, please fill out the form below and we’ll be in touch soon.</p>
                    <Link to="/contact">INQUIRE NOW</Link>
                </div>
            </section>
        </>
    )
};

export default Events;