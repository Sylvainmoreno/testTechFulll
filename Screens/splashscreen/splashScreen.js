import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
} from 'react-native'
const imgLogo = require("fulll/assets/images/ied-logo.png");

const Splashscreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Image 
            style={styles.logoContainer}
            source={imgLogo}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
  },
  logoContainer: {
    width: "20%",
    height: "20%"
  }
})

export default Splashscreen;
