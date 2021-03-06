import React, {Component} from 'react';
import Header from './Header.js';
import {StyleSheet, View, ImageBackground, TextInpu, SafeAreaView, ScrollView} from 'react-native';
import { ThemeProvider, Text, Image, Input, Button, Icon} from 'react-native-elements';
import SuccessAnimation from './SuccessAnimation.js';

export default class LendSuccessScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          isEmailValid: true,
          isPasswordValid: true,
          isConfirmationValid: true,
          isSignUp: false,
          baseUrl: 'https://api.lobdev.fusionfabric.cloud/retail-banking/accounts/v1/',
          token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJYTEJpUk5ZMkRvWS0wREVkQVBsMmJxUGpJWXZRUjVqalhBMmczZzczQzYwIn0.eyJqdGkiOiI2MjRmZTZkMy1jY2NkLTQyYTctOTMzZC1jYzdhZDcxYzc1YjUiLCJleHAiOjE1NTc5MTQ0MzcsIm5iZiI6MCwiaWF0IjoxNTU3OTEwODM3LCJpc3MiOiJodHRwczovL2FwaS5sb2JkZXYuZnVzaW9uZmFicmljLmNsb3VkL2xvZ2luL3YxIiwic3ViIjoiY2FmYzIzMDItYjM2My00ZmY2LTk0NGEtMjRmYTVkYjZlYzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiNTlmYjcxOWYtMThhNy00MDJhLWFlMGYtYWZhZjJjYjdkZTMxIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiOWZhYTNiNzctNWY5My00OWZjLWE0ZjgtMDA3YWRlOGZmNzgxIiwiYWNyIjoiMSIsInNjb3BlIjoicmV0YWlsLWJhbmtpbmctYWNjb3VudHMtdjEtNzQ4MGU4MjYtM2UzYy00MzIxLWE4MjAtNDY3YmU5YzUzMzEwIHJldGFpbC1iYW5raW5nLXBheW1lbnRzLXYxLWNhNjg1NDgzLThjMTEtNDc5OS1iZTM5LTY3NGQ0YzFhMTUyMyIsImFwcCI6IjU5ZmI3MTlmLTE4YTctNDAyYS1hZTBmLWFmYWYyY2I3ZGUzMSIsInRlbmFudCI6InNhbmRib3giLCJ1c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC01OWZiNzE5Zi0xOGE3LTQwMmEtYWUwZi1hZmFmMmNiN2RlMzEifQ.Z3m6m4ZHTyq0blMXqsAahQn4DqJ9zlJRd-ApKJnnyl1FwbncKT0Tyw2rcoXtJ5sY6ebqiVatstR1a_bH9O2SkpKN8BJLNvAr4O4oJgpT2qYNn_6JQ8gplssUTF0fwq92FdhKCmgGkxF6Aran63DedSUCgRKkJY1dsvuhBm8fBce7Mz8XWcnIA7-6QBtcOoJqjmiWCSD50sfPiPP8_hTKzzXSEBoAW2lm__8_AG67DSS6r0PzAhQRdTi3Lx73wk6RJOEGtvqveCEr_wZOwQlSN8TEhYz6sNEZdL9ZVuw_YWzjZQrolPgRJSiqo_Gydale3c94jbv-e8qKtjkdOUuiOQ'
        };
      }

      componentDidMount() {

        var curBalance = null;
        var getRequest = new XMLHttpRequest();

        getRequest.withCredentials = true;
        getRequest.open("GET", "https://marepau-6431.restdb.io/rest/data");
        getRequest.setRequestHeader("content-type", "application/json");
        getRequest.setRequestHeader("x-apikey", "	3fd85f237efc9095e9f85488a6d2fed597ed8");
        getRequest.setRequestHeader("cache-control", "no-cache");

        getRequest.send(curBalance);

        getRequest.onreadystatechange = (e) => {
          if (getRequest.readyState !== 4) {
            return;
          }

          if (getRequest.status === 200) {
            var myObj = JSON.parse(getRequest.responseText);
            let i = 0;
            while (i < myObj.length) {
              if (myObj[i]._id === "5def81aefd00a755000130bf"){
                curBalance = parseInt(myObj[i].amount, 10);
              }
              i++;
            }
         
            var data = JSON.stringify({
              "amount": curBalance + 100
            });
    
            var requestUpdate = new XMLHttpRequest();
            requestUpdate.withCredentials = true;
    
          
            requestUpdate.open("PUT", "https://marepau-6431.restdb.io/rest/data/5def81aefd00a755000130bf")
            requestUpdate.setRequestHeader("content-type", "application/json");
            requestUpdate.setRequestHeader("x-apikey", "3fd85f237efc9095e9f85488a6d2fed597ed8");
            requestUpdate.setRequestHeader("cache-control", "no-cache");
    
            requestUpdate.send(data);
    
            requestUpdate.onreadystatechange = (e) => {
              if (requestUpdate.readyState !== 4) {
              }
    
              if (requestUpdate.status === 200) {
                  DeductSelf();
                  } else {
                console.warn('error');
              }
            };



          } else {
            console.warn('error');
          }
        };


        function DeductSelf () {
          var curBalance = null;
        var getRequest = new XMLHttpRequest();

        getRequest.withCredentials = true;

      
        getRequest.open("GET", "https://marepau-6431.restdb.io/rest/data");
        getRequest.setRequestHeader("content-type", "application/json");
        getRequest.setRequestHeader("x-apikey", "	3fd85f237efc9095e9f85488a6d2fed597ed8");
        getRequest.setRequestHeader("cache-control", "no-cache");

        getRequest.send(curBalance);

        getRequest.onreadystatechange = (e) => {
          if (getRequest.readyState !== 4) {
            return;
          }

          if (getRequest.status === 200) {
            var myObj = JSON.parse(getRequest.responseText);
            let i = 0;
            while (i < myObj.length) {
              if (myObj[i]._id === "5def81aefd00a755000130be"){
                curBalance = parseInt(myObj[i].amount, 10);
              }
              i++;
            }
         


            var data = JSON.stringify({
              "amount": curBalance - 100
            });
    
            var requestUpdate = new XMLHttpRequest();
            requestUpdate.withCredentials = true;
    
          
            requestUpdate.open("PUT", "https://marepau-6431.restdb.io/rest/data/5def81aefd00a755000130be")
            requestUpdate.setRequestHeader("content-type", "application/json");
            requestUpdate.setRequestHeader("x-apikey", "3fd85f237efc9095e9f85488a6d2fed597ed8");
            requestUpdate.setRequestHeader("cache-control", "no-cache");
    
            requestUpdate.send(data);
    
            requestUpdate.onreadystatechange = (e) => {
              if (requestUpdate.readyState !== 4) {
              }
    
              if (requestUpdate.status === 200) {
                  } else {
                console.warn('error');
              }
            };
          } else {
            console.warn('error');
          }
        };
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
          >
            <ThemeProvider>
              <View style={{flex: 0, flexDirection: 'column'}}>
                <Header  
                  navigation={this.props.navigation} 
                  previousPage="ExistingCustomerOTP"
                  title={""} 
                  color="white"
                />
              </View>
              <View style={styles.loginBody}>
               
                <View style={{flex: 1, height: 350, width: 350}} >
                      <SuccessAnimation
                        link="lend"
                      />
                </View>
                <Text h4 style={{...styles.elementMargin,flex: 0,textAlign: 'center'}}>
                  Your have {'\n'} successfully lended Juan Dela Cruz!
                </Text>
                <Text h5 style={{...styles.subheading, flex: 1}}>
                    The transaction is processed, you can monitor the status of your loan in the meantime!  
                </Text>
                <Button
                    title={"Done"}
                    buttonStyle={{
                        backgroundColor: '#2DC897',
                        borderRadius: 30,
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    containerStyle={{ flex: 1 ,marginVertical: 0, height: 50, width: 350, marginBottom: '0%' }}
                    underlayColor="transparent"
                    onPress={() => this.props.navigation.navigate('Dashboard')}  
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
      backgroundColor: '#FCFCFF'
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
        backgroundColor: "#FCFCFF"
      },

      elementMargin: {
          marginBottom: 25,
      },

      containerArea: {
        flex: 4,
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
      }


  });