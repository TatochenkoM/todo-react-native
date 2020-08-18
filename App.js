import React from 'react';
import { StyleSheet,View } from 'react-native';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import AddItem from './components/AddItem.js/AddItem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todoData :[
        {label: 'Drink Coffee', important: false, done:false, id: 1},
        {label: 'Drink Coffee', important: false, done:false, id: 2},
        {label: 'Have a lunch', important: false, done:false, id: 3},
        {label: 'Drink Coffee', important: false, done:false, id: 4},
        {label: 'Drink Coffee', important: false, done:false, id: 5},
        {label: 'Have a lunch', important: false, done:false, id: 6},
        {label: 'Drink Coffee', important: false, done:false, id: 7},
        {label: 'Drink Coffee', important: false, done:false, id: 8},
        {label: 'Have a lunch', important: false, done:false, id: 9},
      ],
      term: "",
      filter: 'all', //active //all //done
      maxid: 100
    }
  }
    deleteItem = (id) => {
      this.setState((state) => {
        const idx = state.todoData.findIndex((el)=>el.id===id);
        const newArr = [...state.todoData.slice(0,idx), ...state.todoData.slice(idx+1)];
        return{
          todoData: newArr
        };
      });
    };

    toggleProperty = (arr,id,propName) =>{
      //update object
      const idx = arr.findIndex((el)=>el.id===id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      //newArray
        return[
          ...arr.slice(0,idx),
            newItem,
          ...arr.slice(idx+1)];
    };

    onToggleImportant = (id) => {
      this.setState((state)=>{
        return{
          todoData:this.toggleProperty(state.todoData, id, 'important')
        };
      });
    };

    onToggleDone = (id) => {
      this.setState((state)=>{
          return{
            todoData:this.toggleProperty(state.todoData, id, 'done')
          };
      });
    };

    onSearchChange = (term) => {
      this.setState({term});
    }

    search = (items, term) => {
      if (term.length === 0){
          return items;
        }

      return items.filter((item) => {
        return item.label.toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
      });
    }

    filter = (items, filter) => {
      switch(filter){
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => !item.done)  
        case 'done':
          return items.filter((item) => item.done)
        default:
          return items;
      }
    }
    onFilterChange = (filter) => {
      this.setState({filter});
    }

    addItem = (text) => {
      const newItem = {label:text, important:false, done:false, id: this.state.maxid++};
      this.setState((state)=>{
        const newArr = [...state.todoData,newItem]
        return{
          todoData: newArr
        };
      });
    };



  render() {
    let visibleItems = this.filter(this.search (this.state.todoData, this.state.term), this.state.filter);
    let doneCount = this.state.todoData
                  .filter((element)=>element.done).length;
    let toDoCount = this.state.todoData.length - doneCount;
    return (
      <View style={styles.container}>
        <AppHeader
          toDo={toDoCount} done={doneCount}
        />
        <SearchPanel
          onSearchChange = {this.onSearchChange}
        />
        <ItemStatusFilter
          filter={this.state.filter}
          onFilterChange = {this.onFilterChange}
        />
        <TodoList
          todoData={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem
          onItemAdded={this.addItem}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
