import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
        <View
          style={{
            ...styles.container,
            ...{backgroundColor: props.color},
          }}
        >
          <View style={styles.icon}>
            <Ionicons name={props.iconName} size={53} color={props.textColor} />
          </View>
          <Text
            style={{...styles.title, ...{color: props.textColor}}}
            numberOfLines={2}
          >
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "Muli-Regular",
    fontSize: 22,
    textAlign: "center",
    width: "100%",
  },
  icon: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryGridTile;
