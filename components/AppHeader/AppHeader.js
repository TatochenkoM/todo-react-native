import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = (props) => {
    return (
        <View>
            <Text style={styles.header}>My Todo List</Text>
            <Text style={styles.status}>{props.toDo} more to do, {props.done} done</Text>
        </View>
    );
  };


  const styles = StyleSheet.create({
    header: {
        fontSize: 48,
        fontWeight: "bold",
        marginTop: 10 +'%',
        marginBottom: 10,
    },
    status: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
    }
  });

 export default AppHeader;