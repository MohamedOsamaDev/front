import { memo } from "react";
import styles from "./Card.module.css";
import IMAGE from "@src/components/shared/image/Image";
import Link from "next/link";

const Card = memo(({ item }) => {
    return (
        <Link href={`/services?service=${item?.slug}`}>
            <div className={styles.card}>
                <IMAGE
                    alt={item?.title}
                    src={process.env.NEXT_PUBLIC_UP + item?.logo?.url}
                    className={styles.poster}
                />
                <div className={styles.content}>
                    <h1 className={`${styles.title} `}>{item?.title}</h1>
                    <p className={styles.p}>
                        <span>
                            {item?.teachersCount ||
                                Math.floor(Math.random() * (200 - 20 + 1)) + 20}
                        </span>
                        شركات
                    </p>
                </div>
            </div>
        </Link>
    );
});

export default Card;
