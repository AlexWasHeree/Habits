import { generateDates } from '../utils/generate-range-dates';
import { Habits } from './Habits';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDays = generateDates();

const ammountToFill = 18 * 7 - summaryDays.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, i) => {
          return (
            <div
              key={`${day}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center"
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDays.map((day) => {
          return <Habits key={day.toString()} />;
        })}

        {ammountToFill > 0 &&
          Array.from({ length: ammountToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}
