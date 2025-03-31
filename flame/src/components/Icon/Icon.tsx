import { Image, StyleSheet, ImageStyle } from "react-native";
import React from "react";

export type IconName = "arrowRight" | "editPencil" | "eyeOff";
export type IconPosition = "left" | "right";

// Tipagem das props do ícone.
interface IconProps {
  name: IconName;
  style?: ImageStyle;
  color?: string;
  size?: number;
}

// Alterar os nomes mais tarde. Adicionar um padrão.
const iconMap: Record<IconName, any> = {
  arrowRight: require("../../../assets/icons/arrow-right.png"),
  editPencil: require("../../../assets/icons/Edit_Pencil.png"),
  eyeOff: require("../../../assets/icons/eye-off.png"),
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = "white",
  style,
}) => {
  const iconStyle: ImageStyle = {
    width: size,
    height: size,
    tintColor: color,
    ...style,
  };

  return <Image source={iconMap[name]} style={[styles.icon, iconStyle]} />;
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: "contain",
  },
});

export default Icon;
