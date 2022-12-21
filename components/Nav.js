import Image from "next/image";
import nav from "/styles/components/Nav.module.sass";
import Link from "next/link";
import { useState } from "react";

function Nav(props) {
  const [menu, setMenu] = useState(false);

  function toogleMenu(setMenu) {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }
  return (
    <>
      {menu == true ? (
        <ul className={nav.burgerBox}>
          <li className={nav.burgerItem}>k</li>
          <li className={nav.burgerItem}>
            {" "}
            <Link href='/'>Announcements</Link>
          </li>
          <li className={nav.burgerItem}>
            {" "}
            <Link href='/line-up'>Line-Up</Link>
          </li>
          <li className={nav.burgerItem}>
            {" "}
            <Link href='/schedule'>Timetable</Link>
          </li>
          <li className={nav.burgerItem}>
            <Link href='/info'>Info</Link>
          </li>
        </ul>
      ) : null}

      <div className={nav.parent}>
        <div onClick={() => toogleMenu(setMenu)} className={nav.burgerClick}>
          <Image src='/menu.svg' width='40' height='40' alt='' />
        </div>
        <div className={nav.navbar}>
          <div className={nav.logo}>
            <Image src='/logo-horizontal-white.svg' width='100' height='30' alt='' />
          </div>
          <div className={nav.menu}>
            <ul>
              <li>
                <Link href='/'>
                  <span className={nav.span}>Announcements</span>
                </Link>
              </li>
              <li>
                <Link href='/line-up'>
                  <span className={nav.span}>Line-Up</span>
                </Link>
              </li>
              <li>
                <Link href='/schedule'>
                  {" "}
                  <span className={nav.span}>Timetable</span>
                </Link>
              </li>
              <li>
                <Link href='/info'>
                  {" "}
                  <span className={nav.span}>Info</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
