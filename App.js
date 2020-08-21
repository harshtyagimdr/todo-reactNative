import React, { Component } from 'react';
import { View,Text, TextInput, Button, TouchableOpacity } from 'react-native';

class App extends Component{
  state={
    text:"",
    todo:[]
  }
  addTodo=()=>{
    this.setState({
      todo:[...this.state.todo,this.state.text],
      text:""
    })
  }
  deleteTodo=(t)=>{
    var arr=this.state.todo.filter(to=>to!=t);
    this.setState({todo:arr})

  }
  renderTodo=()=>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
        <Text 
        style={styles.todo}
        onPress={()=>this.deleteTodo(t)}
        >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.body}>
    <View style={styles.viewStyle}>
      <Text style={styles.header}>Note App</Text>
      <TextInput
        style={styles.inputStyle}
        value={this.state.text}
        onChangeText={(text)=>this.setState({text:text})}
      />
      <Button
        title="Add Todo"
        color="green"
        onPress={this.addTodo}
      />
      {this.renderTodo()}
    </View>
    </View>
    )
  }
}
const styles={
  body:{
    backgroundColor:"#B2EBF2",
    flex:1,
  },
  viewStyle:{
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    
  },

  inputStyle:{
    height:40,
    borderColor:"green",
    borderWidth:1,
    width:200,
    margin:10
  },
  header:{
    fontSize:30,
    color:"green",
    fontWeight:'bold'
  },
  todo:{
    fontSize:24,
    color:"white",
  }
}
export default App;
