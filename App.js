import * as React from 'react'

import Home from './src/Home'
import Login from './src/Login'
import Person from './src/Person'
import Nav from './src/components/nav'

import { NativeRouter, Route } from 'react-router-native'; // eslint-disable-line
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { withClientState } from 'apollo-link-state'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

const cache = new InMemoryCache()

const defaults = {}

const stateLink = withClientState({ cache, defaults })

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: 'https://swapi-graphql-api.now.sh/'
    })
  ]),
  cache
})

export default () => (
  <NativeRouter>
    <ApolloProvider client={client}>
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          backgroundColor: '#FAFAFA',
          width: '100%',
          minHeight: '100%',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/person/:id" component={Person} />
      </View>
    </ApolloProvider>
  </NativeRouter>
)
