import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SkillsBar from "../components/toolbox/Progressbar";

export class Skills extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <View>
            <Text style={styles.title}>Mes compétences</Text>
          </View>
          <View>
            <Text style={styles.langages}>HTML / CSS / SASS :</Text>
            <SkillsBar toValue={80} color={langageColor.html} />
          </View>
          <View>
            <Text style={styles.langages}>JavaScript :</Text>
            <SkillsBar toValue={70} color={langageColor.js} />
          </View>
          <View>
            <Text style={styles.langages}>Nodejs / Express :</Text>
            <SkillsBar toValue={60} color={langageColor.nodejs} />
          </View>
          <View>
            <Text style={styles.langages}>React / Redux :</Text>
            <SkillsBar toValue={60} color={langageColor.react} />
          </View>
          <View>
            <Text style={styles.langages}>React Native :</Text>
            <SkillsBar toValue={50} color={langageColor.reactNative} />
          </View>
          <View>
            <Text style={styles.langages}>Angular :</Text>
            <SkillsBar toValue={30} color={langageColor.angular} />
          </View>
          <View>
            <Text style={styles.langages}>PHP :</Text>
            <SkillsBar toValue={60} color={langageColor.php} />
          </View>
          <View>
            <Text style={styles.langages}>MYSQL :</Text>
            <SkillsBar toValue={70} color={langageColor.mysql} />
          </View>
        </View>
      </View>
    );
  }
}

export default Skills;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  inner: {
    width: "80%",
    flex:1,
    justifyContent: "space-around",
    // borderColor: "black",
    // borderStyle: "solid",
    // borderWidth: 3
  },

  skillContainer: {
  },

  langages: {
    textAlign: "left",
    fontWeight: "bold",
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
});

const langageColor = {
  html: "#f06529",
  js: "#f0db4f",
  nodejs: "#68a063",
  react: "#61DBFB",
  reactNative: "#61DBFB",
  angular: "#dd1b16",
  php: "#474A8A",
  mysql: "#F29111",
};
