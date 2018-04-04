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

const Home = ({ loading, allPeople }) => {
  if (loading) {
    return <Text>Loading</Text>
  }
  return (
    <View
      style={{
        width: '80%',
        margin: 'auto'
      }}
    >
      {allPeople.people &&
        allPeople.people.map(person => (
          <View style={styles.person} key={person.id}>
            <View
              style={{
                backgroundColor: getColor(person.gender),
                width: 50,
                height: 50,
                marginRight: 20
              }}
            />
            <View>
              <Link to={`/person/${person.id}`} underlayColor="#f0f4f7">
                <Text>{person.name}</Text>
              </Link>
              <Text
                style={{
                  fontSize: 10
                }}
              >
                {person.birthYear}
              </Text>
            </View>
          </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    shadowColor: 'rgba(86, 92, 100, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 3,
    marginBottom: 20
  }
})

const GetCharacters = gql`
  query GetCharacters {
    allPeople {
      people {
        id
        name
        gender
        birthYear
      }
    }
  }
`

export default graphql(GetCharacters, {
  props: ({ data: { loading, allPeople, error } }) => ({
    loading,
    allPeople,
    error
  })
})(Home)
