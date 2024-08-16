import { Category } from "@/data/categories";

export const denmarkCategoryTree: Category<"denmark"> = {
  id: "1",
  name: { dk: "Løsninger" },
  children: [
    {
      id: "11",
      name: { dk: "Branntetting" },
      imageUrl: "https://picsum.photos/200",
      children: [
        {
          id: "111",
          name: { dk: "Betongdekke" },
          imageUrl: "https://picsum.photos/200",
          children: [
            {
              id: "1111",
              name: { dk: "Blandede installasjoner / mixed" },
              imageUrl: "https://picsum.photos/200",
            },
            {
              id: "1112",
              name: { dk: "Kabel" },
              imageUrl: "https://picsum.photos/200",
              children: [
                {
                  id: "11121",
                  name: { dk: "Aluminiumskabel" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11122",
                  name: { dk: "Datakabel/fiberkabel" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11123",
                  name: { dk: "El-trekkerør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11124",
                  name: { dk: "Enkelt kabel" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11125",
                  name: { dk: "Kabel i bunt" },
                  imageUrl: "https://picsum.photos/200",
                },
              ],
            },
            {
              id: "1113",
              name: { dk: "Kabelhylse" },
              imageUrl: "https://picsum.photos/200",
              children: [
                {
                  id: "11131",
                  name: { dk: "Firkantet" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11132",
                  name: { dk: "Rund" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11133",
                  name: { dk: "KL-reserve" },
                  imageUrl: "https://picsum.photos/200",
                },
              ],
            },
            {
              id: "1114",
              name: { dk: "Rør" },
              imageUrl: "https://picsum.photos/200",
              children: [
                {
                  id: "11141",
                  name: { dk: "ALU-PEX-rør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11142",
                  name: { dk: "El-trekkerør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11143",
                  name: { dk: "Kobberrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11144",
                  name: { dk: "Plastrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11145",
                  name: { dk: "Støpejernsrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11146",
                  name: { dk: "Stålrør" },
                  imageUrl: "https://picsum.photos/200",
                },
                {
                  id: "11147",
                  name: { dk: "Komposittrør" },
                  imageUrl: "https://picsum.photos/200",
                },
              ],
            },
            {
              id: "1115",
              name: { dk: "Sluk" },
              imageUrl: "https://picsum.photos/200",
            },
            {
              id: "1116",
              name: { dk: "Tomme utsparinger og fuger" },
              imageUrl: "https://picsum.photos/200",
            },
            {
              id: "1117",
              name: { dk: "Ventilasjon" },
              imageUrl: "https://picsum.photos/200",
            },
          ],
        },
        {
          id: "112",
          name: { dk: "Betongvegg" },
          imageUrl: "https://picsum.photos/200",
        },
        {
          id: "113",
          name: { dk: "Gipsvegg" },
          imageUrl: "https://picsum.photos/200",
        },
        {
          id: "114",
          name: { dk: "KLT-kontruksjoner" },
          imageUrl: "https://picsum.photos/200",
        },
      ],
    },
    {
      id: "12",
      name: { dk: "Brannfuging" },
      imageUrl: "https://picsum.photos/200",
    },
    {
      id: "13",
      name: { dk: "Brannbeskyttelse" },
      imageUrl: "https://picsum.photos/200",
    },
    {
      id: "14",
      name: { dk: "Lydtetting" },
      imageUrl: "https://picsum.photos/200",
    },
  ],
};
