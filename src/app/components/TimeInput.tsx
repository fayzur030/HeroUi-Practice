import {TimeInput} from "@heroui/react";
import {Time} from "@internationalized/date";

export default function MyTime() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
      Time-Input
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="flex gap-4">
      <TimeInput label="Event Time" />
      <TimeInput defaultValue={new Time(11, 45)} label="Event Time" />
    </div>
    </div>
    </div>
  );
}
