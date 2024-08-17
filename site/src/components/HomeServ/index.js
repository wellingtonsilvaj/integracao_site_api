import styles from '@/components/HomeServ/HomeServ.module.css';
import { FaHouse, FaBuilding, FaSolarPanel  } from "react-icons/fa6";


const HomeServ = ({homesServices}) => {
    return ( 
        <section className={`${styles.content} ${styles.services}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Serviços</h2>
                <div className={styles.servContent}>
                    <div className={styles.card}>
                    <div className={styles.box}>
                    <i><FaHouse /></i>
                        <div className={styles.text}>{homesServices.servTitleOne}</div>
                        <p>{homesServices.servDescOne}</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.box}>
                     <i><FaBuilding /></i>
                        <div className={styles.text}>{homesServices.servTitleTwo}</div>
                        <p>{homesServices.servDescTwo}</p>
                    </div>
                </div>

                    <div className={styles.card}>
                    <div className={styles.box}>
                     <i><FaSolarPanel /></i>
                        <div className={styles.text}>{homesServices.servTitleThree}</div>
                        <p>{homesServices.servDescThree}</p>
                    </div>
                </div>
            </div>
        </div>

        </section>
    );
}

export default HomeServ;