import styles from "./App.module.scss";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Main from "./main/Main";
import Navigation from "./navigation/Navigation";

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <Navigation />
            <Main />
        </div>
    );
}

export default App;
