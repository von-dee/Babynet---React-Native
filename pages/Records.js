import React from "react";
import { View, StyleSheet, ImageBackground,Text, TouchableOpacity, Image, TextInput, Alert} from "react-native";
import { Icon, Card, Button,Input } from 'react-native-elements';

import apicalls from '../provider/api_calls';

export default class Records extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      jasper: [{ name: 'jasper', age: 28 }],
      data: {
        ticket_from: this.props.navigation.getParam('from', 'Accra'),
        ticket_destination: this.props.navigation.getParam('destination', 'Kumasi'),
        ticket_fare: '48',
        ticket_actorsid: '1',
        ticket_actorsname: 'customer',
        ticket_actorsorganisation: 'user',
        ticket_busnumber: 'GT 5135',
        ticket_tripdate: '15/04/2019',
        ticket_ordernumber: 'OD231',
        ticket_seatnumber: '23',
      },
      ticket_customername: '',
      ticket_customerphone: '',
      ticket_customermomo: ''
    };

   
  }

  handleSubmit() {

    let data= {
      actions: 'add_ticket',
      ticket_from: this.state.data.ticket_from,
      ticket_destination: this.state.data.ticket_destination,
      ticket_fare: this.state.data.ticket_fare,
      ticket_actorsid: this.state.data.ticket_actorsid,
      ticket_actorsname: this.state.data.ticket_actorsname,
      ticket_actorsorganisation: this.state.data.ticket_actorsorganisation,
      ticket_busnumber: this.state.data.ticket_busnumber,
      ticket_tripdate: this.state.data.ticket_tripdate,
      ticket_ordernumber: this.state.data.ticket_ordernumber,
      ticket_seatnumber: this.state.data.ticket_seatnumber,
      ticket_customername: this.state.ticket_customername,
      ticket_customerphone: this.state.ticket_customerphone,
      ticket_customermomo: this.state.ticket_customermomo
    };

    // console.log("data try ", data.ticket_customername);

    if(data.ticket_customername == "" ){
      this.showalert("Enter passenger name");
    }else if(data.ticket_customerphone == "" ){
      this.showalert("Enter passenger's phone");
    }else if(data.ticket_customermomo == "" ){
      this.showalert("Enter Mobile Money Number");
    }else{
      apicalls.postdata(data);  
      this.props.navigation.navigate('Home')
    }
    

  }

  showalert(msg){
    Alert.alert(
      'Ops',
      msg,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }


  render() {
    return (
      
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 2}}>            
              <Icon iconStyle={[styles.icon,styles.colour_dark]} name='arrow-back' type='ionicons' />
            </View>
            <View style={{flex: 4}} >
              <Text style={styles.camera_text}>Records</Text>
            </View>
            <View style={{flex: 6}} >
            
            </View>
          </View>

          <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 8, flexDirection: 'column'}}>
              <Text style={{fontSize: 12,marginLeft: 10,color: '#8da1aa'}}>Please confirm payment of ticket with Momo.</Text>
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Image source={require('./../assets/turtle.jpg')} style={{flex:8, height: 100, width: 100}} resizeMode="contain"/>
            </View>
          </View>

          <View style={{flex: 4, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 10, flexDirection: 'column'}}>
              <Text style={styles.book_text}>Baby's Records</Text>

              <TextInput style={{height: 45, borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5, fontSize: 14,marginLeft: 10 }}
                onChangeText={(ticket_customername) => this.setState({ticket_customername})} placeholder='Name' value="Kwaku Asante" name='ticket_customername'
                
              />

              <TextInput style={{height: 45, borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5, fontSize: 14,marginLeft: 10 }}
                onChangeText={(ticket_customerphone) => this.setState({ticket_customerphone})} placeholder='Registration Number'  value="RN123AC" name='ticket_customerphone'
                
              />

              <TextInput style={{height: 45, borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5, fontSize: 14,marginLeft: 10 }}
                onChangeText={(text) => this.setState({text})} placeholder='GGDP Status'  value="OK" name='ticket_customeremail'
              />

               <TextInput style={{height: 45, borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5, fontSize: 14,marginLeft: 10 }}
                onChangeText={(text) => this.setState({text})} placeholder='Sex' value="Male" name='ticket_customeremail'
              />
             </View>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
          </View>

          <View style={{flex: 4, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}></View>
            <View style={{flex: 10, flexDirection: 'column'}}>
              <Text style={[styles.book_text,{marginTop: 25}]}>Other Details</Text>

              <TextInput style={{height: 45, borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5, fontSize: 14,marginLeft: 10 }}
                onChangeText={(ticket_customername) => this.setState({ticket_customername})} placeholder='Mothers Name' value="Mavis Asante" name='ticket_customername'
              />
              <TextInput style={{height: 45, borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5, fontSize: 14,marginLeft: 10 }}
                onChangeText={(ticket_customername) => this.setState({ticket_customername})} placeholder='Address (Town | House Number | District)' value="BL2 Hewale Street Accra" name='ticket_customername'
              />
              <TextInput style={{height: 45, borderBottomColor: '#dbdbdb',  borderBottomWidth: 0.5, fontSize: 14,marginLeft: 10 }}
                onChangeText={(ticket_customername) => this.setState({ticket_customername})} placeholder='House Number' value="BL232 AA" name='ticket_customername'
              />
             </View>
            <View style={{flex: 1, flexDirection: 'column'}}></View>       
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}></View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 4, flexDirection: 'column'}}></View>
            <View style={{flex: 4, flexDirection: 'column'}}>
              <Button
                  backgroundColor='#03A9F4'
                  type="outline"
                  buttonStyle={{borderRadius: 0, borderColor: '#dbdbdb', marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Confirm'
                  onPress={() => {
                    this.handleSubmit();
                  }}
                   />
            </View> 
            <View style={{flex: 4, flexDirection: 'column'}}></View>
          </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  camera_text: {
    fontSize: 18,
    marginTop: 18,
  },
  book_text: {
    fontSize: 12,
    marginLeft: 10,
    color: '#4e616b',
  },
  book_text_h1: {
    fontSize: 16,
    marginLeft: 10,
    color: '#8da1aa',
  },
  icon: {
    marginTop: 16,
    marginLeft: 20,
    width: 40,
    height: 40
  },
  colour_white: {
    color: '#ffffff',
  },
  colour_orange: {
    color: '#9b3a61',
  },
  colour_green: {
    color: '#635674',
  },
  iconplus: {
    marginTop: 14,
    marginLeft: 20,
    fontSize: 42,
    width: 70,
    height: 70,
    color: '#10561a',
  },
  h1: {
    flex:1,
    marginTop: 2,
    marginLeft: 10,
    fontSize: 25,
    color: '#000',
  },
  h2: {
    flex:1,
    marginTop: 15,
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  h3: {
    flex:1,
    fontSize: 10,
    marginLeft: 10,
    color: '#000',
  },
  h4: {
    flex:1,
    fontSize: 25,
    marginLeft: 10,
    color: '#000',
    backgroundColor: '#44251d'
  },
  icon_style: {
    marginBottom: 8,
  },
  button_style_me: {
    marginRight: 30,
    marginBottom: 20,
  },
  button_textstyle_me: {
    flex:1,
    fontSize: 15,
    textAlign: 'right',
    marginRight: 10,
    color: '#0e662d',
  }, 
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },
});