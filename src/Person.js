import React, { Component } from 'react'
import {
  Alert,
  Platform,
  Text,
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-native'

getColor = gender => {
  if (gender === 'male') return 'blue'
  if (gender === 'female') return 'pink'
  if (gender === 'hermaphrodite') return 'orange'

  return 'grey'
}

const Home = ({ loading, person }) => {
  if (loading) {
    return <Text>Loading</Text>
  }
  return (
    <View style={styles.person}>
      <Text style={styles.text}>
        <Text style={styles.bold}>Name:</Text>
        {person.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Birth Year:</Text> {person.birthYear}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Hair Color:</Text> {person.hairColor}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Mass:</Text> {person.mass}
      </Text>
      {person.species && (
        <Text style={styles.text}>
          <Text style={styles.bold}>species:</Text> {person.species.name}
        </Text>
      )}
      {person.homeworld && (
        <Text style={styles.text}>
          <Text style={styles.bold}>Homeworld:</Text> {person.homeworld.name}
        </Text>
      )}
      <Text style={[styles.bold, styles.text]}>Starships</Text>
      {person.starshipConnection.starships.map(starship => (
        <Text>{starship.name}</Text>
      ))}
      <Text style={[styles.bold, styles.text]}>Films</Text>
      {person.filmConnection.films.map(film => <Text>{film.title}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  person: {
    flexDirection: 'column',
    padding: 20,
    shadowColor: 'rgba(86, 92, 100, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 3,
    marginBottom: 20,
    width: '80%',
    margin: 'auto'
  },
  bold: {
    fontWeight: 'bold'
  },
  text: {
    paddingVertical: 5
  }
})

const GetCharacter = gql`
  query GetCharacter($id: ID) {
    person(id: $id) {
      id
      name
      hairColor
      birthYear
      height
      gender
      mass
      species {
        name
        language
      }
      starshipConnection {
        starships {
          name
        }
      }
      homeworld {
        name
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
`

export default graphql(GetCharacter, {
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  }),
  props: ({ data: { loading, person, error } }) => ({
    loading,
    person,
    error
  })
})(Home)
