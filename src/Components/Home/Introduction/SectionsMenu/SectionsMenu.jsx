import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import {
  menFashionMenuItems,
  otherSectionsMenuItems,
  womenFashionMenuItems,
} from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import DropDownMenu from "./DropDownMenu";
import OtherSections from "./OtherSections";
import s from "./SectionsMenu.module.scss";
import SectionsMenuCloseBtn from "./SectionsMenuCloseBtn/SectionsMenuCloseBtn";

const SectionsMenu = () => {
  const { t } = useTranslation();
  const { isSectionsMenuActive } = useSelector((state) => state.global);
  const activeClass = isSectionsMenuActive ? s.active : "";
  const { windowWidth } = useGetResizeWindow();

  return (
    <>

      <aside className={`${s.sectionsMenu} ${activeClass}`}>
        {windowWidth <= SCREEN_SIZES.desktop }

        <h2>{t("sectionsMenu.title")}</h2>

      </aside>
    </>
  );
};

export default SectionsMenu;
