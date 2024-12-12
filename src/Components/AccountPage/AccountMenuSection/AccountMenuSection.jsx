import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import AccountMenuCloseBtn from "./AccountMenuCloseBtn/AccountMenuCloseBtn";
import AccountMenuIcon from "./AccountMenuIcon";
import s from "./AccountMenuSection.module.scss";

const AccountMenuSection = () => {
  const { isProfileMenuActive } = useSelector((state) => state.global);
  const { windowWidth } = useGetResizeWindow();
  const { t } = useTranslation();
  const isMobileDevice = windowWidth < SCREEN_SIZES.tablet;
  const mobileClass = isMobileDevice ? s.mobile : "";
  const activeClass = isProfileMenuActive ? s.active : "";
  const accountMenu = "accountPage.accountMenuSection";

  return (
    <>
      <AccountMenuIcon />

      <nav
        className={`${s.menuSection} ${mobileClass} ${activeClass}`}
        aria-label={"Account navigation"}
      >
        {windowWidth <= SCREEN_SIZES.desktop && <AccountMenuCloseBtn />}
        <section className={s.section}>
          <h2>{t(`${accountMenu}.manageMyAccount`)}</h2>
        </section>
      </nav>
    </>
  );
};
export default AccountMenuSection;