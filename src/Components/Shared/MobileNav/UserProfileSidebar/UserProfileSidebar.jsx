import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userImg, userPicturePlaceholder } from "src/Assets/Images/Images";
import s from "./UserProfileSidebar.module.scss";

const UserProfileSidebar = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const { username, isSignIn } = loginInfo;
  const { t } = useTranslation();

  return (
    
  );
};
export default UserProfileSidebar;
