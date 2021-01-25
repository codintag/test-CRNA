import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from '../redux/actions/githubActions';
import { Card, ListItem, Button} from 'react-native-elements'


export class Github extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     infos: [],
        // }
    }

    componentDidMount() {
        this.props.actions.getCodintagInfos();

        // let url = "https://api.github.com/users/codintag";
        // fetch(url).then(response => response.json())
        // .then(result => this.setState({infos: result}))
    }


    render() {
       const infos =  this.props.codintagInfos;
       const navigate = this.props.navigation.navigate;
        return (
        <SafeAreaView  style={styles.container}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
          >
                <Card>
                    <Card.Title style={styles.title}>{infos.login}</Card.Title>
                    <Card.Divider/>
                    <Card.Image style={styles.card_image} source={{uri: "https://avatars3.githubusercontent.com/u/52485088?v=4"}} />
                <View style={styles.card_body}>
                    <Text style={styles.body_text}>Nom :  
                        <Text style={styles.name}> {infos.name}</Text>
                    </Text>
                    <Text style={styles.body_text}>Biographie : {infos.bio}</Text>
                    <Text style={styles.body_text}> - Il y a {infos.followers} personnes qui vous suivent.</Text>
                    <Text style={styles.body_text}> - Vous suivez {infos.following} personnes actuellement.</Text>
                    <Text style={styles.body_text}> - Vous avez {infos.following} dépôts public.</Text>

                    <Card.Divider/>

                    <Text style={styles.body_text}>Si vous souhaitez voir la liste de mes projets, cliquez sur le bouton ci-dessous.</Text>
                    <Button
                        onPress={() => navigate("ProjectsList")}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Voir la liste de mes projets' />
                        
                </View>
                    
                </Card>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,

    },
    card_body: {
        marginTop: 20,
        marginBottom: 10,
    },
    card_image: {
        flex: 1,
        resizeMode: "cover",
        height: 250,
    },
    title: {
        fontSize: 24,
    },
    name: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",

    },
    body_text: {
        marginBottom: 10,
        fontSize: 18,
    }
})


function mapStateToProps(state) {
    return {
        codintagInfos: state.githubInfosReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCodintagInfos: bindActionCreators(githubActions.getCodintagInfos, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);
