import React, {useState} from "react";
import * as Font from "expo-font";
import {AppLoading} from "expo";
import Mystack from "./Navigation/Navigation";
import {createStore, combineReducers, applyMiddleware} from "redux";
import mealsReducer from "./store/reducers/meals";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
// ));

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Font.loadAsync({
    "Muli-ExtraLight": require("./assets/Fonts/Muli-ExtraLight.ttf"),
    "Muli-Regular": require("./assets/Fonts/Muli-Regular.ttf"),
    "Muli-Bold": require("./assets/Fonts/Muli-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(err) => console.log(err)}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Mystack />
    </Provider>
  );
}
