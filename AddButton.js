import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class AddButton extends React.Component {
  render() {
    return (
      <View style={{ position: "absolute", alignItems: "center" }}>
        <View style={styles.button}>
          <TouchableHighlight underlayColor="#F0F">
            <View>
              <FontAwesome5 name="search" size={40} color="yellow" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    position: "absolute",
    top: -60,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#FFF",
  },
});
