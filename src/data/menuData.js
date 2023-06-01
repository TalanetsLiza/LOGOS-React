import lamb from "../assets/images/menu/lamb.png";
import turkey from "../assets/images/menu/turkey.png";
import duck from "../assets/images/menu/duck.png";
import goose from "../assets/images/menu/goose.png";

import soupSolyanka from "../assets/images/menu/soup-solyanka.jpg";
import soupLapha from "../assets/images/menu/soup-lapha.jpg";
import soupPumpkin from "../assets/images/menu/soup-pumpkin.jpg";
import soupTomatni from "../assets/images/menu/soup-tamatni.jpg";

import fishTrout from "../assets/images/menu/fish-trout.jpg";
import fishSalmon from "../assets/images/menu/salmon-steak.jpg";
import fishSeafood from "../assets/images/menu/seafood.jpg";
import fishCarp from "../assets/images/menu/stuffed-carp.jpg";

import drinkCoffe from "../assets/images/menu/coffe.jpg";
import drinkAlcoholic from "../assets/images/menu/alcoholic-drinks.jpg";
import drinkHot from "../assets/images/menu/hot-drinks.jpg";
import drinkJuice from "../assets/images/menu/juice.jpg";
import drinkTea from "../assets/images/menu/tea.jpg";

const menuData = [
    {
        id: 1,
        category: ["cold-snacks", "hot-snacks", "signature-dishes", "meat-dishes"],
        title: "Ягненок",
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        weight: 225,
        price: 620,
        image: {
            src: lamb,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 2,
        category: ["cold-snacks", "hot-snacks", "meat-dishes"],
        title: "Индейка",
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        weight: 225,
        price: 450,
        image: {
            src: turkey,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 3,
        category: ["cold-snacks", "hot-snacks", "meat-dishes", "grill-menu"],
        title: "Гусь",
        description: "Фаршированный яблоками и апельсинами. Подается с салатом",
        weight: 225,
        price: 7900,
        image: {
            src: goose,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 4,
        category: ["cold-snacks", "hot-snacks", "meat-dishes", "signature-dishes"],
        title: "Утка",
        description: "Фаршированная рисом, курагой и айвой",
        weight: 225,
        price: 3230,
        image: {
            src: duck,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 5,
        category: ["soups", "hot-snacks"],
        title: "Суп солянка",
        description: "Пикантный суп с ветчиной и маслинами",
        weight: 250,
        price: 3230,
        image: {
            src: soupSolyanka,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 6,
        category: ["soups", "hot-snacks"],
        title: "Суп с лапшой",
        description: "Изысканный суп с рисовой лапшой и зеленью",
        weight: 320,
        price: 650,
        image: {
            src: soupLapha,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 7,
        category: ["soups", "hot-snacks", "signature-dishes", "cold-snacks"],
        title: "Тыквенный суп",
        description: "Тыквенный суп-пюре с креветками и зеленью",
        weight: 325,
        price: 1200,
        image: {
            src: soupPumpkin,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 8,
        category: ["soups", "hot-snacks"],
        title: "Томатный суп",
        description: "Нежный томатный суп с говядиной. Подается с брускетами",
        weight: 300,
        price: 1350,
        image: {
            src: soupTomatni,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 9,
        category: ["fish-dishes", "hot-snacks", "grill-menu", "signature-dishes"],
        title: "Филе форель",
        description: "С салатом из шпината и соте томатов в кунжутно-соевом соусе",
        weight: 450,
        price: 4200,
        image: {
            src: fishTrout,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 10,
        category: ["fish-dishes", "hot-snacks", "grill-menu"],
        title: "Филе лосося",
        description: "Запеченное под лимонным соусом, дополненное дольками лимона и отварным рисом",
        weight: 350,
        price: 3700,
        image: {
            src: fishSalmon,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 11,
        category: ["fish-dishes", "hot-snacks", "cold-snacks"],
        title: "Морепродукты",
        description: "Нежные мидии, ккеветки и устрицы под лимонным соусом",
        weight: 450,
        price: 4800,
        image: {
            src: fishSeafood,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 12,
        category: ["fish-dishes", "hot-snacks", "grill-menu"],
        title: "Карп",
        description: "Фаршированная лимоном и апельсином, подоется с салатом",
        weight: 450,
        price: 1600,
        image: {
            src: fishCarp,
            alt: "food"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 13,
        category: ["drinks"],
        title: "Кофе",
        description: "Кофе в ассортименте",
        weight: 250,
        price: 250,
        image: {
            src: drinkCoffe,
            alt: "drink"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 14,
        category: ["drinks"],
        title: "Чай",
        description: "Чай в ассортименте",
        weight: 250,
        price: 250,
        image: {
            src: drinkTea,
            alt: "drink"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 15,
        category: ["drinks", "cold-snacks"],
        title: "Смузи",
        description: "Свежевыжатые соки и смузи в ассортименте",
        weight: 200,
        price: 300,
        image: {
            src: drinkJuice,
            alt: "drink"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 16,
        category: ["drinks"],
        title: "Горячие коктели",
        description: "Горячие напитки в ассортименте",
        weight: 250,
        price: 250,
        image: {
            src: drinkHot,
            alt: "drink"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
    {
        id: 17,
        category: ["drinks", "cold-snacks"],
        title: "Алкогольные напитки",
        description: "Алкогольные напитки в ассортименте",
        weight: 250,
        price: 300,
        image: {
            src: drinkAlcoholic,
            alt: "drink"
        },
        proteins: 17.73,
        fats: 7.63,
        carbohydrates: 22.35,
        kilocalories: 240,
    },
];

export default menuData;
