import styles from './food.module.scss';

function Food(){
    return(
        <>
            <section className={styles.food}>
                <div className={styles.menuContainer}>

                    <div className={styles.name}>HighburyPub</div>

                    <div className={styles.menuPage}>
                            <ul className={styles.menuList}>
                                <ul className={styles.row1}>
                                    <h2>HouseBurgers</h2>
                                    <p>*All BURGERS SERVED SMASH STYLE, NO TEMPERATURE, BEEF LOCALLY SOURCED FROM PAISANO’S OF BROOKLYN (L.T.O.P. AVAILABLE ON REQUEST)</p>
                                    <p>*MAKE ANY BURGER A DOUBLE +5</p>

                                    <ul className={styles.houseBurgers}>
                                    <li className={styles.menuItem}>
                                        <h3>ThePub</h3>
                                        <p>MUSHROOMS & CARAMELIZED, ONIONS, CHEDDAR, HOUSE SAUCE ON SIDE</p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>TheAmerican</h3>
                                        <p>FRIED SHOESTRING ONION STACK, APPLEWOOD SMOKED BACON, CHEDDAR, SWEET BABY RAY’S BARBECUE SAUCE</p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>TheArson</h3>
                                        <p>HOT CHERRY PEPPERS, PEPPERJACK, ROASTED GARLIC AIOLI</p>
                                    </li>
                                    </ul>

                                    <h2>NotBurgers</h2>
                                    <ul className={styles.notBurgers}>
                                    <li className={styles.menuItem}>
                                        <h3>LondonBoy</h3>
                                        <p>DOUBLE SMOKED KIELBASA W CHOPPED BACON, LETTUCE & TOMATO, ROASTED GARLIC AIOLI</p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>Crispy Chicken Sandwhich</h3>
                                        <p>HERBED MAYO, PICKLES, ON A MARTIN’S POTATO BUN</p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>Fish & Chips</h3>
                                        <p>FRIED COD FILET, TARTAR SAUCE, SHREDDED LETTUCE, PICKLES, ON A MARTIN’S POTATO BUN</p>
                                    </li>
                                    </ul>
                                </ul>
                                
                                <ul className={styles.row2}>
                                    <h2>Build Yur Own Burger</h2>
                                    <p>ALL BURGERS SERVED W L.T.O.P.</p>

                                    <ul className={styles.build}>
                                    <li className={styles.menuItem}>
                                        <h3>Smash Burger</h3>
                                        <p>ON A MARTIN’S POTATO BUN</p>
                                    </li>
                                    <li>
                                        <h3>Impossible Burger</h3>
                                        <p>ON A VEGAN PRETZEL BUN</p>
                                    </li>
                                    <li>
                                        <h3>Turkey Burger</h3>
                                        <p>w/ SUNDRIED TOMATO PESTO</p>
                                    </li>
                                    <li>
                                        <p>ADD CHEESE + 1.50 AMERICAN / CHEDDAR PEPPER JACK / SWISS / BLEU CHEESE VEGAN MOZZARELLA +2</p>
                                    </li>
                                    <li>
                                        <p>ADD TOPPINGS +1 APPLEWOOD SMOKED BACON / SAUTEED MUSHROOMS / CARAMELIZED ONIONS / PICKLED JALAPENOS / HOT CHERRY PEPPERS / DIPS *AVOCADO / FRIED EGG +3</p>
                                    </li>
                                    </ul>

                                    <h2>Fries</h2>
                                    <ul className={styles.fries}>
                                    <li className={styles.menuItem}>
                                        <h3>Double Dip</h3>
                                        <p>A LARGE BASKET OF FRIES w/ 2 DIPPING SAUCES WAFFLE FRIES +2 SWEET POTATO FRIES +2</p>
                                        <p>*CHOOSE 2 DIPS CHIPOTLE AIOLI / TRUFFLE AIOLI / AVOCADO RANCH / HOUSE SAUCE / CHEESE SAUCE / BLEU CHEESE / BUFFALO / HONEY MUSTARD </p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>Onion Rings</h3>
                                        <p>A LARGE BASKET OF ONION RINGS</p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>loaded waffles fries</h3>
                                        <p>APPLEWOOD SMOKED BACON, CHEDDAR, GREEN ONIONS,  JALAPENO, AVOCADO RANCH</p>
                                    </li>
                                    </ul>

                                </ul>
                                
                                <ul className={styles.row3}>
                                    <h2>Shakes 8</h2>
                                    <p>VANILLA, CHOCOLATE, STRAWBERRY, COFFEE, COOKIES & CREAM</p>

                                    <ul className={styles.shakes}>
                                    <li className={styles.menuItem}>
                                        <h3>Non Dairy</h3>
                                        <p>VANILLA, COFFEE, STRAWBERRY</p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>Spike Your Shake</h3>
                                        <p>WHISKEY / RUM / BAILEY'S / VEGAN BAILEYS</p>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <h3>Wake n Shake</h3>
                                        <p>COFFEE, KAHLUA & BAILEY’S (VEGAN AVAILABLE)</p>
                                    </li>
                                    </ul>
                                
                                    <h2>Not fries</h2>
                                    <ul className={styles.notFries}>
                                    <li>
                                        <h3>Wings</h3>
                                        <p>BUFFALO, CITRUS BBQ or GARLIC PARM w/ CELERY & BLEU CHEESE</p>
                                    </li>
                                    <li>
                                        <h3>Cauliflower Nuggets</h3>
                                        <p>CITRUS BBQ OR CLASSIC BUFFALO, CELERY & BLEU CHEESE</p>
                                    </li>
                                    <li>
                                        <h3>Chicken Fingers</h3>
                                        <p>BUFFALO, BBQ, GARLIC PARM or PLAIN w/ HONEY MUSTARD & RANCH</p>
                                    </li>
                                    <li>
                                        <h3>Cobb Salad</h3>
                                        <p>GRILLED CHICKEN, BACON, HARDBOILED EGG, AVOCADO, TOMATO, RED ONION, BLEU CHEESE CRUMBLE, AVOCADO RANCH</p>
                                    </li>
                                    <blockquote>
                                        <h3>Add sides to any main</h3>
                                        <div className={styles.blockP}>
                                            <p>classic fries +5</p>
                                            <p>waffle fries +6</p>
                                            <p>sweet potato fries +6</p>
                                            <p>onion ring +5</p>
                                            <p>side salad +5</p>
                                        </div>
                                    </blockquote>
                                    </ul>

                                </ul>
                            </ul>
                    </div>

                    <div className={styles.text}>
                        <p>PLEASE INFORM YOUR SERVER OF ANY ALLERGIES</p>
                        <p>PARTIES OF 6 OR MORE AND CHECKS OVER $100 WILL BE SUBJECT TO A 20% GRATUITY</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Food;