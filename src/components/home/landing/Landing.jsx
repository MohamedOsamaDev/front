import styles from "./landing.module.css";
import GppGoodIcon from '@mui/icons-material/GppGood';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import YardIcon from '@mui/icons-material/Yard';
import IMAGE from "@src/components/shared/image/Image";

const Landing = async ({ data }) => {
    // eslint-disable-next-line react/jsx-key
    let tagesIcons = [<GppGoodIcon />, <InsertEmoticonIcon />, <YardIcon />];
    return (
        <section className={`${styles.section}`}>
            <div className={`${styles.wrapper} section flex  just-sb`}>
                <div className={styles.rightBox}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <h1 className={styles.sec_title}> {data?.sec_title}</h1>
                    <p className={styles.description}>{data?.description}</p>
                    <p className={styles.sec_description}>{data?.sec_description}</p>
                    <div className={`${styles.boxiconsForLeftBox} flex  wrap gap20`}>
                        {data?.tages?.map((val, ind) => (
                            <span
                                key={val?.id}
                                className={`${styles.IconCard} flex al-i-c gap10`}
                            >
                                {tagesIcons[ind]}
                                {val?.tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={styles.posterwrapper}>
                    <IMAGE
                        alt="logo"
                        className={styles.poster}
                        src="https://img.freepik.com/premium-photo/corporate-building-background-highresolution-image_974166-448.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Landing;
