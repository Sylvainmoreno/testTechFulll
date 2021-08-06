import React from "react";
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup'
import IEDFormInput from '../../components/IEDFormInput/IEDFormInput'
import IEDFormButton from "../../components/IEDFormButton/IEDFormButton";


const imgLogo = require("fulll/assets/images/ied-logo.png");

const loginValidation = yup.object().shape({
    email: yup.string().email("Please enter valid email").required('Email Address is Required'),
    password: yup.string().matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/, "Password must have at least 1 special character.").min(6, ({ min }) => `Password must be at least ${min} characters`).required('Password is required'),
})


export default function Login({ navigation: { navigate }}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style= {{flex: 1}}>
            <View style={styles.logoContainer}>
            <Image 
                  style={styles.logo}
                  source={imgLogo}
            />
            </View>
                <Formik
                    validationSchema={loginValidation}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <View>
                                                {touched.email && errors.email && (
                      <Text style={styles.textError}>{errors.email}</Text>
                    )}
        <IEDFormInput
            autoCompleteType="email"
            secureTextEntry={false}
                                autoCorrect={false}
                                returnKeyType="next"
              keyboardType="email-address"
              handleChangedText={handleChange('email')}
              value={values.email}s
            />
        <IEDFormInput
            autoCompleteType="password"
            secureTextEntry={true}
                                autoCorrect={false}
                                returnKeyType="done"
            keyboardType="default"
              handleChangedText={handleChange('password')}
              placeholderText= "Please enter your password"
              value={values.password}
            />
                            <IEDFormButton onSubmit={handleSubmit} TextButton="Submit"/>
          </View>
        )}
        </Formik>
            </View>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: "20%",
        height: "25%",
        marginBottom: 100
    },
    logo: {
        alignSelf: "center",
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
  })
