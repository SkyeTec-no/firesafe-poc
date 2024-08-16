import { Category } from "@/data/categories";

export const norwayCategoryTree: Category<"norway"> = {
  id: "1",
  name: { no: "Løsninger" },
  children: [
    {
      id: "11",
      name: { no: "Branntetting" },
      imageUrl: "https://picsum.photos/200",
      children: [
        {
          id: "111",
          name: { no: "Betongdekke" },
          imageUrl: "https://picsum.photos/200",
          children: [
            {
              id: "1111",
              name: { no: "Blandede installasjoner / mixed" },
              imageUrl: "https://picsum.photos/200",
            },
            {
              id: "1112",
              name: { no: "Kabel" },
              imageUrl: "https://picsum.photos/200",
              children: [
                {
                  id: "11121",
                  name: { no: "Aluminiumskabel" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11122",
                  name: { no: "Datakabel/fiberkabel" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11123",
                  name: { no: "El-trekkerør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11124",
                  name: { no: "Enkelt kabel" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11125",
                  name: { no: "Kabel i bunt" },
                  imageUrl: "https://picsum.photos/200",
                },
              ],
            },
            {
              id: "1113",
              name: { no: "Kabelhylse" },
              imageUrl: "https://picsum.photos/200",
              children: [
                {
                  id: "11131",
                  name: { no: "Firkantet" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11132",
                  name: { no: "Rund" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11133",
                  name: { no: "KL-reserve" },
                  imageUrl: "https://picsum.photos/200",
                },
              ],
            },
            {
              id: "1114",
              name: { no: "Rør" },
              imageUrl: "https://picsum.photos/200",
              children: [
                {
                  id: "11141",
                  name: { no: "ALU-PEX-rør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11142",
                  name: { no: "El-trekkerør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11143",
                  name: { no: "Kobberrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11144",
                  name: { no: "Plastrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11145",
                  name: { no: "Støpejernsrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11146",
                  name: { no: "Stålrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11147",
                  name: { no: "Komposittrør" },
                  imageUrl: "https://picsum.photos/200",
                },
              ],
            },
            {
              id: "1115",
              name: { no: "Sluk" },
              imageUrl: "https://picsum.photos/200",
            },
            {
              id: "1116",
              name: { no: "Tomme utsparinger og fuger" },
              imageUrl: "https://picsum.photos/200",
            },
            {
              id: "1117",
              name: { no: "Ventilasjon" },
              imageUrl: "https://picsum.photos/200",
            },
          ],
        },
        {
          id: "112",
          name: { no: "Betongvegg" },
          imageUrl: "https://picsum.photos/200",
        },
        {
          id: "113",
          name: { no: "Gipsvegg" },
          imageUrl: "https://picsum.photos/200",
        },
        {
          id: "114",
          name: { no: "KLT-kontruksjoner" },
          imageUrl: "https://picsum.photos/200",
        },
      ],
    },
    {
      id: "12",
      name: { no: "Brannfuging" },
      imageUrl: "https://picsum.photos/200",
    },
    {
      id: "13",
      name: { no: "Brannbeskyttelse" },
      imageUrl: "https://picsum.photos/200",
    },
    {
      id: "14",
      name: { no: "Lydtetting" },
      imageUrl: "https://picsum.photos/200",
    },
  ],
};
