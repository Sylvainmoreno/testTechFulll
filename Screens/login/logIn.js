import React from "react";
import { View, Text, Button } from "react-native";


export default function Login({ navigation: { navigate }}) {
    return (
        <View>
            <Text>"ALOOOOOOOLLLL"</Text>
            <Button
                title="Go to Details"
                onPress={() => navigate('HomeStack')}
            />
        </View>
    )
}
