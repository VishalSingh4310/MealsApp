import React from "react";
import {Text, View, StyleSheet, Button, Image} from "react-native";
import color from "../constants/Colors";

const CategoryMealScreen = (props) => {
  const CatData = props.route.params.params.item.item.food;
  // header title
  props.navigation.setOptions({
    headerTitle: CatData.category,
  });

  return (
    <View style={styles.screen}>
      {/* <Text style={styles.content}>The Category Meal Screen</Text> */}
      {/* <Text style={styles.content}>{CatData.category}</Text> */}

      {/* <View style={styles.imgContainer}> */}
      <Image
        style={styles.tinylogo}
        fadeDuration={1000}
        source={{
          uri:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        }}
      />
      {/* </View> */}
      <View style={styles.brandContainer}>
        <Text>Brand</Text>
        <Text style={styles.brand}>{CatData.brand}</Text>
      </View>

      <View style={styles.listHeadContainer}>
        <Text style={styles.listHead}>Nutrients</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listContent}>
          <Text>Carbs</Text>
          <Text>{CatData.nutrients.CHOCDF}</Text>
        </View>
        <View style={styles.listContent}>
          <Text>Energy</Text>
          <Text>{CatData.nutrients.ENERC_KCAL}</Text>
        </View>
        <View style={styles.listContent}>
          <Text>Fat</Text>
          <Text>{CatData.nutrients.FAT}</Text>
        </View>
        <View style={styles.listContent}>
          <Text>Protein</Text>
          <Text>{CatData.nutrients.PROCNT}</Text>
        </View>
      </View>
      <Button
        title="CategoryMeal Screen"
        onPress={() => props.navigation.navigate("Meals Detail")}
      />
      {/* <Button title="Go back" onPress={() => props.navigation.goBack()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    fontSize: 20,
  },
  listHeadContainer: {
    width: "100%",
  },
  listHead: {
    fontSize: 18,
    backgroundColor: "#856c8b",
    width: "100%",
    color: "#fff",
    lineHeight: 30,
    textAlign: "center",
  },
  listContainer: {
    marginVertical: 30,
    width: "100%",
  },
  listContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dbdbdb",
    marginVertical: 2,
    paddingVertical: 3,
    paddingHorizontal: 25,
  },
  brandContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
  brand: {
    marginVertical: 3,
    color: color.primaryColor,
    paddingVertical: 3,
    paddingHorizontal: 25,
    fontSize: 25,
  },
  tinyLogo: {
    width: 66,
    height: 58,
  },
  // imgContainer: {
  //   width: "100%",
  //   marginBottom: "40%",
  // },
});
export default CategoryMealScreen;
