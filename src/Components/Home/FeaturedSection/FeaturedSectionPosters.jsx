import { useTranslation } from "react-i18next";
import {
  bannerpst,
} from "src/Assets/Images/Images";
import HorizontalPoster from "../../Shared/Posters/HorizontalPoster";
import MediumPoster from "../../Shared/Posters/MediumPoster";
import SmallPoster from "../../Shared/Posters/SmallPoster";
import s from "./FeaturedSectionPosters.module.scss";

const FeaturedSectionPosters = () => {
  const { t } = useTranslation();

  const smallPoster1TitleTrans = t("featuredSection.smallPoster1.title");
  const smallPoster1DescTrans = t("featuredSection.smallPoster1.description");
  const smallPoster2TitleTrans = t("featuredSection.smallPoster2.title");
  const smallPoster2DescTrans = t("featuredSection.smallPoster2.description");

  const horizontalPosterTitleTrans = t("featuredSection.horizontalPoster.title");
  const horizontalPosterDescTrans = t("featuredSection.horizontalPoster.description");

  return (
  

        <div className={s.smallerPosters}>
          <SmallPoster
            title={smallPoster1TitleTrans}
            description={smallPoster1DescTrans}
            posterUrl={bannerpst}
          />

          <SmallPoster
            title={smallPoster2TitleTrans}
            description={smallPoster2DescTrans}
            posterUrl={bannerpst}
          />
    </div>
  );
};
export default FeaturedSectionPosters;
