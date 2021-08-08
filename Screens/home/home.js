import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";
import IEDFormButton from '../../components/IEDFormButton/IEDFormButton';

const imgLogo = require("fulll/assets/images/ied-logo.png");

const Home = ({ route, navigation }) => {

  const [checkMail, setCheckMail] = useState(false);

  useEffect(() => {
    setCheckMail(route.params.email.includes("@inextenso.fr"));
  }, []);
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoContainer}
        source={imgLogo}
      />
      {checkMail ?
        <Text>Hello, dear Collaborator</Text> :
        <Text>Welcome to In Extenso Digital</Text>
      }
      <IEDFormButton
        TextButton="Logout"
        onSubmit={() => {
          navigation.reset({
            routes: [{
              name: "LoginStack"
            }]
          })
        }}
      />
    </View>
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