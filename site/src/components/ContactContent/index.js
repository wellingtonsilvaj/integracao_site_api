import styles from '@/components/ContactContent/ContactContent.module.css';
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";



const ContactContent = ({contentsContacts}) => {

    return (
        <div className={`${styles.column} ${styles.left}`}>
        <p>{contentsContacts.descContact}</p>
        <div className={styles.icons}>
            <div className={styles.row}>
                <i><FaRegUser /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        {contentsContacts.titleCompany}
                    </div>
                    <div className={styles.subTitle}>
                    {contentsContacts.titleCompany}
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i><MdOutlineLocationOn/></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                    {contentsContacts.titleAddress}
                    </div>
                    <div className={styles.subTitle}>
                    {contentsContacts.descAddress}
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i>< FaRegEnvelope/></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                    {contentsContacts.titleEmail}
                    </div>
                    <div className={styles.subTitle}>
                    {contentsContacts.descEmail}
                    </div>
                </div>
            </div>

        </div>
    </div>

    );
}

export default ContactContent;