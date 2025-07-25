import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen !bg-white dark:!bg-gray-900 p-4">
      <div className="!py-8 !px-4 !mx-auto !max-w-screen-xl lg:!py-16 lg:!px-6 w-full">
        <div className="!mx-auto !max-w-screen-sm !text-center">
          <h1 className="!mb-4 text-6xl sm:!text-7xl !tracking-tight !font-extrabold !text-primary-600 dark:!text-primary-500">404</h1>
          <p className="!mb-4 text-2xl sm:!text-3xl !tracking-tight !font-bold !text-gray-900 md:!text-4xl dark:!text-white">Something&#39;s missing.</p>
          <p className="!mb-4 text-base sm:!text-lg !font-light !text-gray-500 dark:!gray-400">Sorry, we can&#39;t find that page. You&#39;ll find lots to explore on the home page. </p>
          <Link href="/" className="!inline-flex !text-white !bg-primary-600 hover:!bg-primary-800 focus:!ring-4 focus:!outline-none focus:!ring-primary-300 !font-medium !rounded-lg !text-sm !px-5 !py-2.5 !text-center dark:focus:!ring-primary-900 !my-4">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
} 