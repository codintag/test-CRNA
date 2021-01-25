import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CvErdal = (props) => {
    const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>
          Pour visualiser mon Currriculum Vitae cliquez sur le bouton
          ci-dessous.
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          title={"Voir mon CV"}
          onPress={() => navigate("PDFCvErdal")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },

  title_container: {
    width: "90%",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: "50%",
  },
});

export default CvErdal;
