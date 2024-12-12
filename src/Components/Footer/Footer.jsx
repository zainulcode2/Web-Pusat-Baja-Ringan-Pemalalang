import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CopyRightsText from "./CopyRightsText/CopyRightsText";
import CustomEmailInput from "./CustomEmailInput/CustomEmailInput";
import s from "./Footer.module.scss";
import RepoStarsForks from "./RepoStarsForks/RepoStarsForks";
import DownloadAppInfo from "./WebsiteSocialMedia/DownloadAppInfo";

const Footer = () => {
  const { t } = useTranslation();
  const section = "footer.section";

  return (
    <footer className={s.footer}>
      <div className="container">
        <section className={s.sections}>
          <section className={s.section1}>
            
            <span>{t(`${section}1.subscribe`)}</span>
            <p>{t(`${section}1.getOffer`)}</p>

            <CustomEmailInput />
          </section>

          <section className={s.section2}>
            <b>{t(`${section}2.support`)}</b>

            <ul>
              <li>{t(`${section}2.address`)}</li>
              <li>
                <a href="mailto:nashitadecor@gmail.com">cahayamitra@gmail.com</a>
              </li>
              <li>
                <a href="tel:+6282326147329">+6282326147329</a>
              </li>
            </ul>
          </section>

          <section className={s.section4}>
            <b>{t(`${section}4.quickLink`)}</b>

            <ul>
              <li>
                <Link to="/privacy">{t(`${section}4.privacyPolicy`)}</Link>
              </li>
              <li>
                <Link to="/terms">{t(`${section}4.termsOfUse`)}</Link>
              </li>
              <li>
                <Link to="/faq">{t(`${section}4.faq`)}</Link>
              </li>
              <li>
                <Link to="/contact">{t(`${section}4.contact`)}</Link>
                </li>
            </ul>
          </section>
        </section>
      </div>

      {/* Tambahkan teks pusat bata ringan di sini */}
      <div className={s.footerBottom}>
        <p>Pusat Bata Ringan Pemalang - All Rights Reserved 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
