import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface TextButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function TextButton({title, ...props}: TextButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.button} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('screen').width - 80,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: '#5785f9',
    fontWeight: '500',
    fontSize: 16,
  },
});
