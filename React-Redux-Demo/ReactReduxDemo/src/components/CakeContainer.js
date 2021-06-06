/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { buyCakeAction } from '../redux';
import { connect } from 'react-redux';

class CakeContainer extends Component {
    render() {
        return (
            <SafeAreaView>
                {/* {console.log('props: ' + JSON.stringify(this.props))} */}
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
                  Number of Cakes: {this.props.numberOfCakes}
                </Text>
                <Button
                  title="Buy Cake"
                  onPress={() => this.props.buyCakeAction()}
                />
          </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyCakeAction: () => dispatch(buyCakeAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);
