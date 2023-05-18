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
import { useEffect, useReducer, useState } from "react";
import busketReducer from "../reducers/busketReducer/busketReducer";
import busketInitialState from "../reducers/busketReducer/busketInitialState";

const App = () => {
    const [weather, setWeather] = useState({});
    const [isOpen, setOpen] = useState(false);
    
    const [state, dispatch] = useReducer(busketReducer, busketInitialState);

    useEffect( () => {
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
        });
    },[])
    

    const catalogByCategoryPath = `${pageUrls.catalog}/:category`;
    
    return (
        <div className={styles.container}>
            <Header isOpen={isOpen} setOpen={setOpen} />
            <Routes>
                <Route path={catalogByCategoryPath} element={<Banner />} />
            </Routes>
            <Navigation />
            <Routes>
                <Route path={catalogByCategoryPath} element={<CatalogPage state={state} dispatch={dispatch} />} />
                <Route path={pageUrls.busket} element={<BusketPage />} />
                <Route path={pageUrls.promotion} element={<PromotionPage />} />
                <Route path={pageUrls.return} element={<ReturnPage />} />
                <Route path={pageUrls.delivery} element={<DeliveryPage />} />
                <Route path={pageUrls.about} element={<AboutPage />} />
            </Routes>
            <BannerAbout />
            <BannerContact />
            <Footer weather={weather} isOpen={isOpen} setOpen={setOpen} />
        </div>
    );
};

export default App;
