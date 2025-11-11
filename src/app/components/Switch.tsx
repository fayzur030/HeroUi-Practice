import {Switch} from "@heroui/react";

export default function MySwitch() {
  return (
    <div className='mt-15 mb-12'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Switch-Button
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="flex gap-4">
      <Switch defaultSelected color="default">
        Default
      </Switch>
      <Switch defaultSelected color="primary">
        Primary
      </Switch>
      <Switch defaultSelected color="secondary">
        Secondary
      </Switch>
      <Switch defaultSelected color="success">
        Success
      </Switch>
      <Switch defaultSelected color="warning">
        Warning
      </Switch>
      <Switch defaultSelected color="danger">
        Danger
      </Switch>
    </div>
    </div>
    </div>
  );
}
