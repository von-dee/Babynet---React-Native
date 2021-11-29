import React from "react";
import { View, StyleSheet, ImageBackground,Text, TouchableOpacity, Image, ScrollView} from "react-native";

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import SoundPlayer from 'react-native-sound-player'
 
// import call from 'react-native-phone-call';

import SwitchToggle from 'react-native-switch-toggle';





export default class Articles extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isplaying: false,
      isenglish: true,
      data: {
        title_1: "Healthy Pod",
        body_1:  "Congrats. Your cocoa has not been infected. Cocoa is rich in polyphenols, which have significant health benefits, including reduced inflammation and improved cholesterol levels. However, processing cocoa into chocolate or other products can substantially decrease the polyphenol content.",
        title_2: "The black pod disease",
        body_2:  "The black pod disease is caused by fungus. It is prevalent during the rainy season, that is between April and October. This disease can be chemically treated and some of the fungicides that are commonly used are Agro Commet, Okumanonom, Fungikill, Champion and Sidalco Defender. For the application of Agro Commet, Okumanonom and Fungikill per 15 litres spraying tank, take 75g of each and dilute with a sachet of water.",
        title_3: "Swollen Shoot Disease",
        body_3:  "The cocoa swollen shoot disease is caused by a virus and mealybug is a host for carrying this disease. Chemically and culturally, this disease cannot be cured but it can be managed. There are two main ways of managing this disease. It can be done using preventive measures such as barrier cropping and elimination of infested plants.",
      }


    }


    const users = [
      {
          name: 'brynn',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
    ]
    
   
  }


  // _call() {
    
  //   //handler to make a call_
  //   const args = {
  //     number: '191',
  //     prompt: false,
  //   };
  //   call(args).catch(console.error);

  // };

  _playsound(soundname) {
   
    if(!this.state.isplaying){
     
      try {
        // play the file tone.mp3
        SoundPlayer.playSoundFile(soundname, 'wav')
        // or play from url
        // SoundPlayer.playUrl('http://62.138.24.195/tb/e/cd/mc_hammer_u_can_t_touch_this_mp3_813.mp3')
      } catch (e) {
          console.log(`cannot play the sound file`, e)
      } 

      this.state.isplaying= true;
      console.log("Sound is turned on ", this.state.isplaying);
    }else{
      SoundPlayer.stop();
      this.state.isplaying= false;
      console.log("Sound is turned off");
    }
  }
 
  onPress1 = () => {
      this.setState({ switchOn1: !this.state.switchOn1 });
        if(!this.state.isenglish){
          
          this.setState(
            {data: {
              title_1: "Healthy Pod",
              body_1:  "Congrats. Your cocoa has not been infected.",
              title_2: "The black pod disease",
              body_2:  "The black pod disease is caused by fungus. It is prevalent during the rainy season, that is between April and October. This disease can be chemically treated and some of the fungicides that are commonly used are Agro Commet, Okumanonom, Fungikill, Champion and Sidalco Defender. For the application of Agro Commet, Okumanonom and Fungikill per 15 litres spraying tank, take 75g of each and dilute with a sachet of water.",
              title_3: "Swollen Shoot Disease",
              body_3:  "The cocoa swollen shoot disease is caused by a virus and mealybug is a host for carrying this disease. Chemically and culturally, this disease cannot be cured but it can be managed. There are two main ways of managing this disease. It can be done using preventive measures such as barrier cropping and elimination of infested plants.",
              }
            }
          );
          

          this.state.isenglish= true;
          console.log("Is English", this.state.isenglish);
        }else{
          
          this.setState(
            {data: {
              title_1: "Duaba Pa",
              body_1:  "Wa yɛ lucky, mmoawa biara ɛnkyee wo kookoo no. Wo kookoo no gyina brane. Wo bɛya wo kookoo no ho mfaso pa.",
              title_2: "Black pod Moawamoawa",
              body_2:  "Wo kookoo no aya Black pod mmoawa mmoawa no bi. Na ɛmmom ɛnsuro, kokonɛt wɔ hɔ sɛ yɛbɛboa wo amma wo kookoo no agyina brane. ɛnoa ne sɛ wo bɛkɔ agrokɛmikal a ɛbɛn wo na w'akɔtɔ Agrokomɛt, Okumanonom, Fungikill, Champion ɛne sidalko defɛndar. Fa saa nnuro yi mu biara 75 grams nafa nsuo fra mu kɔpɛm sɛ motobro no bɛyɛ ma. ɛnoa no no w'awie. Black pod mmoawa mmoawa no nyinaa awu. Kae sɛ wo bɛsaa agu wo kookoo no so wɔ nnawɔtwe mmiɛnsa anaa bosome ntɛm.",
              title_3: "Swollen Shoot Moawamoawa",
              body_3:  "Swollen Shoot Mmoawa akye wo kookoo no. Na ɛmmom, saa mmoawa mmoawa yi, aduro biara ni hɔ a yɛ de tu wɔnase. ɛmmom wobɛ tumi asi wɔn ho kwan. Twa kookoo kɔrɔ a mmoawa no akye no no fir kookoo no mu. Wo wie a no wo ahye ne nyinaa. Afei dua ankaa anaa abɛ fa wo kookoo afuo no nyinaa ho. W'awie.",
              }
            }
          );
          

        
          this.state.isenglish= false;
          console.log("Is Twi", this.state.isenglish);
        }
  
    }
  

  render() {
    return (


      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 2}}>            
              <Icon iconStyle={[styles.icon,styles.colour_dark]} name='arrow-back' type='ionicons' />
            </View>
            <View style={{flex: 4}} >
              <Text style={styles.camera_text}>Articles</Text>
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

          

          <View style={{flex: 9, flexDirection: 'row'}}>

            <ScrollView>
              
              <Card
                title='How to prepare ORS'
                image={require('../assets/a1.gif')}>
                <Text style={{marginBottom: 10}}>
                  Pour one sachet of ORS into a bottle add one beer bottle or two mineral bottles full of water and mix well give ORS to the child.
                </Text>
                <Button
                  // icon={<Icon name='code' color='#ffffff' />}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Read More'
                  onPress={() =>
                    this.props.navigation.navigate('Articlesdetail', {
                      title_: 'How to prepare ORS',
                      details_: 'Pour one sachet of ORS into a bottle add one beer bottle or two mineral bottles full of water and mix well give ORS to the child. \n \n Twi \n Hwei ORS no agu kuruwa nnim. Hwɛ ORS adaka no ho, na fa hyɛ nsuo a ahia  sɛ nsuo no aduru nie hia, abɛtumi ama abɔfra no ayan antu. Nu nsuo ne ORS no ma me nfra kamakama, na fa ma abɔfra no.',
                      soundtitle_: 'ors'
                    })}/>

              </Card>

              <Card
                title='Home care for Diarrhorea'
                image={require('../assets/a2.png')}>
                <Text style={{marginBottom: 10}}>
                  Treat diarrhoea with Oral Rehydration salt (ORS) and zinc Give your child as much fluid as possible; if your baby is still breastfeeding, let him/her feed more often use zinc tablets in additiioon to treat diarrhoea at home. 
                </Text>
                <Button
                  // icon={<Icon name='code' color='#ffffff' />}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Read More'
                  onPress={() =>
                    this.props.navigation.navigate('Articlesdetail', {
                      title_: 'Home care for Diarrhorea',
                      details_: 'Treat diarrhoea with Oral Rehydration salt (ORS) and zinc Give your child as much fluid as possible; if your baby is still breastfeeding, let him/her feed more often use zinc tablets in additiioon to treat diarrhoea at home. \n \n Wa yɛ lucky, mmoawa biara ɛnkyee wo kookoo no. Wo kookoo no gyina brane. Wo bɛya wo kookoo no ho mfaso pa.',
                      soundtitle_: 'diarrhorea'
                    })}/>
              </Card>

              <Card title='Home Care For Fever' image={require('../assets/a3.jpg')}>
                <Text style={{marginBottom: 10}}>
                  When your childis sick  with fever,
                  .he/she might have malaria
                  .malaria kills so treatit urgently!
                  .sponge the child with waer at room temperaure(lukewarm), give paracetamolvif available 
                  .see a health worker or a community-based agent immediately for treatment
                  .give the full treatment of Artesunate Armodiaquine (AA)  as instructed by the health worker or CBA.
                </Text>
                <Button
                  // icon={<Icon name='code' color='#ffffff' />}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Read More' 
                  onPress={() =>
                    this.props.navigation.navigate('Articlesdetail', {
                      title_: 'Home Care For Fever',
                      details_: 'When your childis sick  with fever,\n .he/she might have malaria \n  .malaria kills so treatit urgently! \n .sponge the child with waer at room temperaure(lukewarm), give paracetamolvif available \n .see a health worker or a community-based agent immediately for treatment \n .give the full treatment of Artesunate Armodiaquine (AA)  as instructed by the health worker or CBA. \n \n \n Wa yɛ lucky, mmoawa biara ɛnkyee wo kookoo no. Wo kookoo no gyina brane. Wo bɛya wo kookoo no ho mfaso pa.',
                      soundtitle_: 'fever'
                    })}/>

              </Card>
            
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