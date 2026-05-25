import styles from './root.module.scss';
import { Outlet } from "react-router-dom";
import Header from "../Header/header";
function Root(){
    return(
        <>
            <div className={styles.app}>
                <div className={styles.body}>
                    <Header/>
                    <Outlet/>
                </div>
            </div>
        </>
    )
};

export default Root;