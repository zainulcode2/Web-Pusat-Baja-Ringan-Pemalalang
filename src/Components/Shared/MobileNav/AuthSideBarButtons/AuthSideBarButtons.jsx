import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./AuthSideBarButtons.module.scss";

const AuthSideBarButtons = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const { isSignIn } = loginInfo;
  const handleSignOut = useSignOut();
  const { t } = useTranslation();


};

export default AuthSideBarButtons;
