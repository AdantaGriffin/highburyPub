import styles from './drinks.module.scss';

function Drinks(){
    return(
        <>
            <section className={styles.drinks}>
                {drinks}
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
                        <li>jameson</li>
                        <li>bushmills</li>
                        <li>jack daniel</li>
                        <li>jim beam</li>
                        <li>glenfiddich</li>
                        <li>gordons</li>
                        <li>beefeater</li>
                        <li>bombay saphire</li>
                        <li>vodka</li>
                        <li>smirnoff red</li>
                        <li>glens</li>
                        <li>absolut blue</li>
                        <li>grey goose</li>
                        <li>belveder</li>
                        <li>tequila</li>
                        <li>jose cuervo</li>
                        <li>el jimadorblanco</li>
                        <li>don julio</li>
                        <li>casamigos</li>
                        <li>espolon</li>
                        <li>rum</li>
                        <li>the kraken</li>
                        <li>bacardi</li>
                        <li>captain morgan</li>
                    </ul>
                </div>

                <div className={styles.heritage}>
                    <ul className={styles.heritageList}>
                        <li>irsh coffee</li>
                        <li>calypso coffee</li>
                        <li>negroni</li>
                        <li>bloodymary</li>
                        <li>screwdriver</li>
                        <li>margherita</li>
                        <li>The Bramble</li>
                        <li>The Vesper Martini</li>
                        <li>Pimm’s No. 1</li>
                        <li>Black Velvet</li>
                        <li>Snakebite</li>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Drinks;