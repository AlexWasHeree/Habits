import { TouchableOpacity, Dimensions } from 'react-native';

const week_days = 7;
const screen_horizontal_padding = 64 / 5;
export const day_margin_between = 8;
export const day_size =
  Dimensions.get('screen').width / week_days - (screen_horizontal_padding + 5);

export function Habit() {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: day_size, height: day_size }}
    />
  );
}
