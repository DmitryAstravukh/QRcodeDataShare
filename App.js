import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ContactsList, GeneratedQRCode } from './screens';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as styleVariables from './constants/style-variables';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator  initialRouteName='Home'
                          screenOptions={{
                            headerStyle: {
                              backgroundColor: styleVariables.MAIN_COLOR,
                            },
                            headerTintColor: styleVariables.MAIN_TEXT_COLOR_LIGHT,
                            headerTitleStyle: {
                              fontWeight: 'bold'
                            },
                          }}>

          <Stack.Screen name='Home' options={{ title: 'Выберите дейтсвие' }}>
            {props => <Home {...props} />}
          </Stack.Screen>

          <Stack.Screen name='ContactsList' options={{ title: 'Список контактов' }}>
            {props => <ContactsList {...props} />}
          </Stack.Screen> 

          <Stack.Screen name='GeneratedQRCode' options={{ title: 'Сгенерированный QR код' }}>
            {props => <GeneratedQRCode {...props} />}
          </Stack.Screen> 

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;