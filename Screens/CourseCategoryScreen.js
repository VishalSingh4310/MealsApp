import React from "react";
import {FlatList, StyleSheet} from "react-native";

import {CATEGORIES} from "../data/dummy-data";
import CourseCategoryGridTile from "../Components/CourseCategoryGridTile";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";

const CourseCategoriesScreen = (props) => {
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

  const renderGridItem = (itemData) => {
    return (
      <CourseCategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        textColor={itemData.item.textColor}
        iconName={itemData.item.icon}
        onSelect={() => {
          props.navigation.navigate("Category Meal", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CourseCategoriesScreen;
