import styles from './home.module.scss';
import Hero from '../Hero/hero';
import { Link } from 'react-router-dom';

function Home() {

    const toTop= () => {
        window.scrollTo(0,0);
    };

  return (

        <>
          <Hero/>

          <div className={styles.homeSubtext}>
            <h2>IT'S TIME TO BOOK YOUR EVENT OR PARTY WITH US NOW!</h2>
            <p>"Watching Arsenol in New York was better than London" Alan Tyers - The Telegraph UK</p>
          </div>

          <div className={styles.comeBy}>
            <div className={styles.comeByContainer}>
              <h2>Come By</h2>
              <Link onClick={toTop} to="/visit">Get Directions</Link>
            </div>
          </div>
        </>
        
  )
}

export default Home;