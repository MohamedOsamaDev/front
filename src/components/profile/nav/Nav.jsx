"use client";
import Link from "next/link";
import styles from "./nav.module.css";
import { useParams, usePathname, useRouter } from "next/navigation";
const Nav = () => {
    const pathname = usePathname();
    const { slug } = useParams();
    console.log("🚀 ~ Nav ~ pathname:", slug);
    return (
        <ul className={`${styles.nav} w-90 m-auto flex al-i-c gap10`}>
            <li>
                <Link
                    className={`${pathname === "/profile" ? styles.active : ""}`}
                    href={"/profile"}
                >
                    البيانات الشخصية
                </Link>
            </li>
            <li className="color-text-p ">/</li>
            <li>
                <Link
                    className={`${pathname === "/profile/orders" ? styles.active : ""} ${slug ? styles.activeSlug : ""
                        }`}
                    href={"/profile/orders"}
                >
                    طلبات الصيانة الخاصة بك
                </Link>
            </li>
            {slug ? (
                <>
                    <li className="color-text-p  ShowSmoothEffect">/</li>
                    <li className="ShowSmoothEffect">
                        <Link
                            className={`${styles.slug}    ${pathname.includes("orders") ? styles.active : ""
                                }`}
                            href={"/profile/orders"}
                        >
                            {slug}
                        </Link>
                    </li>
                </>
            ) : (
                ""
            )}
        </ul>
    );
};

export default Nav;
