import { IoReturnUpBack } from "react-icons/io5";
import {
  PiNumberSquareOneFill,
  PiNumberSquareTwoFill,
  PiNumberSquareThreeFill,
  PiNumberSquareFourFill,
  PiNumberSquareFiveFill,
} from "react-icons/pi";

import Link from "next/link";

export default function Page() {
  return (
    <div className="ml-8 mr-8">
      <Link href="/">
        <IoReturnUpBack className="mb-2 text-4xl" />
      </Link>

      <section className="flex justify-center items-center border-2 border-dashed border-gray-300 h-64 mb-8">
        <span className="text-6xl">📄</span> {/* Large placeholder icon */}
      </section>
      <h1 className="text-3xl font-bold mb-4">Mulcol® Multicollar Slim 90 minutes fire resistant</h1>
      <ol className="list-decimal ml-5">
        <li className="flex items-start mb-4">
          <span className="mr-2 text-5xl">
            <PiNumberSquareOneFill />
          </span>
          {/* Placeholder icon */}
          <div>
            <h2 className="font-bold">Wall</h2>
            <span className="text-sm">Flexible wall larger or equal 100 mm</span>
          </div>
        </li>
        <li className="flex items-start mb-4">
          <span className="mr-2 text-5xl">
            <PiNumberSquareTwoFill />
          </span>
          {/* Placeholder icon */}
          <div>
            <h2 className="font-bold">Seal</h2>
            <span className="text-sm">Tight fit or maximum annular space of 40 mm</span>
          </div>
        </li>
        <li className="flex items-start mb-4">
          <span className="mr-2 text-5xl">
            <PiNumberSquareThreeFill />
          </span>
          {/* Placeholder icon */}
          <div>
            <h2 className="font-bold">Penetration</h2>
            <span className="text-sm">PVC-U / PVC-C pipe &le; 110 mm, wall thickness 1.9 to 12.3 mm</span>
          </div>
        </li>
        <li className="flex items-start mb-4">
          <span className="mr-2 text-5xl">
            <PiNumberSquareFourFill />
          </span>
          {/* Placeholder icon */}
          <div>
            <h2 className="font-bold">Fire protection product 1</h2>
            <span className="text-sm">Single Multicollar Slim, placed at each face of the wall</span>
          </div>
        </li>
        <li className="flex items-start mb-4">
          <span className="mr-2 text-5xl">
            <PiNumberSquareFiveFill />
          </span>
          {/* Placeholder icon */}
          <div>
            <h2 className="font-bold">Joint sealing</h2>
            <span className="text-sm">Joint sealing with Multisealant A, Multimastic SP or Multimortar</span>
          </div>
        </li>
      </ol>
      <section className="flex justify-around mt-8">
        <div className="flex flex-col items-center mb-4">
          <span className="text-6xl mr-2 mt-1">🛡️</span>
          <div>
            <h2 className="font-bold">Fire resistant</h2>
            <span className="text-sm">From both sides</span>
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <span className="text-6xl mr-2 mt-1">📊</span>
          <div>
            <h2 className="font-bold">Classification</h2>
            <span className="text-sm">&le; to EL 90 U/U</span>
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <span className="text-6xl mr-2 mt-1">📄</span>
          <div>
            <h2 className="font-bold">Download Report</h2>
            <span className="text-sm">ETA 20/1322 /page 18</span>
          </div>
        </div>
      </section>
      <footer className="flex flex-wrap justify-around mt-12">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 flex justify-center">
            <Link
              href="/product-downloads"
              className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
            >
              Product Downloads
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Link
              href="/go-to-product"
              className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
            >
              Go to Product
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Link
              href="/previous-solution"
              className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
            >
              Previous solution
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Link
              href="/next-solution"
              className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
            >
              Next solution
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
