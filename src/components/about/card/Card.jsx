'use client'
import { memo } from "react";
import styles from "./card.module.css"
import NorthWestIcon from '@mui/icons-material/NorthWest';
const Card = memo(({ item }) => {
    return (
        <div className={styles.card}>
            <div className={`${styles.titleBox} flex  al-i-c gap10`}>
                <h1 className={styles.title}>{item?.title}</h1>
                {/* <NorthWestIcon /> */}
            </div>
            <p className={styles.description}>{item?.description}</p>
        </div>
    );
});

export default Card;
