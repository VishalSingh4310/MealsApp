import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import CategoryGridTile from "../Components/CategoryGridTile";
import DATA from "../Models/dummy-data";
import Color from "../constants/Colors";

const CategoryScreen = (props) => {
  const [Response, setResponse] = useState("");
  // title change
  props.navigation.setOptions({
    title: "Meals Categories",
    headerStyle: {
      backgroundColor: Color.primaryColor,
    },
  });

  // Food API
  useEffect(() => {
    FoodItem();
  }, []);
  const FoodItem = async () => {
    let foodItem;
    const foodData = await fetch(
      "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
      {
        mode: "no-cors",
        method: "GET",
        headers: {
          "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
          "x-rapidapi-key":
            "75f9378ca0msh6edb77cdec6313dp1fdfe8jsn8f6e29005367",
        },
      }
    );
    const data = await foodData.json();
    setResponse(data.hints);
    // return function cleanup() {
    //   abortController.abort();
    // };
  };

  const renderGridItem = (itemData) => {
    let title = itemData.item.food.category;
    let url;
    if (title == "Generic foods") {
      url =
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
    } else if (title === "Packaged foods") {
      url =
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
    } else if (title == "Fast foods") {
      url =
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
    }
    return (
      <CategoryGridTile
        title={itemData.item.food.category}
        Url={url}
        onSelect={() =>
          props.navigation.navigate("Category Meal", {
            params: {item: itemData},
          })
        }
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.food.foodId}
      data={Response}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CategoryScreen;
