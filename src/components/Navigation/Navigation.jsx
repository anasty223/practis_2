import { NavLink, useLocation } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("/details") && (
        <nav>
          <ul className={style.list}>
            <li className={style.listItem}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? style.activeStyle : style.navLink
                }
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/events"}
                className={({ isActive }) =>
                  isActive ? style.activeStyle : style.navLink
                }
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
