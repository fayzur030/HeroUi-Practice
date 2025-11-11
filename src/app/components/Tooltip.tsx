import {Tooltip, Button} from "@heroui/react";

export default function MyTooltip() {
  const placements = [
    "top-start",
    "top",
    "top-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
    "right-start",
    "right",
    "right-end",
  ];

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
       Tool-Tip
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
      {placements.map((placement) => (
        <Tooltip key={placement} color="secondary" content={placement} placement={placement}>
          <Button className="capitalize" color="secondary" variant="flat">
            {placement}
          </Button>
        </Tooltip>
      ))}
    </div>
    </div>
    </div>
  );
}
