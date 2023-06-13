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
import { useEffect, useState } from "react";
import Ordering from "./pages/busket/ordering/Ordering";
import ProductPage from "./pages/product/ProductPage";
import Preloader from "./preloader/Preloader";

const App = () => {
    const [weather, setWeather] = useState({});
    const [isPreloader, setIsPreloader] = useState(false);

    useEffect( () => {
        setIsPreloader(true);

        setTimeout(() => {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
                .then(response => response.json())
                .then((data) => {
                    const dataWeather = {
                        city: "Warszawa",
                        temperature: data.current_weather.temperature,
                        units: data.hourly_units.temperature_2m,
                        time: data.current_weather.time,
                    }
                    setWeather(dataWeather);
                })
                .finally(() => setIsPreloader(false));
        }, 10)  
    },[])
    

    const catalogByCategoryPath = `${pageUrls.catalog}/:category`;
    
    return (
        <div className={styles.container}>
            {isPreloader ? <Preloader />:
                <>
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
                    <Footer weather={weather} />
                </>
            }
        </div>
    );
};

export default App;
