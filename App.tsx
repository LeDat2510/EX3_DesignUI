import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {

  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    Alert.alert(`Đăng nhập thành công với Username: ${username} và Password: ${password}`)
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('./images/background.jpg')} style={{ flex: 1 }}>
        <View style={styles.layoutStyle}>
          <Image source={require('./images/logo.jpg')} style={styles.imgStyle} />
          <Text style={styles.textStyle}>REGISTER</Text>
          <TextInput placeholder='USERNAME' style={styles.textInputStyle} value={username} onChangeText={SetUserName}>
          </TextInput>
          <TextInput placeholder='PASSWORD' style={styles.textInputStyle} value={password} onChangeText={setPassword}>
          </TextInput>
          <Pressable
            style={styles.btnStyle}
            onPress={handlePress}
          >
            <Text style={{ color: 'white' }}>LOGIN</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  layoutStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  imgStyle: {
    height: '20%',
    width: '90%'
  },

  textStyle: {
    alignSelf: 'flex-end',
    marginRight: 22,
    color: 'black',
    fontStyle: 'italic',
  },

  textInputStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '90%',
    paddingLeft: 10,
    color: 'white'
  },

  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f57771',
    height: '5%',
    width: '90%'
  }
});

export default App;
