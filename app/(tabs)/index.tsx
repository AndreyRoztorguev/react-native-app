import { Button, FlatList, Image, StyleSheet, TextInput } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState("");
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.titleContainer}>
    //     <View>
    //       <Text style={styles.item}>wefwef</Text>
    //     </View>
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }>
      <ThemedText style={styles.titleContainer} type="title">
        Todo List
      </ThemedText>
      <TextInput
        style={{ color: "white" }}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholderTextColor={"#fff"}
        placeholder="Create Todo"
      />
      <Button onPress={() => setTodos((prev) => [...prev, value])} title="Create" />
      <ThemedView>
        <SafeAreaProvider>
          <SafeAreaView>
            <FlatList
              data={todos}
              renderItem={({ item }) => <ThemedText>{item}</ThemedText>}
              keyExtractor={(item) => item}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  item: {
    color: "#f0d",
  },
  title: {
    color: "#1D3D47",
  },
});
