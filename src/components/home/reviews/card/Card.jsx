import IMAGE from '@src/components/shared/image/Image'
import styles from './Card.module.css'

const Card = ({ item }) => {
    return (
        <div className={styles.TeacherCard}>
            <IMAGE alt={item.title} src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className={styles.image} />
            <div className={styles.content}>
                <h1 className={styles.title}>{item?.title}</h1>
                <p className={styles.lecturesCounts}>{item?.lecturesCounts} طلب خادمة</p>
            </div>
        </div>
    )
}

export default Card