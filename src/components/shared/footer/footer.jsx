import Image from "next/image";
import styles from "./footer.module.css";
import logo from "../../../../public/logo.jpg";
/* icons */
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Image
                        src={logo}
                        alt="sky dreams"
                        loading="lazy"
                        placeholder="blur"
                        fill
                        sizes="(max-width: 640px) 400px,
                        (max-width: 768px) 600px,100vw"
                    />
                </div>
                <div className={styles.social}>
                    <h1 className={styles.social_title}>تابعنا على السوشيال ميديا</h1>
                    <div className={styles.list_social}>
                        <Link href={"/"}>
                            {" "}
                            <InstagramIcon />{" "}
                        </Link>
                        <Link href={"/"}>
                            <YouTubeIcon />{" "}
                        </Link>
                        <Link href={"/"}>
                            <FacebookIcon />{" "}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.copyRights}>
                    <h2 className={styles.title_copyRight}>
                        {` © ${new Date().getFullYear()}    فيكس ات جميع الحقوق محفوظة`}
                        اعمال وتطوير <p className={styles.ALPHA_CODEZ}>ALPHA CODEZ</p>
                    </h2>

                </div>
                <div className={styles.info}>
                    <ul className={styles.info_list}>
                        <li>من نحن</li>
                        <li>مساعده</li>
                        <li>سياسة الخصوصية</li>
                        <li> شروط الاستخدام</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
