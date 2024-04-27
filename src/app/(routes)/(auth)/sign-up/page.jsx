import Form from "@src/components/sign-up/Form/Form";
import styles from "./page.module.css";
import Link from "next/link";
import { cookies } from "next/headers";
import { AuthManager } from "@src/contexts/AuthManager";

const page = async ({ searchParams }) => {

    const next = searchParams?.next
    const nextPath = next ? `?next=${next}` : ''
    return (
        // <AuthManager >
        //     </AuthManager>
        <section
            className={`${styles.section} section  ShowSmoothEffect flex-all-c f-column`}
        >
            <div className="coverHeader" />
            <h1 className={styles.title}>انشاء حساب</h1>
            <Form />
            <div className="flex al-i-c f-column text-i-c mb50">
                <h1 className={styles.sign_btn}>عندك حساب ؟</h1>
                <Link className={styles.link} href={`/log-in${nextPath}`}>
                    دوس هنا و وسجل بي حسابك
                </Link>
            </div>
        </section>
    );
};

export default page;
