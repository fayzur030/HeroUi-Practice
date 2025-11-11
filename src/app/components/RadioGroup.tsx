import {RadioGroup, Radio} from "@heroui/react"

export default function MyRadioGroup() {
  return (
    <div className="mt-15 mb-8">
        <div className="justify-center items-center ">
       <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Radio-Group
      </h1>
      <div className=" flex flex-wrap gap-4 justify-center items-center mt-10 mb-10">
    <RadioGroup label="Select your favorite city">
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio
      value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
      <Radio value="tokyo">Tokyo</Radio>
    </RadioGroup>
    </div>
    </div>
    </div>
  )
}
