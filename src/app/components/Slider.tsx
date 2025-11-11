import {Slider} from "@heroui/react";

export default function MySlider() {
  return (
  <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Slider-bar
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-16'>
    <div className="flex flex-col gap-6 w-full ">
      <Slider
        aria-label="Temperature"
        className=""
        color="secondary"
        defaultValue={0.2}
        disableThumbScale={true}
        maxValue={1}
        minValue={0}
        size="sm"
        step={0.01}
      />
      <Slider
        aria-label="Temperature"
        className=""
        color="secondary"
        defaultValue={0.4}
        disableThumbScale={true}
        maxValue={1}
        minValue={0}
        size="md"
        step={0.01}
      />
      <Slider
        aria-label="Temperature"
        className=""
        color="secondary"
        defaultValue={0.6}
        disableThumbScale={true}
        maxValue={1}
        minValue={0}
        size="lg"
        step={0.01}
      />
    </div>
    </div>
    </div>
  )
}
