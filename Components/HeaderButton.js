import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";
import color from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={props.size} />
  );
};

export default CustomHeaderButton;
