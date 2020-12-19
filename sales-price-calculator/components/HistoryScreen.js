import  React,{useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent,FlatList} from 'react-native';
import { DataTable } from 'react-native-paper';
import Constants from 'expo-constants';



 export default function  HistoryScreen ({navigation,route}) {
    const [history2, sethistory2]=useState(route.params.paramkey1)
   const deletehistory=()=>{
 sethistory2([{
         oPrice: "",
         dpercentage:"",
         finalprice: ""
       }])
       
}
 return(
   <View style={styles.container}>
    <View style={styles.titleView}>   
    <Text style={styles.title}> History</Text>
    
    </View>
    <FlatList
        data={history2
        }
        renderItem={({item})=>(<View>
        
        <DataTable>
    <DataTable.Header>
      <DataTable.Title>Price</DataTable.Title>
      <DataTable.Title >Discount</DataTable.Title>
      <DataTable.Title >Final Price</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell> {item.oPrice}</DataTable.Cell>
      <DataTable.Cell >{item.dpercentage}%</DataTable.Cell>
      <DataTable.Cell >{item.finalprice}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
  
        </View>)}
        keyExtractor={(item, index) => item.id}
        
      />
     <View style={styles.buttonframe1}>
        <TouchableOpacity style={styles.appButtonContainer} onPress ={deletehistory} >
          <Text style={styles.appButtonText}> Delete history</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.flex}>
       <View style={styles.buttonframe2}>
        <TouchableOpacity style={styles.appButtonContainer} onPress={()=>navigation.navigate("DCalculation Screen")} >
          <Text style={styles.appButtonText}> Go back</Text>
        </TouchableOpacity>
       
       </View>
        <View style={styles.buttonframe3}>
        <TouchableOpacity style={styles.appButtonContainer} onPress ={()=>navigation.navigate("Start Screen")} >
          <Text style={styles.appButtonText}> Home</Text>
        </TouchableOpacity>
        </View>
        </View>
        
       
   
   </View>
 )
   
 }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeb09',

  },
  titleView:{
    alignItems:'center',
    paddingTop:30,

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
  appButtonContainer1: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  appButtonContainer2: {
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
    paddingRight:100,
    paddingLeft:20,
  },
  buttonframe3: {
    paddingLeft:10,
  },
  
 
 
appButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: 'serif',
  },
 flex:{
   flexDirection:'row',
   paddingTop:10,
 },
 
});


