import {
  PiNumberSquareOneFill,
  PiNumberSquareTwoFill,
  PiNumberSquareThreeFill,
  PiNumberSquareFourFill,
  PiNumberSquareFiveFill,
} from "react-icons/pi";

import Link from "next/link";
import Modal from "@/components/Modal";
import BackButton from "@/components/Backbutton";
import {
  countries,
  isCountry,
  isSupportedLanguage,
  supportedLanguages,
} from "@/data/countries";
import { getProductList } from "@/data/products";

export function generateStaticParams() {
  return countries.flatMap((country) =>
    supportedLanguages[country].flatMap((language) =>
      getProductList(country).map((product) => ({
        country,
        language,
        id: product.id,
      })),
    ),
  );
}

interface PageProps {
  params: {
    country: string;
    language: string;
    id: string;
  };
}

export default function Page({ params: { country, language, id } }: PageProps) {
  if (!isCountry(country) || !isSupportedLanguage(country, language))
    throw new Error("Invalid country or language");

  const product = getProductList(country).find((product) => product.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <BackButton />

      <section className="flex justify-center items-center border-2 border-dashed border-gray-300 h-64 mb-8 hidden">
        <span className="text-6xl">📄</span> {/* Large placeholder icon */}
      </section>
      <h1 className="text-3xl font-bold mb-4">{product.pageContent?.title}</h1>

      <section className="flex">
        <ol className="list-decimal ml-5">
          {product?.pageContent?.steps?.map((steps, index) => (
            <li className="flex items-start mb-4" key={index}>
              <span className="mr-2 text-5xl">
                {index === 0 && <PiNumberSquareOneFill />}
                {index === 1 && <PiNumberSquareTwoFill />}
                {index === 2 && <PiNumberSquareThreeFill />}
                {index === 3 && <PiNumberSquareFourFill />}
                {index === 4 && <PiNumberSquareFiveFill />}
              </span>
              <div>
                <h2 className="font-bold">{steps.title}</h2>
                <span className="text-sm">{steps.description}</span>
              </div>
            </li>
          ))}
        </ol>
        <section className="flex flex-col ml-12">
          {product.pageContent?.additionalSections?.map((step, index) => (
            <div key={index} className="flex items-center mb-4">
              <span className="text-6xl mr-2 mt-1">🛡️</span>
              <div>
                <h2 className="font-bold">{step.title}</h2>
                <span className="text-sm">{step.description}</span>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className="flex  flex-col mt-12">
        {product.content.map((content, index) => {
          const contentPath = content.type === "PDF"
            ? `documents/${content.fileName}`
            : content.contentId;

          return (
            <div key={index} className="w-full md:w-1/2 flex justify-center">
              <Link
                href={`${process.env.CONTENT_BASE_URL}/${contentPath}`}
                className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
              >
                {content.title} ({content.type})
              </Link>
            </div>
          );
        })}
      </section>

      <footer className="flex flex-wrap justify-around mt-12 hidden">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 flex justify-center">
            <Link
              href="/product-downloads"
              className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
            >
              Nedlastinger
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Modal />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Link
              href="/previous-solution"
              className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
            >
              Forrige produkt
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Link
              href="/next-solution"
              className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2"
            >
              Neste produkt
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
