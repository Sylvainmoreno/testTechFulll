import React from 'react';
import { SafeAreaView,
    StyleSheet,
    View,
    Image } from "react-native";

const imgLogo = require("fulll/assets/images/ied-logo.png");

const Home = () => {
        return (
            <SafeAreaView style={styles.container}>
                <Image 
                  style={styles.logoContainer}
                  source={imgLogo}
                />
            </SafeAreaView>
        )
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        logoContainer: {
          resizeMode: 'center',
          alignSelf: "center",
          width: "50%",
          height: "50%"
        }
      })
      
export default Home;