import styles from "./page.module.css";
import Form from "@src/components/company/Form/Form";

import { getCompanyData } from "@src/_lib/request";
import { AuthManager } from "@src/contexts/AuthManager";
import Popup from "@src/components/company/Form/popup/Popup";

const page = async ({ searchParams = {} }) => {
    const company = await getCompanyData(searchParams?.q);

    return (
        <main className="w-100 min-h100  ShowSmoothEffect   p-relative">
            <section className={`${styles.section} section`}>
                <div className="coverHeader" />
                <h1 className={styles.title}>اكمل الحقول لي ارسال طلب صيانة</h1>
                <Form />

            </section>
        </main>
        //         <AuthManager next={`/services/requset?q=${searchParams?.q}`} Auth={true}>
        // </AuthManager>
    );
};

export default page;
