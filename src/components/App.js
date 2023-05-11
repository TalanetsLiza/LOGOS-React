import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";
import CatalogPage from "./pages/catalog/CatalogPage";
import pageUrls from "../constants/pageUrls";
import BusketPage from "./pages/busket/BusketPage";
import PromotionPage from "./pages/promotion/PromotionPage";
import ReturnPage from "./pages/return/ReturnPage";
import DeliveryPage from "./pages/delivery/DeliveryPage";
import AboutPage from "./pages/about/AboutPage";
import BannerContact from "./bannerContact/BannerContact";
import BannerAbout from "./bannerAbout/BannerAbout";

const App = () => {

    const catalogByCategoryPath = `${pageUrls.catalog}/:category`;
    
    return (
        <div className={styles.container}>
            <Header />
            <Routes>
                <Route path={catalogByCategoryPath} element={<Banner />} />
            </Routes>
            <Navigation />
            <Routes>
                <Route path={catalogByCategoryPath} element={<CatalogPage />} />
                <Route path={pageUrls.busket} element={<BusketPage />} />
                <Route path={pageUrls.promotion} element={<PromotionPage />} />
                <Route path={pageUrls.return} element={<ReturnPage />} />
                <Route path={pageUrls.delivery} element={<DeliveryPage />} />
                <Route path={pageUrls.about} element={<AboutPage />} />
            </Routes>
            <BannerAbout />
            <BannerContact />
            <Footer />
        </div>
    );
};

export default App;
