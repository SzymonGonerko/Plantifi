import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Pressable, Animated} from 'react-native';
import { NavIcon } from "./ui/NavIcon";
import { CameraButton } from "./ui/CameraButton";

import { Plants } from "../screens/Plants";
import { Explore } from "../screens/Explore";
import { Goals } from "../screens/Goals";
import { Camera } from "../screens/Camera";
import { Shop } from "../screens/Shop";


const Tab = createBottomTabNavigator();



export const TabsNavigator = () => {




return <>
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,

    }}
    >
        <Tab.Screen 
            name='Plants' 
            component={Plants}
            options={{
                tabBarItemStyle: {zIndex: 4},
                tabBarIcon: ({focused}) => <NavIcon text={focused ? "Moje\u00A0rośliny" : ""} source={focused ? require("../assets/icons/nav/plantsActive.jpg"): require("../assets/icons/nav/plants.jpg")}/>
            }}
        />

        <Tab.Screen
            name='Explore' 
            component={Explore}
            options={{
                tabBarItemStyle: {zIndex: 4},
                tabBarIcon: ({focused}) => <NavIcon text={focused ? "Odkrywaj" : ""} source={focused ? require("../assets/icons/nav/exploreActive.jpg"): require("../assets/icons/nav/explore.jpg")}/>
            }}
        />

        <Tab.Screen 
            name='Camera' 
            component={Camera}
            options={{
                tabBarButton: () => <CameraButton/>
            }}
        />

        <Tab.Screen 
            name='Goals' 
            component={Goals}
            options={{
                tabBarIcon: ({focused}) => <NavIcon text={focused ? "Moje\u00A0zadania" : ""} source={focused ? require("../assets/icons/nav/goalsActive.jpg"): require("../assets/icons/nav/goals.jpg")}/>
            }}
        />

        <Tab.Screen 
            name='Shop' 
            component={Shop}
            options={{
                tabBarIcon: ({focused}) => <NavIcon foc={focused} text={focused ? "Sklep" : ""} source={focused ? require("../assets/icons/nav/shopActive.jpg"): require("../assets/icons/nav/shop.jpg")}/>
            }}
        />

    </Tab.Navigator>
</>
}
const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        left: 10,
        right: 10,
        bottom: 0,
        height: 121,
        padding: 0,
        backgroundColor: "#ffffff00",
        elevation: 0,
        borderWidth: 0,
    },
    plantsIcon: {
        width: 30,
        height: 30,
    }
})
