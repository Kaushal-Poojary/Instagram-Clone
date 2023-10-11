import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";

// Import components
import SignupForm from "../components/signup/signupForm";

const SignupScreen = ({navigation}) => {

  const instagramLogo = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: instagramLogo}} style={styles.image} />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    image: {
        width: 100, 
        height: 100
    },
    text: {
        color: "white", 
        fontSize: 20, 
        fontWeight: "bold"
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 60
    }
});

export default SignupScreen;
