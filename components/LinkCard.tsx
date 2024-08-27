import RandomFireIcon from "./RandomFireIcon";
import Link from "next/link";

interface LinkCardProps {
  href: string;
  title: string;
  imageUrl?: string;
}

export function LinkCard({ href, title, imageUrl }: LinkCardProps) {
  return (
    <Link className="card w-96 border border-1 hover:shadow-xl" href={href}>
      <figure>
        {imageUrl && (
          <img src={imageUrl} alt={title} width={100} className="py-8" />
        )}
        {!imageUrl && (
          <RandomFireIcon className="py-8 text-firesafe-orange" size={160} />
        )}
      </figure>
      <div className="card-body pt-0">
        <h1 className="card-title">{title}</h1>
      </div>
    </Link>
  );
}
