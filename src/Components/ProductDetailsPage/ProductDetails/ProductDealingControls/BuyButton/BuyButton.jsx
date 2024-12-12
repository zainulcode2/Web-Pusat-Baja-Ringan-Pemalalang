import { useTranslation } from "react-i18next";
import s from "./BuyButton.module.scss";

const BuyButton = ({ selectedProduct = {} }) => {
  const { t } = useTranslation();

  function handleBuyProduct() {
    const productName = selectedProduct.name
      ? encodeURIComponent(
          `Hallo CV. Cahaya Mitra Pratama, saya berminat dengan ${selectedProduct.name}`
        )
      : encodeURIComponent(
          "Hallo CV. Cahaya Mitra Pratama, saya tertarik dengan produk Anda"
        );

    const whatsappUrl = `https://wa.me/+6282326147329?text=${productName}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <button type="button" className={s.buyButton} onClick={handleBuyProduct}>
      {t("buttons.buyNow")}
    </button>
  );
};

export default BuyButton;
