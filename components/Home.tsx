import * as React from "react";
import { Text, View, Image, ScrollView} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icon from "react-native-feather";
import {
  FlatList,
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  return (
    <GestureHandlerRootView>
      <View className="flex-1 p-6 bg-white">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-3xl">Hello,</Text>
            <Text className="text-4xl font-bold">Uzair👋</Text>
          </View>
          <Image
            source={require("../assets/images/logo.png")}
            className="w-16 h-16 "
          />
        </View>
        <GestureHandlerRootView className="flex-row items-center pt-5">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder=" Search..." />
          </View>
        </GestureHandlerRootView>
        <View className="flex-row space-x-6 pt-5">
          <Image
            source={require("../assets/images/iconss/havo.jpg")}
            className="w-24 h-11"
          />
          <Image
            source={require("../assets/images/iconss/gp.png")}
            className="w-24 h-11 "
          />
          <Image
            source={require("../assets/images/iconss/Kixx.png")}
            className="w-28 h-10 "
          />
        </View>
        <View className="justify-start items-start flex-row space-x-48">
          <Text className="text-2xl font-bold pt-5">Popular</Text>
          {/*CATAGORIES*/}
          <Text
            className="text-base pt-6 text-yellow-600"
            onPress={() => navigation.navigate("Products")}
          >
            View all
          </Text>
        </View>
        {/*Trending*/}
        <View className="flex-row space-x-6 pt-5">
          <FlatList
            data={[
              {
                src: require("../assets/images/gp/2050gp.jpg"),
                name: "GP 20W-50",
                price: "Rs: 5,000",
              },
              {
                src: require("../assets/images/havoline/havo2050.png"),
                name: "Havoline 20W-50",
                price: "Rs: 3,500",
              },
              {
                src: require("../assets/images/kixx/2050.jpg"),
                name: "Kixx 20W-50",
                price: "Rs: 5,300",
              },
            ]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="w-64 h-96 mx-3 bg-gray-100 rounded-3xl flex-1 justify-center items-center pt-10 mt-5">
                <Image source={item.src} className="w-36 h-52 object-contain" />
                <Text className="font-extrabold text-xl mt-5 mr-6">
                  {item.name}
                </Text>
                <Text className="font-bold text-lg text-yellow-600  mt-6">
                  {item.price}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

function Products() {
  return (
    <GestureHandlerRootView className="flex-auto">
      <ScrollView>
        {/*KIXX*/}

        <View className="p-5">
          <Image
            source={require("../assets/images/kixxb.jpeg")}
            className="w-80 h-36 rounded-2xl opacity-95"
          />
        </View>
        <Text className="font-bold text-2xl pl-5">Products .</Text>
        <View>
          <FlatList
            data={[
              {
                src: require("../assets/images/kixx/10-40.jpg"),
                name: "Kixx 10W-40",
                price: "Rs: 4,500",
              },
              {
                src: require("../assets/images/kixx/2050.jpg"),
                name: "Kixx 20W-50",
                price: "Rs: 5,400",
              },
              {
                src: require("../assets/images/kixx/k1040.jpg"),
                name: "Kixx 10W-40P",
                price: "Rs: 5,500",
              },
              {
                src: require("../assets/images/kixx/k030.jpg"),
                name: "Kixx 0W-30",
                price: "Rs: 4,000",
              },
            ]}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View className="flex-col bg-white p-1 rounded-2xl m-3">
                <Image source={item.src} className="h-36 w-40 rounded-2xl " />
                <Text className="font-bold pl-10">{item.name}</Text>
                <Text className="text-yellow-600 font-bold pl-10">
                  {item.price}
                </Text>
              </View>
            )}
          />
        </View>

        {/*Havoline*/}

        <View className="p-5">
          <Image
            source={require("../assets/images/havob.jpg")}
            className="w-80 h-36 rounded-2xl opacity-95"
          />
        </View>
        <Text className="font-bold text-2xl pl-5">Products .</Text>
        <View>
          <FlatList
            data={[
              {
                src: require("../assets/images/havoline/havo2050.png"),
                name: "Havoline 20W-50",
                price: "Rs: 3,700",
              },
              {
                src: require("../assets/images/havoline/havo1030.jpg"),
                name: "Havoline 10W-30",
                price: "Rs: 3,500",
              },
              {
                src: require("../assets/images/havoline/havo540.png"),
                name: "Havoline 5W-40",
                price: "Rs: 3,400",
              },
              {
                src: require("../assets/images/havoline/havo530.png"),
                name: "Havoline 5W-30",
                price: "Rs: 3,350",
              },
            ]}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View className="flex-col bg-white p-4 rounded-2xl m-3">
                <Image source={item.src} className="h-44 w-32" />
                <Text className="font-bold pl-5">{item.name}</Text>
                <Text className="text-yellow-600 font-bold pl-5">
                  {item.price}
                </Text>
              </View>
            )}
          />
        </View>

        {/*Gp*/}

        <View className="p-5">
          <Image
            source={require("../assets/images/gpb.jpg")}
            className="w-80 h-36 rounded-2xl opacity-95"
          />
        </View>
        <Text className="font-bold text-2xl pl-5">Products .</Text>
        <View>
          <FlatList
            data={[
              {
                src: require("../assets/images/gp/2050gp.jpg"),
                name: "GP 20W-50",
                price: "Rs: 4,000",
              },
              {
                src: require("../assets/images/gp/1040gp.jpg"),
                name: "GP 10W-40",
                price: "Rs: 3,800",
              },
              {
                src: require("../assets/images/gp/540gp.jpg"),
                name: "GP 5W-40",
                price: "Rs: 3,800",
              },
              {
                src: require("../assets/images/gp/530gp.jpg"),
                name: "GP 5W-30",
                price: "Rs: 3,950",
              },
              {
                src: require("../assets/images/gp/520gp.jpg"),
                name: "GP 5W-20",
                price: "Rs: 3,750",
              },
            ]}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View className="flex-col bg-white p-4 rounded-2xl m-3">
                <Image source={item.src} className="h-44 w-32" />
                <Text className="font-bold pl-5">{item.name}</Text>
                <Text className="text-yellow-600 font-bold pl-5">
                  {item.price}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No items in Cart !</Text>
      <Icon.ShoppingCart className="text-yellow-600 mt-2" />
    </View>
  );
}

