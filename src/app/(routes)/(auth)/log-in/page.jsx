import Form from "@src/components/log-in/Form/Form";
import styles from "./page.module.css";
import Link from "next/link";
import { cookies } from "next/headers";
import { AuthManager } from "@src/contexts/AuthManager";

const page = async ({ searchParams }) => {
    return (

        <section
            className={`${styles.section} section  ShowSmoothEffect flex-all-c f-column`}
        >
            <div className="coverHeader" />
            <h1 className={styles.title}>تسجيل دخول</h1>
            <Form />
            <div className="flex al-i-c f-column gap5 mt15">
                <h1 className={styles.sign_btn}>ماعندكش حساب ؟</h1>
                <Link className={styles.link} href={`/sign-up?next${searchParams.next || '/'}`}>
                    دوس هنا والحق اشترك ببلاش
                </Link>
            </div>
        </section>
    );
};

export default page;
