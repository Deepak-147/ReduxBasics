/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { buyIceCreamAction } from '../redux';
import { connect } from 'react-redux';

class IceCreamContainer extends Component {
    render() {
        return (
            <SafeAreaView>
                {/* {console.log('props: ' + JSON.stringify(this.props))} */}
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
                  Number of Ice Creams: {this.props.numberOfIceCreams}
                </Text>
                <Button
                  title="Buy Ice Cream"
                  onPress={() => this.props.buyIceCreamAction()}
                />
          </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyIceCreamAction: () => dispatch(buyIceCreamAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer);
