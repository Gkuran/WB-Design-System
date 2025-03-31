import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import React from "react";

// Tipagem das props.
export interface ButtonProps {
  label: string;
  primary?: boolean;
  withIcon?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const Button = ({
  label,
  primary = false,
  withIcon,
  isDisabled,
  onPress,
}: ButtonProps) => {
  const modeStyle = primary ? styles.primary : styles.secondary;
  const textModeStyle = primary ? styles.primaryText : styles.secondaryText;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View style={[styles.button, modeStyle]}>
        <Text style={[textModeStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

// CSS
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontWeight: "700",
    lineHeight: 1,
  },
  primary: {
    backgroundColor: "#EA3C34",
  },
  primaryText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 19,
  },
  secondary: {
    backgroundColor: "#D2314E",
  },
  secondaryText: {
    color: "#FFFFFF",
  },
});
