/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const TodoList = ({todos, toggleTodo}) => (
  <View style={styles.container}>
    {todos.map(todo =>
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
          }}>
          {todo.text}
        </Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default TodoList;
