import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  Dimensions,
} from 'react-native';

interface CustomTextInputProps extends RNTextInputProps {
  error?: string;
}

export default function TextInput({error, ...props}: CustomTextInputProps) {
  return (
    <View style={styles.container}>
      <RNTextInput style={styles.textInput} {...props} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  textInput: {
    width: Dimensions.get('screen').width - 80,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 7,
    opacity: 0.7,
  },
  errorText: {
    color: '#fff',
  },
});
