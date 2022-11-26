import { View, Text } from "react-native";
import React from "react";
import { colors } from "src/theme/colors";
import { HemovisionLogo } from "../hemovision-logo";
import { Ionicons } from "@expo/vector-icons";

export function Header() {
    return (
        <View
            className="flex-row items-center px-3 justify-between bg-white h-16"
            style={{ borderWidth: 1, borderColor: colors.borderCard }}
        >
            <Ionicons name="search" size={24} color="black" />
            <View className="flex w-48 h-full items-center justify-center">
                <HemovisionLogo size={16} isMinimal={true} />
            </View>
            <Ionicons name="ios-help-circle-outline" size={24} color="black" />
        </View>
    );
}
