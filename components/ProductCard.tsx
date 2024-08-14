import { Product } from "@/data/products";
import RandomFireIcon from "./RandomFireIcon";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name } = product;

  return (
    <a
      className="card w-96 border border-1 hover:shadow-xl "
      href={`/products/${id}`}
    >
      <figure>
        <RandomFireIcon className="py-8" size={160} />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{name}</h2>
        <div className="keywords">
          {product.keywords.map((keyword, index) => (
            <div key={index} className="badge badge-neutral m-1">
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
