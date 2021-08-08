import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, Keyboard} from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup'
import IEDFormInput from '../../components/IEDFormInput/IEDFormInput'
import IEDFormButton from "../../components/IEDFormButton/IEDFormButton";

const imgLogo = require("fulll/assets/images/ied-logo.png");

//handle form errors
const loginValidation = yup.object()
    .shape({
        email: yup.string()
        .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup.string()
            .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                "Password must have at least 1 special character and 1 number.")
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

export default function Login({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={imgLogo}
                    />
                </View>
                <Formik
                    validationSchema={loginValidation}
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        navigation.navigate("HomeStack", {
                            screen: "Home",
                            params: {
                                email: values.email,
                                password: values.password
                            }
                        })
                    }}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <View>
                            <IEDFormInput
                                autoCompleteType="email"
                                secureTextEntry={false}
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType="email-address"
                                handleChangedText={handleChange('email')}
                                value={values.email}
                            />
                            {touched.email && errors.email && (
                                <Text style={styles.errorsValidation}>
                                    {errors.email}
                                </Text>
                            )}
                            <IEDFormInput
                                autoCompleteType="password"
                                secureTextEntry={true}
                                autoCorrect={false}
                                returnKeyType="done"
                                keyboardType="default"
                                handleChangedText={handleChange('password')}
                                placeholderText="Please enter your password"
                                value={values.password}
                            />
                            {touched.password && errors.password && (
                                <Text style={styles.errorsValidation}>
                                    {errors.password}
                                </Text>
                            )}
                            <IEDFormButton
                                onSubmit={handleSubmit}
                                TextButton="Submit"
                            />
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
    errorsValidation: {
        paddingHorizontal: 30,
        textAlign: "center",
        alignSelf: "center",
        fontSize: 14,
        color: "#86bc25",
    }
})
