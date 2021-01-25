import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated } from "react-native";

export default class SkillsBar extends Component {
  state = {
    progressStatus: 0,
  };
  anim = new Animated.Value(0);

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.onAnimate();
  }
  onAnimate = () => {
    this.anim.addListener(({ value }) => {
      this.setState({ progressStatus: parseInt(value, 10) });
    });

    Animated.timing(this.anim, {
      toValue: this.props.toValue,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.inner,
            {
              width: this.state.progressStatus + "%",
              backgroundColor: this.props.color,
            },
          ]}
        />
        <Animated.Text style={styles.label}>
          {this.state.progressStatus}%
        </Animated.Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    padding: 3,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 5,
    justifyContent: "center",
  },
  inner: {
    width: "100%",
    height: 20,
    borderRadius: 15,
  },
  label: {
    fontSize: 20,
    color: "black",
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
});
