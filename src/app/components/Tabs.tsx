import {Tabs, Tab} from "@heroui/react";

export default function MyTabs() {
  const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Tabs-button
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="flex flex-wrap gap-4">
      {colors.map((color) => (
        <Tabs key={color} aria-label="Tabs colors" color={color} radius="full">
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </div>
    </div>
    </div>
  );
}
