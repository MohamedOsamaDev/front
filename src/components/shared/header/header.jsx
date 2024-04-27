"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useAuth from "@src/hooks/useAuth";
import PersonIcon from '@mui/icons-material/Person';
import Menu from './components/Menu/menu';
export default function Header() {
  const [mobile, setMobile] = useState(false);

  const { isAuth, logOut } = useAuth()
  const Navlist = [
    {
      name: "الرئيسيه",
      link: "/",
    },
    {
      name: "الخدمات",
      link: "/services",
    },
    {
      name: "عنا",
      link: "/about-us",
    },
    {
      name: " تواصل معنا",
      link: "/contact",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <nav className={` ${styles.nav} w-90 m-auto just-sb  ShowSmoothEffect`}>
          <ul className={` ${styles.ul} flex gap5 al-c-c  `}>
            {Navlist?.map((val, ind) => (
              <li key={val.name} className="  ">
                <Link href={val.link} className={`${styles.link} flex `}>
                  {val.name}
                  <KeyboardArrowDownIcon />
                </Link>
              </li>
            ))}
          </ul>
          {/* start mobile nav icon */}
          <div
            open={mobile ? "true" : undefined}
            className={`${styles.iconMobile}`}
            onClick={() => setMobile(!mobile)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* end mobile nav icon */}
          {/* start logo */}
          <div className={`${styles.logo} `}>
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
          {/* end logo */}
          {/* start box buttons  */}
          <div className={`${styles.boxButtons} `}>
            {/* {isAuth ? <button onClick={logOut} className={`${styles.buttonLogOut} ShowSmoothEffect  `}>تسجيل خروج</button> : <Link className={`${styles.buttonlogIn} ShowSmoothEffect  `} href={"/sign-up"}>
              خطوات التسجيل
            </Link>} */}



            {isAuth ?
              <Menu />
              : <Link className={`${styles.buttonlogIn} ShowSmoothEffect  `} href={"/sign-up"}>
                خطوات التسجيل
              </Link>}
            {/* <button className={styles.buttonIconReG}>
              <PersonAddIcon />
            </button> */}
          </div>
          {/* end box buttons  */}
        </nav>
      </header>
      {/* <div className="coverHeader" /> */}
    </>
  );
}
