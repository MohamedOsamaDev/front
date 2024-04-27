"use client";
import Card from "./Card/Card";
import styles from "./services.module.css";


const Services = ({ data = {} }) => {
    console.log("🚀 ~ Services ~ data:", data)
    return (
        <section className={`${styles.section} section flex-all-c f-column `}>
            <h1 className={`${styles.title} title`}>الخدمات</h1>
            <div className={styles.wrapperSlider}>
                {data?.map((item, ind) => (
                    <Card key={ind} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Services;
