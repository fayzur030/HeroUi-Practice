import React from "react";
import {Progress} from "@heroui/react";

export default function MyProgress() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-15 mb-8">
        <div className="justify-center items-center ">
            <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500 '>
        Pogress
      </h1>
    <Progress
      aria-label="Downloading..."
      className=""
      color="success"
      showValueLabel={true}
      size="md"
      value={value}
    />
    </div>
    </div>
  );
}

