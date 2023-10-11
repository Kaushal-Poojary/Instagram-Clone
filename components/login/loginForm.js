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

const LoginForm = ({ navigation }) => {
  const loginFormSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required()
      .min(8, "Password must have at least 8 characters"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={loginFormSchema}
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
                placeholder="Phone Number, Email or Username"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
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
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button
              style={styles.button(isValid)}
              title="Log in"
              onPress={() => {
                if (isValid) {
                  handleSubmit();
                  navigation.navigate("Home");
                }
              }}
              disabled={!isValid}
            />
            <View style={styles.signupContainer}>
              <TouchableOpacity>
                <Text style={styles.text}>Don't have an account? Sign Up</Text>
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

export default LoginForm;
