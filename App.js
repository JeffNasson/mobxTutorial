import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react'



const appState = observable({
  count: 0
})

appState.increment = function (){
  this.count++
}
appState.decrement = function (){
  this.count--
}

@observer export default class App extends Component {
  handleInc=()=>{
   appState.increment()
  }
  handleDec=()=>{
    appState.decrement()
  }

  render() {
    return (
      <View>
        <Text>Counter: {appState.count} </Text>
        <Button title="+" onPress={this.handleInc}></Button>
        <Button title="-" onPress={this.handleDec}></Button>
      </View>
    );
  }
}










// const t = new class Temperature {
//   @observable unit = 'C';
//   @observable temperatureCelsius = 25;

//   @computed get temperatureKelvin(){
//     return this.temperatureCelsius * (9/5) + 32
//   }
//   @computed get temperatureFahreinheit(){
//     return this.temperatureCelsius + 273.15
//   }
//   @computed get temperature(){
//     switch(this.unit){
//       case "K": return this.temperatureKelvin+ "*K"
//       case "F": return this.temperatureFahrenheit+ "*F"
//       case "C": return this.temperatureCelsius+ "*C"
//     }
//   }
// }

// const App = observer(({temperature})=>(
//   <View>
//     <Text>{t.temperature}</Text>
//   </View>
// ))

// export default App



