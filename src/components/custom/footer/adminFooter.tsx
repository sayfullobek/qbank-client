"use client";

import Link from "next/link";

export default function AdminFooter() {
  return (
    <>
      <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
        <ul className="flex items-center flex-wrap mb-6 md:mb-0">
          <li>
            <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
              Terms and conditions
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm font-normal text-gray-500 hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex sm:justify-center space-x-6">
          {[
            "facebook",
            "instagram",
            "twitter",
            "github",
            "dribbble"
          ].map((platform, i) => (
            <Link key={i} href="#" className="text-gray-500 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <use href={`#icon-${platform}`} />
              </svg>
            </Link>
          ))}
        </div>
      </footer>

      <p className="text-center text-sm text-gray-500 my-10">
        &copy; 2019–{new Date().getFullYear()}{" "}
        <a href="https://themesberg.com" target="_blank" className="hover:underline" rel="noopener noreferrer">
          Themesberg
        </a>. All rights reserved.
      </p>
    </>
  );
}
