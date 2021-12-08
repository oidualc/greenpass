import React from "react";
import { Dimensions, Image, ScrollView } from "react-native";

export default function GreenPass() {
  return (
    <ScrollView>
      <Image
        source={require("../assets/greenpass.jpeg")}
        style={{
          alignSelf: "center",
          maxWidth: Dimensions.get("window").width,
        }}
        resizeMode="contain"
      />
    </ScrollView>
  );
}
