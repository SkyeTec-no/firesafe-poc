declare module "*.mdx" {
  let metadata: Record<string, any>;
  export { metadata };
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module "*.md" {
  let metadata: Record<string, any>;
  export { metadata };
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
