export interface Content {
  type: string;
  title: string;
  fileName: string;
}

export interface Product {
  id: string;
  name: string;
  categories: string[];
  keywords: string[];
  content: Content[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Firesafe FT Board",
    categories: ["1111", "11121", "11122", "11123"],
    keywords: [
      "Brannplate",
      "Tommeutsparinger",
      "Mixed gjennomføring",
      "Kabel",
      "Kabel i bunt",
    ],
    content: [
      {
        type: "PDF",
        title: "Firesafe FT Board Montasjeanvisning, hele",
        fileName: "FIRESAFE%20FT%20Board%20Montasjeavisning%202017%20NO.pdf",
      },
    ],
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
        fileName:
          "FIRESAFE%20GPG%20MORTAR%20hoveddok%202018%20NO%20s%206-8.pdf",
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
