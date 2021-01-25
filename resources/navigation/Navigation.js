import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../components/Home";
import ErdalProfil from "../components/ErdalProfil";
import { StyleSheet, Image } from "react-native";
import React from "react";
import CvErdal from "../components/Cv";
import Github from "../components/Github";
import Skills from "../components/Skills";
import PDFCvErdal from "../components/PDFCvErdal";
import ProjectsList from "../components/ProjectsList";

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Page d'accueil",
    },
  },
  ErdalProfil: {
    screen: ErdalProfil,
    navigationOptions: {
      // permet de definir des options sur notre navigation
      title: "Erdal Profil",
    },
  },
});

const CvErdalStackNavigator = createStackNavigator({
  CvErdal: {
    screen: CvErdal,
    navigationOptions: {
      title: "Curriculum Vitae",
    },
  },
  PDFCvErdal: {
    screen: PDFCvErdal,
    navigationOptions: {
      title: "Mon CV en PDF",
    },
  },
});

const GithubStackNavigator = createStackNavigator({
  Github: {
    screen: Github,
    navigationOptions: {
      title: "Github",
    },
  },
  ProjectsList: {
    screen: ProjectsList,
    navigationOptions: {
      title: "Projets sur Github",
    },
  },
});

const SkillsStackNavigator = createStackNavigator({
  Skills: {
    screen: Skills,
    navigationOptions: {
      title: "Skills",
    },
  },
});

// CREATE BOTTOM NAVIGATOR

const InformationsTabNavigator = createBottomTabNavigator(
  {
    Profil: {
      screen: HomeStackNavigator,
      navigationOptions: {
        // ADD ICONS  INSTEAD OF TEXT
        tabBarIcon: () => {
          return (
            <Image source={require("../images/home.png")} style={styles.icon} />
          );
        },
      },
    },

    CvErdal: {
      screen: CvErdalStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image source={require("../images/cv.png")} style={styles.icon} />
          );
        },
      },
    },

    Github: {
      screen: GithubStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require("../images/github3.png")}
              style={styles.icon}
            />
          );
        },
      },
    },

    Skills: {
      screen: SkillsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require("../images/skills.png")}
              style={styles.icon}
            />
          );
        },
      },
    },
  },
  {
    // ADD OPTIONS
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      // ajout d'un backgroundColor aux onglets si activé ou non.
      activeBackgroundColor: "#DDDDDD",
      inactiveBackgroundColor: "#FFFFFF",
    },
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(InformationsTabNavigator);
