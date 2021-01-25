import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as githubActions from "../redux/actions/githubActions";
import moment from "moment";

const ProjectsList = ({ actions, codintagRepos }) => {

  useEffect(() => {
    actions.getCodintagRepos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
            <View>
                <Text style={styles.title}>Tous mes projets</Text>
            </View>
            {codintagRepos.map((repo) => (
            <ListItem key={repo.id} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.repo_name}>{repo.name}</ListItem.Title>
                <ListItem.Content style={styles.about_project}>
                    <ListItem.Subtitle style={styles.repo_description}>{repo.description}</ListItem.Subtitle>
                    <ListItem.Subtitle style={styles.repo_created}>Crée le : {moment(repo.created_at).format('DD / MM / YYYY')}</ListItem.Subtitle>
                </ListItem.Content>
                
              </ListItem.Content>
              <ListItem.Title>{repo.language}</ListItem.Title>
            </ListItem>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        marginTop: 15,
    },
    repo_name: {
        fontWeight: "bold",
        fontSize: 18,
    },
    about_project: {
        paddingLeft: 6,
    },
    repo_description: {
        fontSize: 16,
    },
    repo_created: {
        fontWeight: "bold",
    },
})

function mapStateToProps(state) {
  return {
    codintagRepos: state.githubReposReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCodintagRepos: bindActionCreators(
        githubActions.getCodintagRepos,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);