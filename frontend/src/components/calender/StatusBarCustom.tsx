import React from 'react';
import { View, Text, Image } from 'react-native';

export const StatusBarCustom: React.FC = () => {
  return (
    <View className="bg-white px-4 py-2">
      <View className="flex-row justify-between items-center">
        <Text className="text-black text-base font-medium">9:41</Text>
        <View className="flex-1" />
        <View className="flex-row space-x-2">
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c3bff404cf81d15197d7853be1d3595ba915170d1187489fc3db66b505894125?placeholderIfAbsent=true&apiKey=655f43cc0cb849d89cc96b17a1b931c3',
            }}
            className="w-4 h-4"
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e8e9679a646254e0d6c027c2b8c80b09b3d1f326a55795f5bfc0d79f65689347?placeholderIfAbsent=true&apiKey=655f43cc0cb849d89cc96b17a1b931c3',
            }}
            className="w-4 h-4"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};
