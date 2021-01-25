import React, { Component } from 'react';
import {
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class Home extends Component {

  _showProfilPage = () => {
    
  }
  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.logo}>
            <Image source={require('../images/sezaam.png')} />
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{'Bienvenue sur l\' application de candidature Sezaam !'}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Demande</Text>
              <Text style={styles.sectionDescription}>
                {'Lorsqu\'on clique sur le bouton, nous souhaitons voir apparaître une page/un écran vous décrivant.' +
                ' Cette page doit être estéthique. Le code doit respecter les standards react / react native. ' +
                'Si vous ajoutez des contextes reactifs c\'est un plus.'}
              </Text>
            </View>
            <View style={{marginTop: 15, marginBottom: 15}}>
              <Button
              title={'Voir ma page'}
              onPress={() => navigate("ErdalProfil")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
  }
    
}

export default Home

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });