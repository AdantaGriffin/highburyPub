import styles from './hero.module.scss';
import {useState, useEffect} from 'react';

type Slide = {
    id: string;
    image: string;
};

function Hero(){
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    async function getSlides(){
        const response = await fetch(`/heroSlides.json`);
        const result = await response.json();
        console.log(result.heroimages);
        setSlides(result.heroimages);
    };
    getSlides()
  }, []);
    return(
        <>
            <section className={styles.hero}>

                <ul className={styles.heroSlideContainer}>
                    {slides?.map(x => (
                    <li className={styles.slideItem} key={x.id}>
                        {x.image.endsWith(".mp4") ? (
                            <video autoPlay muted loop playsInline>
                                <source src={x.image} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={x.image} alt="hero image"/>
                        )}
                    </li>
                ))}
                </ul>

            </section>
        </>
    )
};

export default Hero;