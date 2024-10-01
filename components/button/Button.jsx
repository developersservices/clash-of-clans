import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

const Button = ({btn, onPress}) => {
  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={onPress}
      >
      <Text style={styles.buttonText}>{btn}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#aaa219',
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 15,
      },
      buttonText:{
        fontSize: 20,
        color: '#fff',
    },
});
