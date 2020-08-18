import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';

class ItemStatusFilter extends React.Component{

    buttons =[
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    render(){
        const buttons = this.buttons.map(({name,label}) => {
            const isActive = this.props.filter === name;
            const cl = isActive ? 'btn-info' : 'btn-outline-secondary';
            return(
                <TouchableOpacity
                    style={isActive ? {
                        padding: 10,
                        borderWidth: 1,
                        borderRadius: 1,
                        borderColor: "black",
                        width: 33.3 + '%',
                        textAlign: "center",
                        backgroundColor: "white",
                    }: styles.button} 
                    key={name}
                    onPress={()=>{this.props.onFilterChange(name)}}>
                            <Text  style={isActive ? {
                        color:"black",
                    }: styles.text}  >{label}</Text>
                </TouchableOpacity>
            );
        });

        return(
            <View style={styles.buttons} >
                {buttons}
            </View> 
                );
    }

}

const styles = StyleSheet.create({
    buttons: {
        display:"flex",
        flexDirection: "row",
        width: 90 + '%',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: "white",
        width: 33.3 + '%',
        backgroundColor: "black",
    },
    text: {
        color: "white",
        textAlign: "center",
    },
   
  });
export default ItemStatusFilter;