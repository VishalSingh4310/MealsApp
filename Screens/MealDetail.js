import React, {useEffect, useCallback} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import color from "../constants/Colors";
import {ScrollView} from "react-native-gesture-handler";
import {useSelector, useDispatch} from "react-redux";
import {toggleFavorite} from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.list}>
      <Text>{props.children}</Text>
    </View>
  );
};

const complexColor = (complex) => {
  let colorcomplex;
  if (complex === "simple" || complex === "affordable") {
    colorcomplex = "#0c9463";
  } else if (complex === "hard" || complex === "luxurious") {
    colorcomplex = "#e7305b";
  } else if (complex === "challenging" || complex === "pricey") {
    colorcomplex = "#e7305b";
  }
  return colorcomplex;
};
const MealDetail = (props) => {
  const {navigation} = props;
  const availabelMeal = useSelector((state) => state.meals.meals);
  const MealID = props.route.params.MealID;
  const selectedMeal = availabelMeal.find((meal) => meal.id === MealID);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(MealID));
  }, [dispatch, MealID]);
  console.log(toggleFavoriteHandler);

  useEffect(() => {
    navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  const FavMealsID = useSelector((state) =>
    state.meals.FavoriteMeals.some((meal) => meal.id === MealID)
  );
  // const selectedFavMealID = FavMealsID.find((meal) => meal.id === MealID);

  // Header title

  props.navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={FavMealsID ? "ios-star" : "ios-star-outline"}
          size={23}
          color={color.accentColor}
          onPress={props.route.params.toggleFav}
        />
      </HeaderButtons>
    ),
  });
  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.detail}>
        <Text style={styles.text}>{selectedMeal.duration}m</Text>
        <Text
          style={{...styles.text, color: complexColor(selectedMeal.complexity)}}
        >
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text
          style={{
            ...styles.text,
            color: complexColor(selectedMeal.affordability),
          }}
        >
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text>Gluten: {selectedMeal.isGlutenFree.toString()}</Text>
      <Text>LactosFree: {selectedMeal.isLactoseFree.toString()}</Text>
      <Text>Vega: {selectedMeal.isVegan.toString()}</Text>
      <Text>Vegetaria: {selectedMeal.isVegetarian.toString()}</Text>

      <Text style={styles.title}>Ingredients</Text>

      {selectedMeal.ingredients.map((ingredient, index) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginVertical: 10,
    fontFamily: "Muli-Bold",
  },
  text: {
    fontFamily: "Muli-Bold",
  },
  content: {
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  list: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontFamily: "Muli-Bold",
    fontSize: 23,
    textAlign: "center",
  },
});
export default MealDetail;
