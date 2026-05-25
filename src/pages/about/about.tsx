import styles from './about.module.scss';

function About(){
    return(
        <>
            <section className={styles.about}>
                <div className={styles.aboutSlides}>about slides</div>
                <div className={styles.aboutPub}>about pub tex</div>
            </section>
        </>
    )
};

export default About;