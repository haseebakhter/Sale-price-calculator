import  React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,TouchableHighlight,Modal} from 'react-native';
import Constants from 'expo-constants';
export default function DCalculationScreen({navigation,route}){
  const [oPrice ,setoprice]=useState(0);
  const [dpercentage, setdpercentage]=useState(0);
  const [save , setsave]=useState(0);
  const [finalPrice ,setfinalPrice]=useState(0);
  const [history , sethistory]=useState([{
         oPrice:"",
         dpercentage:"",
         finalprice:""

       }])
 
  function calculate(){
    if(dpercentage<100){
       var price=oPrice *(dpercentage/100);
      setsave(price);
       var x=(oPrice-price);
       setfinalPrice(x);
    }
    else {
      alert("Enter discount percentage below 100")
    }
   
  }
   const  saveCalculations=()=>{
    sethistory([...history,{
         oPrice:oPrice,
         dpercentage:dpercentage,
         finalprice:finalPrice
        
    }])
  }
  const display=()=>{
    console.log(history)
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
          <Text style={styles.title}> Discount Calculator  </Text>
      </View>
      <View style={styles.inputField1}>
         <TextInput style={styles.textInput} placeholder='Enter Original Price' keyboardType='numeric' keyboardAppearance='dark' onChangeText={(text) => setoprice(text)}>
      
        
        </TextInput>
    
      </View>
       <View style={styles.inputField2}>
         <TextInput style={styles.textInput} placeholder='Enter Discount Percentage' 
         onChangeText={(text) => setdpercentage(text)} keyboardType='numeric' keyboardAppearance='dark' >
         
        </TextInput>
      </View>
      <View style={styles.displayView}>
         <Text style={styles.displayText}> You Save:{save} Rs  </Text>
      </View>
      <View style={styles.displayView1}>
         <Text style={styles.displayText}> Final price:{finalPrice} Rs  </Text>
      </View>
      
       <View style={styles.buttonframe1}>
        <TouchableOpacity style={styles.appButtonContainer} onPress={calculate}>
          <Text style={styles.appButtonText}> Calculate Discount</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.buttonframe2}> 
       <TouchableOpacity style={styles.appButtonContainer} onPress={saveCalculations}>
          <Text style={styles.appButtonText}> Save Calculations</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.buttonframe2}> 
       <TouchableOpacity style={styles.appButtonContainer} onPress={()=>navigation.navigate("History Screen",{paramkey1:history})} >
          <Text style={styles.appButtonText}>View History</Text>
        </TouchableOpacity>
       </View>
        
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebeb09',

  },
  titleView:{
    alignItems:'center',
    paddingTop:70,

  },
  title:{
   fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 26,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
    fontFamily: 'serif',
   
  },
  inputField1:{
     paddingTop:20,
  },
   inputField2:{
     paddingTop:20,
  },
  
  textInput:{
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
   fontFamily: 'serif',
    fontStyle:'italic',
  },
  displayView:{
    paddingTop:20,
  },
   displayView1:{
    paddingTop:10,
  },
  displayText:{
    flexDirection:'column',
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
    fontFamily: 'serif',
    fontStyle:'italic',
  },
   appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
 
    buttonframe1: {
    paddingTop:20,
  },
  buttonframe2: {
    paddingTop:10,
  },
  
 
 
appButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: 'serif',
  },

 
});


