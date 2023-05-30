import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GlobalStyles} from './constants/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AllExpenses, ManageExpense, RecentExpenses} from './screens';
import {IconButton} from './components/UI';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      initialRouteName="AllExpenses"
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary100},
        headerTintColor: GlobalStyles.colors.textColor,
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary100,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: GlobalStyles.colors.btnColor,
        headerRight: ({tintColor}) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate('ManageExpense')}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'bookmarks' : 'bookmarks-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'calendar' : 'calendar-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        translucent={true}
        backgroundColor={GlobalStyles.colors.primary100}
      />
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              ...TransitionPresets.RevealFromBottomAndroid,
              ...TransitionPresets.ModalPresentationIOS,
              gestureEnabled: true,
              presentation: 'modal',
              headerStyle: {backgroundColor: GlobalStyles.colors.primary100},
              headerTintColor: GlobalStyles.colors.textColor,
              headerTitleAlign: 'center',
              headerLeft: () => {},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
