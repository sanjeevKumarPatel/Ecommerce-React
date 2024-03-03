import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
// database name is firebase only nothing else
function HomeScreen() {

 const addData = ()=>{

  firestore()
    .collection('Users')
    .add({
      name: 'Jaan Carlos Lovelace',
      age: 30,
    })
    .then(() => {
      console.log('User added!');
    });

}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Pressable onPress={()=>addData()}>

      <Text>Home Screen</Text>
    </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;