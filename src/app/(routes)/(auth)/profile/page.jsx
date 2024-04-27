import Form from "@src/components/profile/Form/Form";
import styles from "./page.module.css";
import { getProfile } from "@src/_lib/profile";
import { cookies } from "next/headers";
const page = async () => {
    const data = await getProfile(cookies().get('jwt')?.value)
    return (
        <main className={`section ${styles.section}`}>
            <h2 className={`${styles?.username} ShowSmoothEffect`}>
                {data?.username}
            </h2>
            <Form init={data} />
        </main>
    );
};

export default page;