function Profile({navigation}) {
  
  return (
    <GestureHandlerRootView className="bg-white flex-1">
      <View>
        <View className="mt-3 flex-row m-3">
          <Icon.ArrowLeft stroke="black" height="28" width="50" onPress={() => navigation.navigate('Home')}/>
          <Text className="text-xl">       Profile</Text>
          <Icon.Settings
            height="24"
            width="55"
            stroke="black"
            className="mt-1 ml-44"
          />
        </View>
        {/*PICTURE*/}
        <View className="items-center mt-8">
          <Image
            source={require("../assets/images/logo.png")}
            className="h-44 w-44"
          />
          <Text className="text-2xl mt-3">Uzair</Text>
          <Text className="text-gray-700 font-medium">local</Text>
        </View>
        {/*Personal Info*/}
        <View className="ml-4 mt-3 ">
          <Text className="text-base font-bold mb-3 mt-6">Email</Text>
          <View className="px-5 rounded-xl border border-gray-700 p-1 w-80 h-10 ">
            <TextInput placeholder="   Enter email" className="align-middle" />
          </View>
          <Text className="text-base font-bold mb-3 mt-6">Phone Number</Text>
          <View className="px-5 rounded-xl border border-gray-700 p-1 w-80 h-10  ">
            <TextInput placeholder="   Enter phone number" />
          </View>
          <Text className="text-base font-bold mb-3 mt-6">Password</Text>
          <View className="px-5 rounded-xl border border-gray-700 p-1 w-80 h-10">
            <TextInput placeholder="   Enter password" />
          </View>
        </View>
        {/**log  out button*/}
        <View className="mt-8 items-center ">
          <View className="rounded-full border border-gray-700 w-40 h-10 items-center">
            <Text className="text-yellow-600 mt-2 font-bold ">Logout</Text>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon.Home className="text-yellow-600" />,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarButton: () => null,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => <Icon.ShoppingCart className="text-yellow-600" />,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon.User className="text-yellow-600" />,
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}
