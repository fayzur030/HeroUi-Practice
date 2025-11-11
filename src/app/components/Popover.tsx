import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";


export default function Mypopover() {
  const content = (
    <PopoverContent>
      <div className="px-1 py-2 ">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    </PopoverContent>
  );

  const colors = ["default", "primary", "secondary", "success", "warning", "danger", "foreground"];

  return (
   <div className="mt-15 mb-8">
    <h1 className='text-center mt-8  font-semibold text-4xl text-indigo-500'>
        Popover
      </h1>
     <div className="flex flex-wrap gap-4 justify-center items-center mt-8">

        
      {colors.map((color) => (
        <Popover key={color} color={color} placement="top">
          <PopoverTrigger>
            <Button className="capitalize" color={color}>
              {color}
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      ))}
    </div>
   </div>
  );
}
