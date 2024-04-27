import Form from '@src/components/contact/Form/Form'
import styles from './page.module.css'

const page = () => {
    return (
        <main className='section ShowSmoothEffect'>
            <div className="coverHeader" />
            <h1 className={styles.title}>عندك مشكله ؟</h1>
            <Form />
        </main>
    )
}

export default page