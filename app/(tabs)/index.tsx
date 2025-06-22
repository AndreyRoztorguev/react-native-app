import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleCreateButtonPress = () => {
    setTodos((prev) => [...prev, value]);
    setValue("");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Todos</Text>
          <FlatList
            data={todos}
            renderItem={({ item, index }) => (
              <Text style={styles.item}>
                {index + 1}. {item}
              </Text>
            )}
            keyExtractor={(item) => item}
          />
        </View>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholderTextColor={"#aaa"}
          placeholder="Create Todo"
        />
        <Button onPress={handleCreateButtonPress} title="Create" color={"gray"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    textAlign: "center",
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    marginBlockStart: 20,
    marginBlockEnd: 20,
  },
  item: {
    fontSize: 16,
    color: "#f0d",
  },
});
