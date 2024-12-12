import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./HorizontalPoster.module.scss";

const HorizontalPoster = ({ title, description, posterUrl }) => {
  const { t } = useTranslation();
  const horPosterRef = useRef();

  useEffect(() => {
    horPosterRef.current.style.backgroundImage = `url(${posterUrl})`;
  }, []);

  return (
    <div className={s.HorPoster} ref={horPosterRef} dir="ltr">
      <div className={s.content}>
        <b>{title}</b>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default HorizontalPoster;
