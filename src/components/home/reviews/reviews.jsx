
import Link from 'next/link'
import styles from './reviews.module.css'
import NorthWestIcon from '@mui/icons-material/NorthWest';
import Card from './card/Card';
const Reviews = ({ data }) => {
    return (
        <section className={`${styles.section} section`}>
            <div className={styles.head}>
                <h1 className={styles.title} >اراء العملاء</h1>
                <Link className={styles.link} href={'/teachers'}>
                    كل الاراء
                    <NorthWestIcon />
                </Link>
            </div>
            <div className={styles.list}>
                {data?.map((item, index) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}

export default Reviews