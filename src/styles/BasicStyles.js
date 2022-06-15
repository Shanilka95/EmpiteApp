import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default {
  WIDTH: width,
  HEIGHT: height,
  FONT_FAMILY: {
    REGULAR: "Mulish-Regular",
    MEDIUM: "Mulish-Medium",
    BOLD: "Mulish-Bold",
    SEMI_BOLD: "Mulish-SemiBold",
    EXTRA_BOLD: "Mulish-ExtraBold",
  },
  COLORS: {
    BACKGROUND_COLOR: "#F3F0F9",
    BLUE: "#240470",
    LIGHT_BLUE: "#0094FF",
    BLACK: "#262626",
    WHITE: "#FFFFFF",
    RED: "#D63031",
    GREEN: "#00B894",
    ORANGE: "#FF8A35",
    GRAY: "#6B828B",
    BORDER_COLOR: "#E9E4F3",
  },

  SHADOW: {
    shadowColor: `rgba(36, 4, 112, ${Platform.OS === "ios" ? 0.5 : 0.6})`,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
};
