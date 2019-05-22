/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,ScrollView,StatusBar,TextInput,TouchableOpacity,Button} from 'react-native';


export default class App extends Component<Props> {

state = {
  email: '',
  password: ''
}

  handleEmail = (text) => {
    this.setState({ email: text})
  }

  handlePassword = (text) =>{
    this.setState = ({ password:text })
  }

  login = (email,password) =>{

  }

  handleRegistration()
  {
    this.props.navigation.navigate('SIGNUP')
  }

 constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

  forgotPassword()
  {
    this.props.navigation.navigate('FORGOTPASS')
  }


  render() {
    return (
      <View style={{flex: 1}}>
      <StatusBar
     backgroundColor="blue"
     barStyle="light-content"/>

       <View
          style={{
            flex: 0.0,
            alignItems: 'center',
            justifyContent: 'center',
          }} ></View>
      <View style={styles.viewBGImg}>

        <ImageBackground

          resizeMode={'stretch'} // or cover
            style={styles.backgroundImage} // must be passed from the parent, the number may vary depending upon your screen size
            source={require('../src/images/loginBg.jpg')}>

             <TouchableOpacity>
                    <Text style={styles.textSkip}>Skip</Text>
              </TouchableOpacity>
              <ScrollView style={{width:'100%',flex:1}}>
               <Image
                   style={styles.logo}
                    source={require('../src/images/logo.png')}
                  />
                  <Text style={styles.logoText}>Coffee House</Text>


                  
                    <View style={{marginTop:'10%',flex:1,flexDirection:'column'}}>
                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Email"
                            placeholderTextColor = "#ffffff"
                            autoCapitalize = "none"
                            onChangeText = {this.handleEmail}/>

                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Password"
                            placeholderTextColor = "#ffffff"
                            autoCapitalize = "none"
                            onChangeText = {this.handlePassword}/>

                         <TouchableOpacity
                            style = {styles.submit}
                              onPress = {() => this.login(this.state.email, this.state.password)}>
                             <Text style = {styles.submitButton}>SignIn</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style = {styles.btnForgetPass}
                              onPress = {() => this.forgotPassword()}>
                             <Text style = {styles.txtForgetPass}>Forgot Password</Text>
                          </TouchableOpacity>

                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
                            <Text style={styles.textSignUp} >Signup your Account ?</Text>
                            <TouchableOpacity
                                onPress = {() => this.handleRegistration()} >
                                <Text style={styles.textSignUp}> Signup</Text>
                            </TouchableOpacity>
                            </View>

                        <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'center'}}>

                            <TouchableOpacity
                              onPress = {()=>this.login(this.state.email,this.state.password)}>
                                <View style={styles.viewSocial}>
                                  <Image style={styles.iconSocial}source={require('../src/images/FB.png')}/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                               onPress = {()=>this.login(this.state.email,this.state.password)}>
                                  <View style={styles.viewSocial}>
                                    <Image style={styles.iconSocial}source={require('../src/images/GP.png')}/>
                                  </View>
                              </TouchableOpacity>

                              <TouchableOpacity
                                onPress = {()=>this.login(this.state.email,this.state.password)}>
                                    <View style={styles.viewSocial}>
                                      <Image style={styles.iconSocial}source={require('../src/images/INSTA.png')}/>
                                    </View>
                              </TouchableOpacity>

                        </View>
                    </View>

                    
                  </ScrollView>
                               
          </ImageBackground>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submit:{
    margin: 15,
    height: '32%',
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center'
  },
  submitButton:{
      color :'red',
      fontSize: 22
  },
  iconSocial:{
    width:'50%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'contain',
  },
  viewSocial:{
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    margin:10
  },
  input: {
      margin: 15,
      height: '32%',
      borderColor: '#ffffff',
      paddingLeft: 10,
      fontSize: 20,
      color:'#ffffff',
      borderWidth: 2,
      borderRadius: 5
   },
   backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        opacity:0.85,
        height:'100%',
        width:'100%'
    },
    viewBGImg:{
      flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
    },
    btnForgetPass:{
      fontSize:22,
      marginTop:5,
      alignItems:'center',
    },
    textSkip:{
      marginLeft:25,
      marginTop:50,
      fontWeight:'bold',
      color:'white',
      width:"50%"
    },
    textSignUp:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
    },
    txtForgetPass:{
      color:'white',
      fontWeight:'bold',
      fontSize:20
    },
    logo:{  
        marginTop: '1%',
        alignSelf: 'center',
        height: '35%',
        width: '35%',
        resizeMode:'contain',
    },
    logoText:{
      marginTop: 2,
      alignSelf: 'center',
      color:'white',
      fontSize:25,
      fontWeight:'bold',
      fontFamily:'Bradley Hand'
    },
    viewAlpha:{
      flex: 1,
      backgroundColor: 'black',
      opacity: 0.35
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
});
