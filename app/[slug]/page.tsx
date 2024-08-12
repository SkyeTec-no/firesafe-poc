export async function generateStaticParams() {
  const posts = ["hello", "world"];

  return posts.map((slug) => ({ slug }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const { slug } = params;
  return (
    <>
      <a href="/">Back</a>
      <div>{slug}</div>
    </>
  );
}
