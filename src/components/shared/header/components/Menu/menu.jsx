'use client'
import { useState } from "react";
import { ClickOutsideComponent } from "@src/components/shared/ClickoutSideComponent/ClickoutSideComponent";
import styles from "./menu.module.css";
import PersonIcon from '@mui/icons-material/Person';
import Link from "next/link";
import useAuth from "@src/hooks/useAuth";
const Menu = ({ }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { logOut } = useAuth()
    return (
        <ClickOutsideComponent onClickOutside={() => setOpenMenu(false)}>
            <div open={openMenu} onClick={() => setOpenMenu(!openMenu)} className={`ShowSmoothEffect flex-all-c p-relative ${styles.profileBox} `}>
                <PersonIcon />
                {!openMenu ? "" :

                    <ul className={`${styles.box}  `}>
                        <li className={`${styles.li} ShowSmoothEffect`}>
                            <Link className={styles.link} href="/profile">بياناتك الشخصية </Link>
                        </li>
                        <li className={`${styles.li} ShowSmoothEffect`}>
                            <button onClick={logOut} className={`${styles.link} `}>تسجيل خروج</button>
                        </li>
                    </ul>
                }
            </div>
        </ClickOutsideComponent>
    );
};

export default Menu;
