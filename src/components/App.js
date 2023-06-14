import { Navigate, Route, Routes } from "react-router-dom";
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
import Ordering from "./pages/busket/ordering/Ordering";
import ProductPage from "./pages/product/ProductPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../store/menu/menuSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchMenu());
    }, []);    

    const catalogByCategoryPath = `${pageUrls.catalog}/:category`;
    
    return (
        <div className={styles.container}>
            <Header />
            <Routes>
                <Route path={catalogByCategoryPath} element={<Banner />} />
                <Route path="*" element={null} />
            </Routes>
            <Navigation />
            <Routes>
                <Route path="/" element={<Navigate to={pageUrls.catalogColdSnacks} replace />} />
                <Route path={catalogByCategoryPath} element={<CatalogPage />} />
                <Route path={pageUrls.busket} element={<BusketPage />} />
                <Route path={pageUrls.ordering} element={<Ordering />} />
                <Route path={pageUrls.promotion} element={<PromotionPage />} />
                <Route path={pageUrls.return} element={<ReturnPage />} />
                <Route path={pageUrls.delivery} element={<DeliveryPage />} />
                <Route path={pageUrls.about} element={<AboutPage />} />
                <Route path={`${pageUrls.product}/:id`} element={<ProductPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
