export interface Content {
  type: string;
  title: string;
  fileName: string;
}

export interface PageContent {
  type: string;
  title: string;
  steps?: Steps[];
  additionalSections?: Steps[];
}

export interface Steps {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  categories: string[];
  keywords: string[];
  content: Content[];
  pageContent?: PageContent;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Firesafe FT Board",
    categories: ["1111", "11121", "11122", "11123"],
    keywords: ["Brannplate", "Tommeutsparinger", "Mixed gjennomføring", "Kabel", "Kabel i bunt"],
    content: [
      {
        type: "PDF",
        title: "Firesafe FT Board Montasjeanvisning, hele",
        fileName: "FIRESAFE%20FT%20Board%20Montasjeavisning%202017%20NO.pdf",
      },
    ],
    pageContent: {
      type: "Page",
      title: "Mulcol® Multicollar Slim 90 minutes fire resistant",
      steps: [
        {
          title: "Wall",
          description: "Flexible wall larger or equal 100 mm",
        },
        {
          title: "Seal",
          description: "Tight fit or maximum annular space of 40 mm",
        },
        {
          title: "Penetration",
          description: "PVC-U / PVC-C pipe ≤ 110 mm, wall thickness 1.9 to 12.3 mm",
        },
        {
          title: "Fire protection product 1",
          description: "Single Multicollar Slim, placed at each face of the wall",
        },
        {
          title: "Joint sealing",
          description: "Joint sealing with Multisealant A, Multimastic SP or Multimortar",
        },
      ],
      additionalSections: [
        {
          title: "Fire resistant",
          description: "From both sides",
        },
        {
          title: "Classification",
          description: "≤ to EL 90 U/U",
        },
        {
          title: "Download Report",
          description: "ETA 20/1322 /page 18",
        },
      ],
    },
  },
  {
    id: "2",
    name: "Firesafe GPG Mortar",
    categories: ["1111", "11121", "11122", "11123"],
    keywords: ["GPG", "Enkelt kabel", "Singel kabel", "Kabelbunt", "El 120"],
    content: [
      {
        type: "PDF",
        title: "Firesafe GPG Mortar - Del 1 Kabel Betongdekke",
        fileName: "FIRESAFE%20GPG%20MORTAR%20hoveddok%202018%20NO%20s%206-8.pdf",
      },
    ],
  },
  {
    id: "3",
    name: "Firesafe EX varmeekspanderende masse",
    categories: ["11121", "11122", "11123"],
    keywords: ["EX", "Varmeekspanderende", "Fiberkabel", "Kabel", "Kabelbunt"],
    content: [
      {
        type: "PDF",
        title: "Firesafe EX Montasje 2016, hele",
        fileName: "FIRESAFE%20EX%20montasje%202016%20-%20hele.pdf",
      },
    ],
  },
];
