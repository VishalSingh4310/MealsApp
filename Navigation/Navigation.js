import * as React from "react";
import {createStackNavigator, HeaderTitle} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import {NavigationContainer} from "@react-navigation/native";
import CourseCategoryScreen from "../Screens/CourseCategoryScreen";
import CourseCategoryMealScreen from "../Screens/CourseCategoryMealScreen";
import FilterScreen from "../Screens/FilterScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";
import MealDetail from "../Screens/MealDetail";
import color from "../constants/Colors";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: color.primaryColor,
        },
        headerTitleStyle: {
          fontFamily: "Muli-Bold",
          color: "black",
        },
      }}
    >
      <Stack.Screen name="Categories" component={CourseCategoryScreen} />
      <Stack.Screen name="Category Meal" component={CourseCategoryMealScreen} />
      <Stack.Screen name="Meals Detail" component={MealDetail} />
    </Stack.Navigator>
  );
}
const FavNavigator = createStackNavigator();

function FavNav() {
  return (
    <FavNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: color.primaryColor,
        },
      }}
    >
      <FavNavigator.Screen name="Favourites" component={FavouriteScreen} />
      <FavNavigator.Screen name="Meals Detail" component={MealDetail} />
    </FavNavigator.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name == "Meals") {
            iconName = focused ? "ios-restaurant" : "ios-restaurant";
          } else if (route.name == "Favourites") {
            iconName = focused ? "ios-star" : "ios-star-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: color.primaryColor,
        inactiveTintColor: "gray",
        fontFamily: "Muli-Bold",
        paddingHorizontal: 20,
        allowFontScaling: true,
        labelStyle: {
          fontFamily: "Muli-Bold",
          fontSize: 13,
          paddingTop: 3,
        },
        tabStyle: {},
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MyStack}
        options={{swipeEnabled: true}}
      />
      <Tab.Screen
        name="Favourites"
        component={FavNav}
        options={{swipeEnabled: true}}
      />
    </Tab.Navigator>
  );
}

const FilterNavigator = createStackNavigator();
function FilterNav() {
  return (
    <FilterNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: color.primaryColor,
        },
      }}
    >
      <FilterNavigator.Screen name="Filter" component={FilterScreen} />
    </FilterNavigator.Navigator>
  );
}
const MainNavigator = createDrawerNavigator();

function MainNav() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        drawerContentOptions={{
          activeTintColor: color.primaryColor,
          inactiveTintColor: color.accentColor,
          itemStyle: {
            marginTop: 10,
            activeTintColor: color.primaryColor,
          },
          labelStyle: {
            fontFamily: "Muli-Regular",
            fontSize: 20,
            marginHorizontal: 10,
          },
          style: {
            textAlign: "center",
            marginHorizontal: 0,
            padding: 0,
          },
          inactiveBackgroundColor: color.primaryColor,
          activeBackgroundColor: color.secondaryColor,
        }}
        drawerStyle={{
          backgroundColor: color.primaryColor,
          paddingHorizontal: 0,
          marginHorizontal: 0,
        }}
      >
        <MainNavigator.Screen
          name="Favorite Meals"
          component={MyTab}
          options={{drawerLabel: "Fav Meals"}}
        />
        <MainNavigator.Screen
          name="Filter Meals"
          component={FilterNav}
          options={{drawerLabel: "Filter"}}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
