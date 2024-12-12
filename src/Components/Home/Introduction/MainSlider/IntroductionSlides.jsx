import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { introductionSliderData } from "src/Data/staticData";
import { SwiperSlide } from "swiper/react";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./IntroductionSlides.module.scss";

const IntroductionSlides = () => {
  const { t } = useTranslation();

  return introductionSliderData.map(
    ({ productImg, id }) => {
      return (
        <SwiperSlide dir="ltr" className={s.slide} key={id}>
          <img src={productImg} alt="product preview" />
          <div className={s.content}>
            </div>
            <Link to="/products" className={s.shopNow} tabIndex="-1">
              <div className={s.arrow}>
                <SvgIcon name="arrowRightLong" />
              </div>
            </Link>
        </SwiperSlide>
      );
    }
  );
};
export default IntroductionSlides;
