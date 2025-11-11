import {User, Link} from "@heroui/react";

export default function MyUser() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        User-
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <User
    
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
      }}
      description={
        <Link isExternal href="https://x.com/jrgarciadev" size="sm">
          @jrgarciadev
        </Link>
      }
      name="Junior Garcia"
      
    />
    </div>
      </div>
  );
}
