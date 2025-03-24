import BottomNavigation from '../navbar/BottomNavigation';
import EventCard from './EventCard';

const UpcomingEventsColeman = () => {
  const events = [
    {
      title: 'Basketball vs 4th Ward',
      postedBy: 'Jimmer F',
      date: '2/24/25 6:30 pm',
      location: 'Provo Stake Center',
    },
    {
      title: 'Multi-Stake Youth Devo',
      postedBy: 'Dieter U.',
      date: '03/01/25 7:00pm',
      location: 'Multi-Stake Building',
    },
    {
      title: 'Ward Bbq',
      postedBy: 'Ally O.',
      date: '05/23/25 12:00pm',
      location: 'Kiwanis Park',
    },
    {
      title: 'Relief Society Activity',
      postedBy: 'Karen A.',
      date: '06/17/25 6:30pm',
      location: 'Location',
    },
    {
      title: 'Ward Family History Night',
      postedBy: 'Caroline J.',
      date: '08/29/25 6:00pm',
      location: 'Smith Building',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-white px-4 py-3 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa4886845ea332bd402f3a0527a4fb94ec52be2123bd1343f0e089d7efd9f20?placeholderIfAbsent=true&apiKey=655f43cc0cb849d89cc96b17a1b931c3"
        alt="Upcoming Events"
        className="w-full h-40 object-cover"
      />

      <div className="flex-1 overflow-y-auto px-4 pt-4">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            postedBy={event.postedBy}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default UpcomingEventsColeman;

// THIS USES TAILWIND & REACT NATIVE WHICH WE AREN'T GOING TO UTILIZE IN THIS PROJECT
// -------------------------------------------------------------------
// import React from 'react';
// import { View, Text, ScrollView, Image } from 'react-native';
// import { StatusBarCustom } from './StatusBarCustom';
// import { EventCard } from './EventCard';
// import { NavigationBar } from './NavigationBar';

// const UpcomingEventsColeman: React.FC = () => {
//   const events = [
//     {
//       title: 'Basketball vs 4th Ward',
//       postedBy: 'Jimmer F',
//       date: '2/24/25 6:30 pm',
//       location: 'Provo Stake Center',
//     },
//     {
//       title: 'Multi-Stake Youth Devo',
//       postedBy: 'Dieter U.',
//       date: '03/01/25 7:00pm',
//       location: 'Multi-Stake Building',
//     },
//     {
//       title: 'Ward Bbq',
//       postedBy: 'Ally O.',
//       date: '05/23/25 12:00pm',
//       location: 'Kiwanis Park',
//     },
//     {
//       title: 'Relief Society Activity',
//       postedBy: 'Karen A.',
//       date: '06/17/25 6:30pm',
//       location: 'Location',
//     },
//     {
//       title: 'Ward Family History Night',
//       postedBy: 'Caroline J.',
//       date: '08/29/25 6:00pm',
//       location: 'Smith Building',
//     },
//   ];

//   return (
//     <View className="flex-1 bg-gray-100">
//       <StatusBarCustom />

//       <View className="bg-white px-4 py-3">
//         <Text className="text-2xl font-bold text-gray-900">
//           Upcoming Events
//         </Text>
//       </View>

//       <Image
//         source={{
//           uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bfa4886845ea332bd402f3a0527a4fb94ec52be2123bd1343f0e089d7efd9f20?placeholderIfAbsent=true&apiKey=655f43cc0cb849d89cc96b17a1b931c3',
//         }}
//         className="w-full h-40"
//         resizeMode="cover"
//       />

//       <ScrollView
//         className="flex-1 px-4 pt-4"
//         showsVerticalScrollIndicator={false}
//       >
//         {events.map((event, index) => (
//           <EventCard
//             key={index}
//             title={event.title}
//             postedBy={event.postedBy}
//             date={event.date}
//             location={event.location}
//           />
//         ))}
//       </ScrollView>

//       <NavigationBar />
//     </View>
//   );
// };

// export default UpcomingEventsColeman;
// -------------------------------------------------------------------
