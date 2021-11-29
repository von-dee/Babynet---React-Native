import React from "react";
import { View, StyleSheet, Text, Image, WebView, ScrollView} from "react-native";
import { Icon } from 'react-native-elements';

import { ListItem } from 'react-native-elements'

  const list = [
      {
        name: 'KNUST HOSPITAL',
        avatar_url: require('./../assets/hospital.png'),
        subtitle: '032 206 0320 | Open 24 hours'
      },
      {
        name: 'Komfo Anokye Teaching Hospital',
        avatar_url: require('./../assets/hospital.png'),
        subtitle: '032 202 2301 | Open 24 hours'
      },
      {
        name: 'True Vine Hospital',
        avatar_url: require('./../assets/hospital.png'),
        subtitle: '054 999 2333 | Open 24 hours'
      },
      {
        name: 'Trinity Health Hospital',
        avatar_url: require('./../assets/hospital.png'),
        subtitle: '026 690 8808 | Open 24 hours'
      },
      {
        name: 'Bomso Clinic',
        avatar_url: require('./../assets/hospital.png'),
        subtitle: '024 417 0095 | Open ⋅ Closes 2:30PM'
      },
      {
        name: 'Church Of Christ Mission Clinic',
        avatar_url: require('./../assets/hospital.png'),
        subtitle: '024 102 1777 | Open ⋅ Closes 2PM'
      },
      {
        name: 'Qualicare Phyto Clinic',
        avatar_url: require('./../assets/hospital.png'),
        subtitle: '024 409 3470 | Open ⋅ Closes 4:30PM'
      }

      
    ]
    

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLightOn: true,
    }

  
   
  }



  render() {
    return (
      <View  style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2}}>            
            <Icon iconStyle={[styles.icon,styles.colour_dark]} name='arrow-back' type='material' />
          </View>
          <View style={{flex: 4}} >
            <Text style={styles.camera_text}>Clinics</Text>
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


        <View style={{flex: 9, flexDirection: 'column'}}>
        
          <ScrollView>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: require('./../assets/hospital.png')  }}
                  title={l.name}
                  subtitle={l.subtitle}
                  onPress={() =>
                    this.props.navigation.navigate('Mapdetail')}
                />
              ))
            }        
          </ScrollView>
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