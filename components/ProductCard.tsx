import { Product } from "@/app/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name } = product;

  return (
    <a className="card w-96 border border-1 hover:shadow-xl " href={`/products/${id}`}>
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Category image" />
      </figure>
      <div className="card-body">
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
