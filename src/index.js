import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const Test1 = (props) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Test1.propTypes = {
  text: PropTypes.string,
};

Test1.defaultProps = {
  text: 'Hello World!',
};

export default Test1;
