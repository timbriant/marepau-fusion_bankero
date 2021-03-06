import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInpu, SafeAreaView, ScrollView} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button, Icon, Divider} from 'react-native-elements';
import SuccessAnimation from './SuccessAnimation.js';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RemittanceRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            test: "test",
            loading: true
        };
      }
      

      componentDidMount() {
        if (this.state.loading != true){
          this.animation.play(100, 500);
        }
      }

   


    render() {
      const {
        isEmailValid,
        isPasswordValid,
        email,
        password,
      } = this.state;
    
      return (
        <ImageBackground 
            style={styles.container}
            source={require('./assets/Rectangle.png')} 
        >
          <ThemeProvider>
            <View style={{flex: 0, flexDirection: 'column'}}>
              <Header  
                navigation={this.props.navigation} 
                previousPage="InitialLending"
                title={"Loan Request"} 
              />
            </View>
            <View style={styles.loginBody}>
             
              <View style={{position: 'relative',flex: 0, height: 150, width: 150, }}
                    onPress={() => this.props.navigation.navigate('Dashboard')}  
                  >
                  <Image
                    source={require('./assets/juana.jpg')}
                    style={styles.appLogo}
                  />
                  <TouchableOpacity>
                    
                  </TouchableOpacity>
                  <LottieView
                      ref={animation => {
                      this.animation = animation;
                      }}
                      source={require('./assets/10236-reward-badge.json')}
                      style={{bottom: 30, left: 60, width: 75, height: 75, }}
                  />
                 
              </View>
              <Text h4 style={{...styles.elementMargin,flex: 0, marginBottom: 10}}>
                     {'Juana Dela Cruz'}
              </Text>
          
              
              <View style={{flex: 0, height: 50, width: 150,  marginBottom: 50}} >
                    <SuccessAnimation
                      link="rating"
                    />
              </View>
              <SafeAreaView style={styles.containerArea}>
                  <ScrollView style={styles.scrollView}>
                  <Input
                  label="Amount to Cash in"
                  value="$ 100"
                          rightIcon={{ 
                              type: 'font-awesome', 
                              name: 'check-circle',
                              color: '#2DC897'
                          }}
                          containerStyle={{...styles.elementMargin, flex: 0, width: 325 , justifyContent: 'center',backgroundColor:"white",}}
                          inputContainerStyle={{ borderRadius:10,backgroundColor:'white',borderBottomColor:'white',}}
                  />  
                
                  <Divider style={{  height: 2 }} />
              
                
                  </ScrollView>
              </SafeAreaView>
              <Button
                  title={"Send Encashment Request"}
                  buttonStyle={{
                      backgroundColor: '#2DC897',
                      borderRadius: 30,
                  }}
                  titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                  containerStyle={{ flex: 0.3 ,marginVertical: 0, height: 50, width: 350, marginBottom: '0%' }}
                  underlayColor="transparent"
                  onPress={() => this.props.navigation.navigate('LendSuccess')}  
              />  
              <Button
                  title={"Cancel"}
                  buttonStyle={{
                      backgroundColor: '#EB658D',
                      borderRadius: 30,
                  }}
                  titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                  containerStyle={{ flex: 0,marginVertical: 0, height: 50, width: 350, marginBottom: '0%' }}
                  underlayColor="transparent"
                  onPress={() => this.props.navigation.navigate('InitialLending')}  
              />  
            </View>
          </ThemeProvider>
        </ImageBackground>
      );
     }
      }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    },

    loginBody: {
        paddingTop: 0,
        paddingLeft: "10%",
        paddingRight: "10%",
        flex: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        // backgroundColor: "white",
        backgroundColor: "#FCFCFF",
      },

      elementMargin: {
          marginBottom: 25,
      },

      containerArea: {
        flex: 1,
        marginBottom: 30
      },
      scrollView: {
        marginHorizontal: 0,
      },
      text: {
        fontSize: 15,
        color: "#606060"
      },
      subheading: {
        fontSize: 16,
        color: "#606060",
        textAlign: 'center'
      },
      appLogo: {
        width: 150,
        height: 150,
      },


  });