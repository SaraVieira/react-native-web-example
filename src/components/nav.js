import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

export default () => (
  <View style={styles.nav}>
    <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
      <Text>Home</Text>
    </Link>
    <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
      <Text>Login</Text>
    </Link>
  </View>
)

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
})
