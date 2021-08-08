import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native";
    
const IEDFormButton = (props) => {
    const { TextButton, onSubmit } = props;
    return (
        <TouchableOpacity
            isEnable={true}
            style={buttonStyles.buttonContainer}
            onPress={onSubmit}
        >
            <Text
                style={buttonStyles.textStyle}>
                {TextButton}
            </Text>
        </TouchableOpacity>
    )
}

const buttonStyles = StyleSheet.create({
    buttonContainer: {
        width: "80%",
        height: 60,
        alignSelf: "center",
        marginTop: "20%",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#86bc25",
        backgroundColor: "#86bc25"
    },
    textStyle: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default IEDFormButton;