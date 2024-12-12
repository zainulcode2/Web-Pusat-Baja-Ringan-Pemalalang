import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import s from "./AddToCartButton.module.scss";

const AddToCartButton = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const buttonText = t("productCard.buttonText.addToCart");

  function handleCartButton() {
    const productName = encodeURIComponent(`Hallo CV. Cahaya Mitra Pratama, saya berminat dengan ${product.name}`);
    const whatsappUrl = `https://wa.me/+6282326147329?text=${productName}`;

    // Open WhatsApp with the product name
    window.open(whatsappUrl, "_blank");
  }

  return (
    <button
      type="button"
      className={`${s.addToCartBtn} ${s.addToCartButton}`}
      onClick={handleCartButton}
      aria-label={buttonText}
      data-add-to-cart-button
    >
      <SvgIcon name="whatsapp" />
      <span>{buttonText}</span>
    </button>
    
  );
};

export default AddToCartButton;