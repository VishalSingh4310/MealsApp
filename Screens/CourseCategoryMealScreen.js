import React from "react";
import {View, FlatList, StyleSheet} from "react-native";

import {CATEGORIES} from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import {useSelector} from "react-redux";

const CourseCategoryMealScreen = (props) => {
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

  const catId = props.route.params.categoryId;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

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

// CategoryMealScreen.navigationOptions = (navigationData) => {
//   const catId = navigationData.navigation.getParam("categoryId");

//   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

//   return {
//     headerTitle: selectedCategory.title,
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default CourseCategoryMealScreen;
