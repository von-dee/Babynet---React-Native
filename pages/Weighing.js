import React from "react";
import { View, StyleSheet, Text, Image, WebView, ScrollView, Dimensions} from "react-native";
import { Icon, ListItem } from 'react-native-elements';

import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 43 ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
      strokeWidth: 2 
    }]
  }

  const list = [
    {
      name: 'KNUST HOSPITAL',
      avatar_url: require('./../assets/hospital.png'),
      subtitle: 'weight : 19 | Open 24 hours'
    },
    {
      name: 'Komfo Anokye Teaching Hospital',
      avatar_url: require('./../assets/hospital.png'),
      subtitle: 'weight : 25 | Open 24 hours'
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
            <Text style={styles.camera_text}>Weighing</Text>
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

        <View style={{flex: 5, flexDirection: 'row'}}>
            <LineChart
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                      data: [
                       5.6,
                       6.7,
                       7.4,
                       8.4,
                       9.0,
                       9.7,
                       10.2,
                       11.0,
                       11.3,
                       11.8,
                       12.0                    
                      ]
                    }]
                  }}
                  width={335} // from react-native
                  height={220}
                  yAxisLabel={'kg'}
                  chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    margin: 10
                  }}
            />
        </View>


        <View style={{flex: 4, flexDirection: 'column'}}>
            <Text style={{fontSize: 15,marginLeft: 20,color: '#8da1aa'}}>History</Text>
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