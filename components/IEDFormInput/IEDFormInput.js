import React from 'react';
import {
    StyleSheet,
    TextInput } from "react-native";
import propTypes from 'prop-types';


/**
 * IEDFormInput est le Custom Component pour l'input du mail
 * @param {string} placeholderText
 * @param {function} handleChangedText 
 * @returns 
 */

const IEDFormInput = (props) => {
    //destructurer les params
    const {
        placeholderText,
        handleChangedText,
        keyboardType,
        returnKeyType,
        secureTextEntry,
        autoCorrect,
        autoCompleteType
    } = props;

    return (
        <TextInput
            returnKeyType={returnKeyType}
            autoCompleteType={autoCompleteType}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholder={placeholderText}
            style={inputStyles.defaultStyle}
            onChangeText={(text) => handleChangedText(text)}
        />
    )
}

const inputStyles = StyleSheet.create({
    defaultStyle: {
        height: 45,
        width: "80%", 
        alignSelf: "center",
        paddingLeft: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
    }
});

IEDFormInput.propTypes = {
    placeholderText: propTypes.string,
    styles: propTypes.object,
    handleChangedText: propTypes.func
}

IEDFormInput.defaultProps = {
    placeholderText: "Please enter your mail address",
}

export default IEDFormInput;