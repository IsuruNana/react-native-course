import React from 'react';
import { TextInput } from 'react-native';

const defaultInput = props => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style, props.valid && props.touched ? null : styles.invalid]} 
      underlineColorAndroid="transparent" />
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginTop: 8,
    marginBottom: 8
  }
})

export default defaultInput;
