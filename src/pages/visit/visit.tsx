import styles from './visit.module.scss';
import { Link } from 'react-router-dom';

function Visit(){
    return(
        <>
            <section className={styles.visit}>
                <div className={styles.textContainer}>
                    <h2>HOURS & LOCATION</h2>
                    <Link to="">
                        <p>1002 Courtelyou Road, Brooklyn NY 11218, (347) 533-4557</p>
                    </Link>
                    <ul className={styles.textList}>
                        <li>
                            <h3>Monday-Friday</h3>
                            <p>2:00 - 4:00am (next day)</p>
                        </li>
                        <li>
                            <h3>Saturday-Sunday</h3>
                            <p>9:00am-4:00am (next day)</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.mapContainer}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5817195154764!2d-73.96848200000002!3d40.6391056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b322b08f81f%3A0x45f27450dd7dcf75!2s1002%20Cortelyou%20Rd%2C%20Brooklyn%2C%20NY%2011218!5e0!3m2!1sen!2sus!4v1779389403678!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} loading="lazy"></iframe>
                </div>
            </section>
        </>
    )
};

export default Visit;