import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "title": {
        "fontSize": 30,
        "horizontalAlign": "center",
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20
    },
    "button": {
        "fontSize": 38,
        "horizontalAlign": "center",
        "color": "#FFF"
    },
    "message": {
        "fontSize": 18,
        "color": "#284848",
        "horizontalAlign": "center"
    },
    "ActionBar": {
        "color": "#FFFFFF",
        "backgroundColor": "#3C5AFD"
    },
    "NavBar": {
        "fontSize": 18,
        "color": "#FFF",
        "backgroundColor": "#000"
    }
});
