import Link from "next/link";
import styles from "./Popup.module.css";

const Popup = ({ show = false }) => {
    if (show) return;
    return (
        <div className={`${styles.popup} flex-all-c`}>
            <div className={styles.popupWrapper}>
                <h1 className={styles.title}>تم ارسال طلبك</h1>
                <p className={styles.text}>سيتم التواصل معك في أقرب وقت ممكن</p>
                <div className="">
                    <Link className={`${styles.Link} ${styles.linkHome}`} href={"/"}>الصفحة الرئيسيه</Link>
                    <Link className={styles.Link} href={"/profile/orders"}>عرض طلبات الصيانة الخاصة بك</Link>
                </div>
            </div>
        </div>
    );
};

export default Popup;
