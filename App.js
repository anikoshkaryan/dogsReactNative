import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import LoginComponent from './components/auth/login';
import RegisterComponent from './components/auth/register';
import DogsBreedsComponent from './components/dogsBreeds/dogsBreeds';
import DogFoodComponent from './components/dogFood/dogFood';
import DogsBreedsSinglePageComponent from './components/dogsBreedsSinglePage/dogsBreedsSinglePage';
import DogsFoodSinglePageComponent from './components/dogsFoodSinglePage/dogsFoodSinglePage';
import  QuestionsComponent  from './components/questions/questions'



function LoginScreen({ navigation }) {
  return (
      <LoginComponent navigation={navigation}  />
  );
}


function RegisterScreen({ navigation }) {
  return (
      <RegisterComponent navigation={navigation}  />
  );
}

function DogsBreedsScreen({ navigation }) {
    return (
        <DogsBreedsComponent navigation={navigation}  />
    );
}


function DogFoodScreen({ navigation }) {
    return (
        <DogFoodComponent  navigation={navigation}  />
    );
}


function DogsBreedsSinglePageScreen ({ route, navigation }) {

    const {params} = route.params;

    return (
        <DogsBreedsSinglePageComponent dog_info={params}   navigation={navigation}  />
    );
}

function DogsFoodSinglePageScreen ({ route, navigation }) {
    const {params} = route.params;
    return (
        <DogsFoodSinglePageComponent  dogs_food_info={params}  navigation={navigation}  />
    );
}

function QuestionsScreen({ navigation }) {
    return (
        <QuestionsComponent  navigation={navigation}  />
    );
}




export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Questions'
            screenOptions={{
              headerShown: false
            }}

        >


          <Stack.Screen name="Login" component={LoginScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />

          <Stack.Screen name="Register" component={RegisterScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />

            <Stack.Screen name="DogsBreeds" component={DogsBreedsScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="DogFood" component={DogFoodScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="DogsBreedsSinglePage" component={ DogsBreedsSinglePageScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="DogsFoodSinglePage" component={ DogsFoodSinglePageScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="Questions" component={ QuestionsScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />





        </Stack.Navigator>



      </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },



});