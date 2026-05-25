import styles from './contact.module.scss';

function SignUp(){
    return(
        <>
            <section className={styles.contact}>
                <form className={styles.contactForm}>
                    <input required type="text" placeholder="First Name"/>
                    <input required type="text" placeholder="Last Name"/>
                    <input required type="email" placeholder="Email"/>
                    <input type="submit" />
                </form>
            </section>
        </>
    )
};

export default SignUp;