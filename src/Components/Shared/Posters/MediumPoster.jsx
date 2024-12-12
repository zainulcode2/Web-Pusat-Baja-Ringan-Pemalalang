import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./MediumPoster.module.scss";

const MediumPoster = ({ title, description, posterUrl }) => {
  const { t } = useTranslation();
  const midPosterRef = useRef();

  useEffect(() => {
    midPosterRef.current.style.backgroundImage = `url(${posterUrl})`;
  }, []);

  return (
    <div className={s.midPoster} ref={midPosterRef} dir="ltr">
      <div className={s.content}>
        <b>{title}</b>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default MediumPoster;
