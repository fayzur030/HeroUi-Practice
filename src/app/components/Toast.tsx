import {addToast, ToastProvider, Button} from "@heroui/react";
import React from "react";

export default function MyToast() {
  const [placement, setPlacement] = React.useState("bottom-right");

  return (
    
    <>
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        My-Toast
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
      <div className="fixed z-[100]">
        <ToastProvider placement={placement} toastOffset={placement.includes("top") ? 60 : 0} />
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          ["Top Left", "top-left"],
          ["Top Center", "top-center"],
          ["Top Right", "top-right"],
          ["Bottom Left", "bottom-left"],
          ["Bottom Center", "bottom-center"],
          ["Bottom Right", "bottom-right"],
        ].map((position) => (
          <Button
            key={position[1]}
            variant={"flat"}
            onPress={() => {
              setPlacement(position[1]);
              addToast({
                title: "Toast title",
                description: "Toast displayed successfully",
              });
            }}
          >
            {position[0]}
          </Button>
        ))}
      </div>
      </div>
      </div>
    </>
  );
}
