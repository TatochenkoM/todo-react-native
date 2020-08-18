import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class TodoListItem extends React.Component{

  render(){
    return (
        <ScrollView style={styles.list}>
            <TouchableOpacity  onPress={this.props.onToggleDone}> 
                <Text  style={this.props.important? {
                    color:'red',
                    fontSize: 24,
                    padding: 5,
                    margin:5,
                    borderWidth: 1,
                    borderColor: "red",
                    borderRadius: 6,
                    textAlign:"center"} 
                    : styles.text  }>
                    {this.props.label}
                    {this.props.done? <Image
                    source={{
                        uri:
                        'https://img.icons8.com/doodle/48/000000/checkmark.png',
                    }}
                    style={{ width: 20, height: 20 }}
                /> : ''}
                </Text>
            </TouchableOpacity>
                <View style={styles.funct}>
                    <TouchableOpacity  onPress={this.props.onDeleted}>
                        <Image
                            source={{
                                uri: 'https://img.icons8.com/android/24/000000/trash.png',
                            }}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>    
                    <TouchableOpacity  onPress={this.props.onToggleImportant}>
                        <Image
                            source={{
                                uri: 'https://img.icons8.com/ios-filled/50/000000/important-book.png',
                            }}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    funct: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        padding: 5,
        margin:5,
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        textAlign:"center",
    },
    list: {
        width: 90 +'%',
    }
  });
  

  export default TodoListItem;