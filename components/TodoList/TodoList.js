import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import { ScrollView, View, StyleSheet } from 'react-native';

const TodoList = (props) => {
  
   const elements = props.todoData.map((item)=>{
    const {id, ...itemProps} = item;
    return(
        <View key={id} style={styles.elements}>
            <TodoListItem 
                {... itemProps}
                onDeleted={() => props.onDeleted(id)} 
                onToggleImportant={()=> props.onToggleImportant(id)}
                onToggleDone={()=> props.onToggleDone(id)}
                />
        </View>);
   });

    return (
        
        <ScrollView style={styles.listItem}>
            <View style={styles.list}>
                {elements}
            </View> 
        </ScrollView>
        
    );
  };


  const styles = StyleSheet.create({
    funct: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    listItem: {
        width: 100 + '%',
        display: "flex",
        marginBottom: 20
    },
    elements: {
        alignItems: "center"
    }
  });

  export default TodoList;