import Link from "next/link";
import RandomFireIcon from "./RandomFireIcon";

interface SolutionCardProps {
  solutionName: string;
  solutionKeywords: string[];
  href: string;
}

export function SolutionCard({
  solutionName,
  solutionKeywords,
  href,
}: SolutionCardProps) {
  return (
    <Link className="card w-96 border border-1 hover:shadow-xl " href={href}>
      <figure>
        <RandomFireIcon className="py-8 text-firesafe-orange" size={160} />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{solutionName}</h2>
        <div className="keywords">
          {solutionKeywords.map((keyword) => (
            <div key={keyword} className="badge badge-neutral m-1">
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
