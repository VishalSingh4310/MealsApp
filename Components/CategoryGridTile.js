import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Color from "../constants/Colors";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
      style={[styles.gridCard, {elevation: 2}]}
      onPress={props.onSelect}
    >
      <ImageBackground
        style={styles.image}
        fadeDuration={1000}
        source={{
          uri: props.Url,
        }}
      >
        <View style={styles.imgCover}>
          <Text style={styles.content}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    fontFamily: "Muli-Bold",
    textAlign: "center",
    color: Color.accentColor,
  },
  gridCard: {
    flex: 1,
    height: 130,
    textAlign: "center",
    margin: 7,
    elevation: 4,
    backgroundColor: "#f7f7f7",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imgCover: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
    justifyContent: "center",
  },
});

export default CategoryGridTile;
