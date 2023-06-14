import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const CustomButton = ({children, onPress, mode, style, disabled}) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.container, mode === 'flat' && styles.flat]}>
          <Text style={[styles.text, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.btnColor,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  flat: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    color: GlobalStyles.colors.textColor,
    borderColor: GlobalStyles.colors.btnColor,
  },
  flatText: {
    color: GlobalStyles.colors.textColor,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.btnColor,
    borderRadius: 4,
  },
});
export default CustomButton;
