import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import Meal from "../Models/meal";

const MealItem = (props) => {
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
  return (
    <View style={styles.mealScreen}>
      <TouchableNativeFeedback onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground
              fadeDuration={1000}
              style={styles.titleImg}
              source={{uri: props.image}}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text
              style={{
                ...styles.text,
                color: complexColor(props.complexity),
              }}
            >
              {props.complexity.toUpperCase()}
            </Text>
            <Text
              style={{
                ...styles.text,
                color: complexColor(props.affordability),
              }}
            >
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mealScreen: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 7,
    marginVertical: 5,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontFamily: "Muli-Bold",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
  },
});
export default MealItem;
