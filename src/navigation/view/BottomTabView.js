import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function BottomTabView({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        marginBottom: 10,
      }}
    >
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const icon =
            options.tabBarIcon.icon !== undefined
              ? options.tabBarIcon.icon
              : null;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={icon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: isFocused ? "#FDB0D8" : "white",
                }}
              />

              <Text style={{ color: isFocused ? "#FDB0D8" : "white" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.shadow} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 50,
    backgroundColor: "black",
    flexDirection: "row",
    height: 80,
    width: 300,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    zIndex: 1,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: "grey",
  },
  shadow: {
    backgroundColor: "#151515",
    height: 80,
    width: 300,
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default BottomTabView;
