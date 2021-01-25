import React, { Component } from "react";
import {
  Text,
  Linking,
  Image,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SocialIcon, Icon } from "react-native-elements";
// import { TouchableOpacity } from "react-native-gesture-handler";

export class ErdalProfil extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.header}>
              <Image
                style={styles.imgErdal}
                source={require("../images/erdal.png")}
              />
              <Text style={styles.name}> Erdal ASLAN </Text>
            </View>

            <View style={styles.main_container}>
              <View style={styles.container}>
                <Text style={styles.aboutMe}>
                  Bonjour, Je m'appelles Erdal ASLAN,{"\n"}
                  Je suis actuellement en formation de Full Stack JavaScript
                  chez simplon.co, je suis à la recherche d'une alternance en
                  contrat de professionnalisation pour une durée de 18 mois.
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.rythme}>
                  - Rentrée : dès aujourd'hui. {"\n"}- Rythme : 3 semaines
                  entreprise / 1 semaine école
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.prepare}>
                  Je prépare un titre RNCP de niveau VI, équivalent Bac+2 -
                  Développeur web et web mobile.
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.project}>
                  Vous pouvez voir mes projets réalisés ci-dessous : Mon CV en
                  ligne :
                  <Text
                    style={styles.linksColor}
                    onPress={() => {
                      Linking.openURL("https://www.erdal-aslan.com/");
                    }}
                  >
                    https://www.erdal-aslan.com/
                  </Text>
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.project}>
                  E-divorce Wordpress :
                  <Text
                    style={styles.linksColor}
                    onPress={() => {
                      Linking.openURL("https://edivorcefr.wpcomstaging.com/");
                    }}
                  >
                    https://edivorcefr.wpcomstaging.com/
                  </Text>
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.project}>
                  Projet pour le cabinet avocat LAC :
                  <Text
                    style={styles.linksColor}
                    onPress={() => {
                      Linking.openURL("http://lincolnartcounsel.com/");
                    }}
                  >
                    http://lincolnartcounsel.com/{" "}
                  </Text>
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.project}>
                  Projet clone Disney+:
                  <Text
                    style={styles.linksColor}
                    onPress={() => {
                      Linking.openURL("https://disneyproject.netlify.app/");
                    }}
                  >
                    https://disneyproject.netlify.app/
                  </Text>
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.project}>
                  Projet panier :
                  <Text
                    style={styles.linksColor}
                    onPress={() => {
                      Linking.openURL("https://panierjs.netlify.app/");
                    }}
                  >
                    https://panierjs.netlify.app/{" "}
                  </Text>
                </Text>
              </View>

              <View style={styles.container}>
                <Text style={styles.project}>
                  Vous pouvez également voir mes autres projets sur mon GitHub
                  sur ce lien
                  <Text
                    style={styles.linksColor}
                    onPress={() => {
                      Linking.openURL("https://github.com/codintag");
                    }}
                  >
                    https://github.com/codintag
                  </Text>
                </Text>
                <View style={styles.container}>
                  <Text style={styles.project}>
                    Vous pouvez cliquez sur le bouton ci-dessous pour aller sur
                    la section Github ou dans le menu de navigation cliquez l'icon.
                  </Text>

                  <View style={styles.btnGithub}>
                    <Button
                      title={"Visiter la section Github"}
                      onPress={() => navigate("Github")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  main_container: {
    paddingLeft: 15,
    marginBottom: 15,
  },

  container: {
    marginTop: 10,
    fontSize: 18,
  },

  header: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  imgErdal: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#000",
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 35,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -5, height: 3 },
    textShadowRadius: 6,
  },
  aboutMe: {
    fontSize: 18,
  },
  rythme: {
    fontSize: 17,
  },
  prepare: {
    fontSize: 17,
  },
  project: {
    fontSize: 16,
  },
  linksColor: {
    color: "#00f",
  },
  btnGithub: {
    marginTop: 15,
    marginBottom: 15,
    width: "60%",
  },
});

export default ErdalProfil;
