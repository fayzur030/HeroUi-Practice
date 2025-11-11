import {Spinner} from "@heroui/react";

export default function MySpinner() {
  return (
    <div className='mt-15 mb-12'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Spinner
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="flex gap-4">
      <Spinner color="default" label="Default" labelColor="foreground" />
      <Spinner color="primary" label="Primary" labelColor="primary" />
      <Spinner color="secondary" label="Secondary" labelColor="secondary" />
      <Spinner color="success" label="Success" labelColor="success" />
      <Spinner color="warning" label="Warning" labelColor="warning" />
      <Spinner color="danger" label="Danger" labelColor="danger" />
    </div>
    </div>
    </div>
  );
}
