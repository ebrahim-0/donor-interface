import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div class="sm:flex sm:items-center sm:justify-between">
        <Link to="" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            LiverGiver
          </span>
        </Link>
        <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <Link
              to=""
              class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to=""
              class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to=""
              class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              Licensing
            </Link>
          </li>
          <li>
            <Link
              to=""
              class="text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to="" class="hover:underline">
          LiverGiver™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
