import { useTranslation } from "react-i18next";
import { Header, SubHeader } from "../../../SharedModule";
import imgHader from "../../../assets/images/eatingveganfood-rafiki.png";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      {" "}
      <Header
        title={t("homePageTitle")}
        description={t("homeDescription")}
        imgHader={imgHader}
        name="Abdelrhman"
      />
      <div className=" container-fluid">
        <SubHeader
          title={t("FillTheRecipes")}
          description={t("FillTheRecipesDesc")}
          btnName={t("FillRecipes")}
          btnLink="recipes"
        />
      </div>
    </>
  );
}
