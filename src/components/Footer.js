import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            LiverGiver
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <Link
              to=""
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              Licensing
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to="" className="hover:underline">
          LiverGiver™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
