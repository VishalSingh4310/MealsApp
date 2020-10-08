import React, {useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import MealItem from "../Components/MealItem";
import {useSelector} from "react-redux";

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";

const FavouriteScreen = (props) => {
  props.navigation.setOptions({
    headerLeft: (menu) => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            name="menu"
            iconName="ios-menu"
            size={35}
            color="#000"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
  });

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate("Meals Detail", {MealID: itemData.item.id});
        }}
      />
    );
  };
  const displayedMeals = useSelector((state) => state.meals.FavoriteMeals);

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.warning}>
        <Text>No Favorites Found.Try adding some !!</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: "100%"}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  content: {
    fontSize: 20,
  },
  warning: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
export default FavouriteScreen;
