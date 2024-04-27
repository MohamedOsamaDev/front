import Card from "@src/components/about/card/card";
import { about_data } from "./about.test";
import styles from "./page.module.css";

const page = () => {
    const { data } = about_data()
    return (
        <section className="section  ShowSmoothEffect">
            <div className="coverHeader" />
            <div className="coverHeader" />
            <h1 className={`${styles.title} mb30 font-bold font26`}>عنا</h1>
            {data?.map((item) => <Card item={item} key={item?.id} />)}
        </section>
    );
};

export default page;
