import {Select, SelectItem} from "@heroui/react";

export const animals = [
  {key: "cat", label: "Cat"},
  {key: "dog", label: "Dog"},
  {key: "elephant", label: "Elephant"},
  {key: "lion", label: "Lion"},
  {key: "tiger", label: "Tiger"},
  {key: "giraffe", label: "Giraffe"},
  {key: "dolphin", label: "Dolphin"},
  {key: "penguin", label: "Penguin"},
  {key: "zebra", label: "Zebra"},
  {key: "shark", label: "Shark"},
  {key: "whale", label: "Whale"},
  {key: "otter", label: "Otter"},
  {key: "crocodile", label: "Crocodile"},
];

export default function MySelect() {
  const sizes = ["sm", "md", "lg"];

  return (
    <div className='mt-15 mb-10'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Select-Menu
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="w-full flex flex-col gap-4 mb-10">
      {sizes.map((size) => (
        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select className="" label="Select an animal" size={size}>
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Select
            className=""
            label="Favorite Animal"
            placeholder="Select an animal"
            size={size}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}
