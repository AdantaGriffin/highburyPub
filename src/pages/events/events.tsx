import styles from './events.module.scss';

function Events(){
    return(
        <>
            <section className={styles.events}>
                <div className={styles.eventsHero}>hero</div>
                <div className={styles.eventsDetaiils}>details</div>
            </section>
        </>
    )
};

export default Events;