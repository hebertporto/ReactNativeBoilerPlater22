import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import { theme } from '../../theme';

interface IButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

const Button = ({ label, onPress, style, disabled }: IButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed || disabled
          ? { backgroundColor: theme.colors.indigo400 }
          : undefined,
      ]}>
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: ms(25),
    height: ms(50),
    width: ms(200),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  labelText: {
    fontSize: ms(16),
    lineHeight: ms(34),
    letterSpacing: ms(0.02 * 34),
    fontFamily: undefined,
    color: 'white',
  },
});

export { Button };
