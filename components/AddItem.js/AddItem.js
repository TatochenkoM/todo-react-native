import React from 'react';
import { TextInput, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            label:'',
        }
        this.onLabelChange = (value) =>{
            this.setState ({
                label: value
            })
        };
        this.onSubmit = (event) => {
            event.preventDefault();
            if (this.state.label != '') {
                this.props.onItemAdded(this.state.label)
            } 
            this.setState({
                label: '',
            });
        }

    };

    render(){
        return(
            <View style={styles.AddItem}>
                <TouchableOpacity onPress={this.onSubmit}>
                    <Image source={{
                                uri: 'https://img.icons8.com/wired/64/000000/enter-key.png/',
                            }}
                            style={{ width: 40, height: 40 }}/>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input}
                    type="text" 
                    onChangeText={value => this.onLabelChange(value)}
                    placeholder="Todo"
                    value = {this.state.label}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AddItem: {
        display:"flex",
        flexDirection: "row-reverse",
        marginBottom: 20,
        width: 90 + '%',
        justifyContent: "space-between"
    },
    input: {
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        padding: 10,
        marginTop: 5,
        width: 90 + '%',
    }
  });
  

export default AddItem;