import styles from './about.module.scss';

function About(){
    return(
        <>
            <section className={styles.about}>
                <div className={styles.aboutSlides}>
                    <h3>About</h3>
                </div>
                <div className={styles.aboutPub}>
                    <p>Located in the heart of Ditmas Park, Highbury Pub is a neighborhood favorite known for its welcoming atmosphere, strong drinks, and deep soccer culture. Inspired by the historic home of Arsenal F.C., the pub has become a go to destination for Premier League fans and locals looking for a relaxed, authentic Brooklyn bar experience. With cozy interiors, friendly bartenders, live music nights, and games always playing on screen, Highbury blends the energy of a classic English pub with the warmth of a community hangout. Whether stopping in for match day or a late-night drink, guests can expect good vibes, great conversation, and a true neighborhood feel.</p>
                </div>
            </section>
        </>
    )
};

export default About;