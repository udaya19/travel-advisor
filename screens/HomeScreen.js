import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import { HeroImage } from "../assets/index";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold p-4">Go</Text>
        </View>
        <View>
          <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
        </View>
      </View>
      {/* Second section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          lorem ipsum sum decor sit amet constructor elit.
        </Text>
      </View>
      {/* Circle section */}
      <View className="bg-[#00BCC9] w-[400px] h-[400px] rounded-full absolute bottom-36 -right-36"></View>
      <View className="bg-[#E99265] w-[400px] h-[400px] rounded-full absolute -bottom-28 -left-36"></View>
      {/* Image section */}
      <View className="flex-1 relative items-center justify-center ">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full mt-20"
        />
        <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <TouchableOpacity>
            <Animatable.View
              animation="pulse"
              easing="ease-in-out"
              iterationCount="infinite"
              className="w-20 h-20 bg-[#00BCC9] rounded-full justify-center items-center"
            >
              <Text className="text-gray-50 text-[40px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
