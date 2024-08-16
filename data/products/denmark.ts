import { Product } from "@/data/products";

export const denmarkProductList: Product<"denmark">[] = [
  {
    id: "1",
    name: { dk: "Firesafe FT Board" },
    categories: ["1111", "11121", "11122", "11123"],
    keywords: [
      "Brannplate",
      "Tomme utsparinger",
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
    pageContent: {
      type: "Page",
      title: "Firesafe FT Board",
      steps: [
        {
          title: "Vegg",
          description: "Betong- eller gipsvegg >= 100 mm",
        },
        {
          title: "Gulv",
          description: "Betongdekke >= 150 mm",
        },
        {
          title: "Kabelgjennomføringer og ventilasjonskanaler",
          description: "Vegg og dekke",
        },
        {
          title: "Røyktett",
          description: "EN 1634-3",
        },
      ],
      additionalSections: [
        {
          title: "Branntett",
          description: "Fra begge sider",
        },
        {
          title: "Brannklasse",
          description: "EI30 - EI120",
        },
        {
          title: "Godkjenning",
          description: "ETA 16/0103",
        },
      ],
    },
  },
  {
    id: "2",
    name: { dk: "Firesafe GPG Mortar" },
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
    name: { dk: "Firesafe EX varmeekspanderende masse" },
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
