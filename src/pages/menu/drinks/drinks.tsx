import styles from './drinks.module.scss';
import {useState, useEffect} from 'react';

type Spirit = {
    id: string;
    name: string;
    image: string;
}

function Drinks(){
    const [spirits, setSpirits] = useState<Spirit[]>([]);

    useEffect(() => {
        async function getSpirits(){
            const response = await fetch('/menu.json')
            const result = await response.json();
            //console.log(result.spirits)
            setSpirits(result.spirits)
        };
        getSpirits()
    }, []);
    return(
        <>
            <section className={styles.drinks}>
                
                <div className={styles.topImages}>
                    <div className={styles.topImage1Container}>
                        <img src='./menu/beerMenu1.jpg' alt="menu 1"/>
                    </div>
                    <div className={styles.topImage2Container}>
                        <img src='./menu/beerMenu2.jpg' alt="menu 2"/>
                    </div>
                </div>

                <div className={styles.spirits}>
                    <ul className={styles.spiritsList}>
                        {spirits?.map(x => (
                            <li 
                            className={styles.spiritItem}
                            key={x.id}>
                                <img src={x.image} alt="spirit image"/>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.heritage}>
                    <ul className={styles.heritageList}>
                        <li className={styles.heritageItem}><p>irsh coffee</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>calypso coffee</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>negroni</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>bloodymary</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>screwdriver</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>margherita</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>The Bramble</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>The Vesper Martini</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>Pimm’s No. 1</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>Black Velvet</p><p>$$$</p></li>
                        <li className={styles.heritageItem}><p>Snakebite</p><p>$$$</p></li>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Drinks;