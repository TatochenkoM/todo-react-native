import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

class SearchPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };
  }

    onSearchChange = (value) => {
        const term = value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

  render(){
    return (
      <TextInput 
        style={styles.container}
        type='text'
        placeholder='Type here to search'
        value={this.state.term}
        onChangeText={value => this.onSearchChange(value)}/>
      );}
  };

  const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        width: 90 + '%'
    },
  });

  export default SearchPanel;