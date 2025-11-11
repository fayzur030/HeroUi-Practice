import {Textarea} from "@heroui/react";

export default function MyTextrea() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Text-Area
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <Textarea
      className="max-w-xs"
      defaultValue="HeroUI is a React UI library with..."
      errorMessage="The description should be at least 255 characters long."
      isInvalid={true}
      label="Description"
      placeholder="Enter your description"
      variant="bordered"
      
    />
    </div>
    </div>
  );
}
