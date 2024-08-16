import Link from "next/link";
import RandomFireIcon from "./RandomFireIcon";

interface ProductCardProps {
  productName: string;
  productKeywords: string[];
  href: string;
}

export function ProductCard({
  productName,
  productKeywords,
  href,
}: ProductCardProps) {
  return (
    <Link className="card w-96 border border-1 hover:shadow-xl " href={href}>
      <figure>
        <RandomFireIcon className="py-8 text-firesafe-orange" size={160} />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{productName}</h2>
        <div className="keywords">
          {productKeywords.map((keyword, index) => (
            <div key={index} className="badge badge-neutral m-1">
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
