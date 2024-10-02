import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../components/Home"

const StyledImageBackground = styled(ImageBackground);

const Stack = createNativeStackNavigator();

const IntroScreen = ({ navigation }) => {
  return (
    <StyledImageBackground source={require("../assets/images/main.jpeg")} className="flex-1">
      <View className="flex-1 justify-end p-9 mb-36 mr-8">
        <Text className="text-white font-extrabold text-3xl text-left">Drive Smoother, Go Further with Quality Oil. </Text>
        <Text className="text-white text-left text-base font-thin">Ensuring every mile is smooth, efficient, and reliable. </Text>
      </View>
      <View className="absolute bottom-20 left-72">
        <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
          <AntDesign name="rightsquare" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </StyledImageBackground>
  );
};

const App = () => {
  return (
    
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="MainApp" component={Home} />
      </Stack.Navigator>
   
  );
};

export default App;
