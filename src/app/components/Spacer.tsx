import {Spacer, Card} from "@heroui/react";

export const CustomCard = () => (
  <Card className="w-[300px] space-y-5 p-4" radius="2xl">
    <div className="h-24 rounded-lg bg-default-300" />
    <div className="space-y-3">
      <div className="h-3 w-3/5 rounded-lg bg-default-200" />
      <div className="h-3 w-4/5 rounded-lg bg-default-200" />
      <div className="h-3 w-2/5 rounded-lg bg-default-300" />
    </div>
  </Card>
);

export default function MySpacer() {
  return (
    <div className='mt-15 mb-12'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Spacer-box
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="flex">
      <CustomCard />
      <Spacer x={4} />
      <CustomCard />
      <Spacer x={4} />
      <CustomCard />
    </div>
    </div>
    </div>
  )
}
