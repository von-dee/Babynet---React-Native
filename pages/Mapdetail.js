import React from "react";
import { View, StyleSheet, Text, Image, WebView} from "react-native";
import { Icon } from 'react-native-elements';

import { ListItem } from 'react-native-elements'

  const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      // {
      //   name: 'Chris Jackson',
      //   avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      //   subtitle: 'Vice Chairman'
      // }
    ]
    

export default class Mapdetail extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLightOn: true,
    }

  
   
  }



  render() {
    return (
      <View  style={styles.container}>
          <WebView
            source={{uri: 'https://www.google.com/maps/search/?api=1&query=6.697128, -1.631899'}}
            style={{marginTop: 20}}
          />      
       
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