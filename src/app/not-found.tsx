import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center my-28 px-10">
        <div className="text-center">
          <h4 className="text-3xl font-extralight">Not Found</h4>
          <h1 className="text-9xl font-thin">404</h1>
          <p className="text-xl font-mono">
            Oh No! Seems like this page does not exist!
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="flex item-center gap-x-2 bg-transparent border-2 border-white rounded-full text-white px-4 py-2
      "
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
