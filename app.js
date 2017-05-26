import React from 'react';

import {
    TouchableHighlight,
    Text,
    View,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import { fetchPeopleFromAPI } from './action'

const App = (props) => {
    
    const { people, isFetching } = props.people;
    console.log(props)
    return(
        <View style={styles.container}>
            
            <Text style={styles.text}>Fetch API</Text>
            
            <TouchableHighlight
                style={styles.button}
                onPress = { () => props.getPeople()} 
            >
                <Text style={styles.text}>Fetch</Text>
            </TouchableHighlight>
            
            {isFetching && 
                <Text>Loading ...</Text>
            }
{
            people.length ? (
                people.map((person, i ) => {
                    return <View key={i}>
                    <Text>Name: {person.name}</Text>
                    <Text>Birth Year: {person.birth_year}</Text>
                    
                    </View>
                })
            ):null
}
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:100,
        padding:20,
        
    },
    text:{
        textAlign:'center'
    },
    button:{
        backgroundColor:'red',
        padding:30,
    },
})

function mapStateToProps(state){
    return{
        people: state.people
    }
}

function mapDispatchToProps(dispatch){
    return{
        getPeople: () => dispatch(fetchPeopleFromAPI())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

