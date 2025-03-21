import React from 'react';
import { View, Text, Image } from 'react-native';

interface EventCardProps {
  title: string;
  postedBy?: string;
  date: string;
  location: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  postedBy,
  date,
  location,
}) => {
  return (
    <View className="mb-4 bg-white rounded-lg shadow-md p-4">
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <View>
            <Text className="text-lg font-semibold text-gray-800">{title}</Text>
            {postedBy && (
              <Text className="text-sm text-gray-600 mt-1">
                Posted by "{postedBy}"
              </Text>
            )}
          </View>
        </View>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/577c66991a475ece4ca2f3df8dbe1fa7d5455c103c937510ef81bb8bf1742ea8?placeholderIfAbsent=true&apiKey=655f43cc0cb849d89cc96b17a1b931c3',
          }}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </View>

      <View className="h-[1px] bg-gray-200 my-3" />

      <View>
        <Text className="text-gray-700">{date}</Text>
      </View>

      <View className="h-[1px] bg-gray-200 my-3" />

      <View>
        <Text className="text-gray-700">{location}</Text>
      </View>
    </View>
  );
};
