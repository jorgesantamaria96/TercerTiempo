import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.signin}>
      <Text>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    signin: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default SignUp;
