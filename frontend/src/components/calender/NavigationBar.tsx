import React from 'react';
import { View, Image } from 'react-native';

export const NavigationBar: React.FC = () => {
  return (
    <View className="bg-white py-4 px-6 border-t border-gray-200">
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cf8a7df84929d7840154a0d5cc7f513237de0b6b79a9fbbb0d6525b31f582b1?placeholderIfAbsent=true&apiKey=655f43cc0cb849d89cc96b17a1b931c3',
        }}
        className="w-full h-12"
        resizeMode="contain"
      />
    </View>
  );
};
