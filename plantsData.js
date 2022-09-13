export const livingroomPlants = [
    [require("./assets/images/livingroomPlants/RadermacheraSinica.jpg"), {name: "Radermachera Sinica", takenCare: false, needWater: true, days: 3}],
    [require("./assets/images/livingroomPlants/Ciemnotka.jpg"), {name: "Ciemnotka", takenCare: true, needWater: false, days: null}],
    [require("./assets/images/livingroomPlants/ChamedoraWytworna.jpg"), {name: "Chamedora Wytworna", takenCare: true, needWater: false, days: null}],
    [require("./assets/images/livingroomPlants/Lawenda.jpg"), {name: "Lawenda", takenCare: false, needWater: true, days: 5}],
  ]

  export const bedroomPlants = [
    [require("./assets/images/bedroomPlants/FitionaVerchafelta.jpg"), {name: "Fitiona Verchafelta", takenCare: false, needWater: true, days: 3}],
    [require("./assets/images/bedroomPlants/Bananowiec.jpg"), {name: "Bananowiec", takenCare: false, needWater: true, days: 5}],
    [require("./assets/images/bedroomPlants/AspidistraWyniosła.jpg"), {name: "Aspidistra Wyniosła", takenCare: true, needWater: false, days: null}],
    [require("./assets/images/bedroomPlants/KaktusGrusona.jpg"), {name: "Kaktus Grusona", takenCare: false, needWater: true, days: 6}],
  ]

  export const searchPlants = [
    [require("./assets/images/searchPlants/AloeVera.jpg"), {name: "Aloe Vera", description: "do salonu" }],
    [require("./assets/images/searchPlants/AglaonemaZmienna.jpg"), {name: "Aglaonema Zmienna", description: "na zewnątrz"}],
    [require("./assets/images/searchPlants/Bonsai.jpg"), {name: "Bonsai", description: "zwierzolubna"}],
    [require("./assets/images/searchPlants/RóżaPospolita.jpg"), {name: "Róża Pospolita", description: "Cięte"}],
    [require("./assets/images/searchPlants/TulipanSezonowy.jpg"), {name: "Tulipan Sezonowy", description: "Cięte"}],
    [require("./assets/images/searchPlants/PandanPachnący.jpg"), {name: "Pandan Pachnący", description: "do łazienki"}],
    [require("./assets/images/searchPlants/KaktusGrusona.jpg"), {name: "Kaktus Grusona", description: "do sypialni"}],
    [require("./assets/images/searchPlants/Bananowiec.jpg"), {name: "Bananowiec", description: "do kuchni"}],
  ]

  export const lostPlants = [
    [require("./assets/images/lostPlants/Orchidea.jpg"), {name: "Orchidea"}],
    [require("./assets/images/lostPlants/Palma.jpg"), {name: "Palma"}],
    [require("./assets/images/lostPlants/AloeVera.jpg"), {name: "Aloe Vera"}],
  ]

  export const plantsCategory = [
    [require("./assets/icons/exploreIcons/Sun.png"), {name: "Lubiące Słońce"}],
    [require("./assets/icons/exploreIcons/Animals.png"), {name: "Przyjazne Zwierzętom"}],
    [require("./assets/icons/exploreIcons/Garden.png"), {name: "Do ogrodu"}],
    [require("./assets/icons/exploreIcons/Easy.png"), {name: "Łatwa pielęgnacja"}],
    [require("./assets/icons/exploreIcons/Bathroom.png"), {name: "Do łazienki"}],
    [require("./assets/icons/exploreIcons/Air.png"), {name: "Filtrujące powietrze"}],
  ]

  export const likedPlants = [
    [require("./assets/images/likedPlants/RantofelnikMieszańcowy.jpg"), {name: "Rantofelnik Mieszańcowy", liked: 345}],
    [require("./assets/images/likedPlants/Drobnolistek.jpg"), {name: "Drobnolistek", liked: 215}],
    [require("./assets/images/likedPlants/OrchideaWytworna.jpg"), {name: "OrchideaWytworna", liked: 122}],
    [require("./assets/images/likedPlants/KaktusKwiecik.jpg"), {name: "KaktusKwiecik", liked: 113}],
  ]

  export const dailyPlants = [
    [require("./assets/images/dailyPlants/Rosiczka.jpg"), {name: "Rosiczka", liked: 345}],
  ]

  const agawaProfile = {
    general: {
      type: "do łazienki",
      size: "do 50 cm",
      care: "łatwy",
      description: "Agawy pochodzą z Meksyku, ale obecnie rozprzestrzeniły się także w południowej Europie. W czasie wakacyjnych wypraw w rejon Morza Śródziemnego można zauważyć olbrzymie, kilkumetrowe łodygi, na których wyrastają płaskie, żółte baldachy. Z daleka przypominają dziwaczne latarnie – a to właśnie kwitnące agawy. Niestety agawy kwitną dopiero po kilkudziesięciu latach, w dodatku dana roślina kwitnie tylko raz, a potem zamiera. Liście agawy mają lecznicze właściwości, a odmiana sizalowa dostarcza też cennego włókna."
    },
    requirements: {
      insolation: {inWords: "średnie", inPercentage: 50},
      temperature: {inWords: "24°C", inPercentage: 90},
      position: {inWords: "Obok", inPercentage: 20},
      whiff: {inWords: "Brak", inPercentage: 0},
      humidity: {inWords: "Wysoka", inPercentage: 95},
    },
    care: {
      watering: "Latem obficie podlewamy agawy raz lub dwa razy w tygodniu. Cała bryła korzeniowa powinna być nawodniona. Zimą podlewamy je tylko trochę, tak aby ziemia nie mogła całkowicie wyschnąć.",
      transplanting: "Ze względu na szybki wzrost, niezbędne jest regularne przesadzanie agawy. Młode rośliny przesadza się każdego roku, a starsze egzemplarze co 3-5 lat. Kiedy po przesadzeniu dolne liście stają się plamiste, żółkną albo się marszczą, należy agawę przesadzić ponownie, ponieważ się nie ukorzeniła."
    }
  }

  export const easyCareCollectionPlants = [
    [require("./assets/images/easyCarePlants/Agawa.jpg"), {name: "Agawa", liked: 248, profile: agawaProfile}],
    [require("./assets/images/easyCarePlants/DieffenbachiaAmoena.jpg"), {name: "Dieffenbachia Amoena", liked: 955}],
    [require("./assets/images/easyCarePlants/BambusLuckyBamboo.jpg"), {name: "Bambus Lucky Bamboo", liked: 120}],
    [require("./assets/images/easyCarePlants/Grubosz.jpg"), {name: "Grubosz", liked: 600}],
    [require("./assets/images/easyCarePlants/Kaktus.jpg"), {name: "Kaktus", liked: 456}],
    [require("./assets/images/easyCarePlants/KaktusKwitnący.jpg"), {name: "Kaktus Kwitnący", liked: 679}],
    [require("./assets/images/easyCarePlants/Pieniążek.jpg"), {name: "Pieniążek", liked: 234}],
    [require("./assets/images/easyCarePlants/RozetkaZnana.jpg"), {name: "Rozetka Znana", liked: 346}],
    [require("./assets/images/easyCarePlants/Wieżownica.jpg"), {name: "Wieżownica", liked: 645}],
    [require("./assets/images/easyCarePlants/Zamiokulkas.jpg"), {name: "Zamiokulkas", liked: 324}],
    [require("./assets/images/easyCarePlants/AloeVera.jpg"), {name: "Aloe Vera", liked: 587}],
    [require("./assets/images/easyCarePlants/Bananowiec.jpg"), {name: "Bananowiec", liked: 98}],
    [require("./assets/images/easyCarePlants/RóżaPospolita.jpg"), {name: "Róża Pospolita", liked: 895}],
    [require("./assets/images/easyCarePlants/TulipanSezonowy.jpg"), {name: "Tulipan Sezonowy", liked: 785}],
    [require("./assets/images/easyCarePlants/Dziwaczek.jpg"), {name: "Dziwaczek", liked: 345}],
    [require("./assets/images/easyCarePlants/Amaryllis.jpg"), {name: "Amaryllis", liked: 681}],
    [require("./assets/images/easyCarePlants/Monstera.jpg"), {name: "Monstera", liked: 899}],
    [require("./assets/images/easyCarePlants/Fikus.jpg"), {name: "Fikus", liked: 459}],
    [require("./assets/images/easyCarePlants/IrysSyberyjski.jpg"), {name: "Irys Syberyjski", liked: 516}],
    [require("./assets/images/easyCarePlants/HortensjaOgrodowa.jpg"), {name: "Hortensja Ogrodowa", liked: 768}],
    [require("./assets/images/easyCarePlants/EchmeaWstęgowata.jpg"), {name: "Echmea Wstęgowata", liked: 348}],
    [require("./assets/images/easyCarePlants/CisPospolity.jpg"), {name: "Cis Pospolity", liked: 214}],
    [require("./assets/images/easyCarePlants/JaskierOstry.jpg"), {name: "Jaskier Ostry", liked: 132}],
  ]