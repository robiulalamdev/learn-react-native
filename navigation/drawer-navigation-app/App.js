import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Home Page
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("Details", {
              name: "Robiul Alam",
              email: "robiulalam@gmail.com",
            })
          }
          style={{
            textAlign: "center",
            width: 120,
            height: 35,
            marginHorizontal: "auto",
            backgroundColor: "blue",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 14,
            }}
          >
            Go To Details
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const DetailsScreen = ({ navigation, route }) => {
  const user = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Details Page
      </Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 15,
        }}
      >
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            textAlign: "center",
            width: 120,
            height: 35,
            marginHorizontal: "auto",
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 14,
            }}
          >
            Back To Home
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const Logo = () => {
  return <Image source={require("./assets/favicon.png")} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Account" component={DetailsScreen} />
        <Drawer.Screen name="Settings" component={DetailsScreen} />
      </Drawer.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Account" component={DetailsScreen} />
        <Tab.Screen name="Settings" component={DetailsScreen} />
      </Tab.Navigator> */}
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome",
            headerTitle: () => <Logo />, // custom Header design as component
            // headerShown: false,
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
