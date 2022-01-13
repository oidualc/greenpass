import React from "react";
import { Dimensions, Image, ScrollView } from "react-native";

const image = require("../assets/greenpass.jpg");
const source = Image.resolveAssetSource(image);
const windowWidth = Dimensions.get("window").width;
const heightToWidthRatio = source.height / source.width;
const componentHeight = windowWidth * heightToWidthRatio;

export default function GreenPass() {
  return (
    <ScrollView>
      <Image
        source={image}
        style={{
          alignSelf: "center",
          maxWidth: Dimensions.get("window").width,
          height: componentHeight,
        }}
        resizeMode="contain"
      />
    </ScrollView>
  );
}
