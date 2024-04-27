"use client";
import { memo, useRef } from "react";
import styles from "./card.module.css";
import IMAGE from "@src/components/shared/image/Image";
import Link from "next/link";

const Card = memo(({ item }) => {
    console.log("🚀 ~ Card ~ item:", item)
    return (
        <div className={`${styles.card} ShowSmoothEffect`}>
            <Link prefetch={false} href={`/profile/orders/${item?.uid}`}>
                <div className={styles.poster}>
                    <IMAGE
                        className={styles.image}
                        alt={item?.title}
                        src={process.env.NEXT_PUBLIC_UP + item?.company?.poster?.url}
                    />
                </div>
                <div className={`${styles.info}  flex just-sb al-i-c`}>

                    <h1 className={styles.title}>{item?.company?.title}</h1>
                    <p className={`${styles.status} ${styles[item.status]}`}>
                        الطلب {item.status === 'done' ? 'تم' : 'قيد المراجعه'}
                    </p>
                </div>
            </Link>
        </div>
    );
});

export default Card;
