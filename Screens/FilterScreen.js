import React, {useState, useEffect, useCallback} from "react";
import {Text, View, StyleSheet, Switch} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import color from "../constants/Colors";
import {useDispatch} from "react-redux";
import {filterMeals} from "../store/actions/meals";

const FilterList = (props) => {
  return (
    <View style={styles.filter}>
      <Text>{props.title}</Text>
      <Switch
        value={props.isGluterFree}
        onValueChange={props.Newvalue}
        trackColor={{false: "#ccc", true: color.primaryColor}}
        thumbColor={
          props.isGluterFree ? color.primaryColor : color.primaryColor
        }
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const {navigation} = props;
  const [isGluterFree, setisGluterFree] = useState(false);
  const [isLactosFree, setisLactosFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGluterFree,
      lactosFree: isLactosFree,
      Vegan: isVegan,
      Veg: isVegetarian,
    };
    dispatch(filterMeals(appliedFilter));
  }, [isGluterFree, isLactosFree, isVegan, isVegetarian, dispatch]);
  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);
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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            name="Save"
            iconName="ios-save"
            size={23}
            color="#000"
            onPress={() => props.route.params.save()}
          />
        </HeaderButtons>
      );
    },
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <View style={styles.filterContainer}>
        <FilterList
          title="Gluten Free"
          isGluterFree={isGluterFree}
          Newvalue={(newValue) => setisGluterFree(newValue)}
        />
        <FilterList
          title="Lactos Free"
          isGluterFree={isLactosFree}
          Newvalue={(newValue) => setisLactosFree(newValue)}
        />
        <FilterList
          title="Vegan"
          isGluterFree={isVegan}
          Newvalue={(newValue) => setisVegan(newValue)}
        />
        <FilterList
          title="Vegetarian"
          isGluterFree={isVegetarian}
          Newvalue={(newValue) => setisVegetarian(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  filterContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    fontFamily: "Muli-Bold",
    fontSize: 23,
    textAlign: "center",
    marginVertical: 10,
  },
});
export default FilterScreen;
