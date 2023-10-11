import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import Validator from "email-validator";

const SignupForm = ({ navigation }) => {
    const signupFormSchema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup
            .string()
            .required()
            .min(8, "Password must have at least 8 characters"),
        username: yup.string().required().min(5, "Username must have at least 5 characters"),
    });

    return (
        <View style={styles.wrapper}>
          <Formik
            initialValues={{ email: "", password: "", username: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={signupFormSchema}
            validateOnMount={true}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <View>
                <View style={[styles.input, { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#fafafa' : 'red' }]}>
                  <TextInput
                    placeholderTextColor="#444"
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </View>
                <View style={[styles.input, { borderColor: values.username.length > 0 && values.username.length < 5 ? 'red' : '#fafafa' }]}>
                  <TextInput
                    placeholderTextColor="#444"
                    placeholder="Username"
                    autoCapitalize="none"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                  />
                </View>
                <View style={[styles.input, { borderColor: values.password.length > 0 && values.password.length < 8 ? 'red' : '#fafafa' }]}>
                  <TextInput
                    placeholderTextColor="#444"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                </View>
                <Button
                  style={styles.button(isValid)}
                  title="Sign Up"
                  onPress={() => {
                    if (isValid) {
                      handleSubmit();
                      navigation.navigate("Login");
                    }
                  }}
                  disabled={!isValid}
                />
                <View style={styles.signupContainer}>
                  <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <Text style={styles.text}>Already have an account? Log in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
      marginTop: 90,
    },
    input: {
      height: 50,
      backgroundColor: "#fafafa",
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      justifyContent: "center",
      borderWidth: 1,
    },
    text: {
      color: "#318bfb",
      textAlign: "right",
      fontWeight: "bold",
      marginBottom: 20,
    },
    signupContainer: {
      marginTop: 30,
      alignItems: "center",
    },
    button: isValid => ({
      backgroundColor: isValid ? "#318bfb" : "#9acaf7",
      height: 50,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    }),
  });
  
  export default SignupForm;