import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

export default class TodoApp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AddTodo />
        <View>
          <VisibleTodos />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
