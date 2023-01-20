import { View, Text, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { Habit, day_size } from '../components/Habit';
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const amountToFill = 18 * 5 - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16 text-white">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => {
          return (
            <Text
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: day_size }}
            >
              {weekDay}
            </Text>
          );
        })}
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => {
            return <Habit key={date.toString()} />;
          })}

          {amountToFill > 0 &&
            Array.from({ length: amountToFill }).map((_, i) => {
              return (
                <View
                  key={i}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: day_size, height: day_size }}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
