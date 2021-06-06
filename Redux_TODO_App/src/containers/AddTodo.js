/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = (text) => {
    this.props.dispatch(addTodo(text));
    this.setState({text: ''});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          placeholder="Eg. Reply to emails."
          style={styles.textInputStyle}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.buttonContainer}>
            <Icon name="pluscircleo" style={styles.buttonStyle} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5,
  },
  buttonContainer: {
    height: 50,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    fontSize: 25,
    color: '#DE9595',
    padding: 10,
  },
});
