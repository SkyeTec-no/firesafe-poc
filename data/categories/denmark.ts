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
          children: [
            {
              id: "1111",
              name: { dk: "Blandede installasjoner / mixed" },
            },
            {
              id: "1112",
              name: { dk: "Kabel" },
              children: [
                {
                  id: "11121",
                  name: { dk: "Aluminiumskabel" },
                },
                {
                  id: "11122",
                  name: { dk: "Datakabel/fiberkabel" },
                },
                {
                  id: "11123",
                  name: { dk: "El-trekkerør" },
                },
                {
                  id: "11124",
                  name: { dk: "Enkelt kabel" },
                },
                {
                  id: "11125",
                  name: { dk: "Kabel i bunt" },
                },
              ],
            },
            {
              id: "1113",
              name: { dk: "Kabelhylse" },
              children: [
                {
                  id: "11131",
                  name: { dk: "Firkantet" },
                },
                {
                  id: "11132",
                  name: { dk: "Rund" },
                },
                {
                  id: "11133",
                  name: { dk: "KL-reserve" },
                },
              ],
            },
            {
              id: "1114",
              name: { dk: "Rør" },
              children: [
                {
                  id: "11141",
                  name: { dk: "ALU-PEX-rør" },
                },
                {
                  id: "11142",
                  name: { dk: "El-trekkerør" },
                },
                {
                  id: "11143",
                  name: { dk: "Kobberrør" },
                },
                {
                  id: "11144",
                  name: { dk: "Plastrør" },
                },
                {
                  id: "11145",
                  name: { dk: "Støpejernsrør" },
                },
                {
                  id: "11146",
                  name: { dk: "Stålrør" },
                },
                {
                  id: "11147",
                  name: { dk: "Komposittrør" },
                },
              ],
            },
            {
              id: "1115",
              name: { dk: "Sluk" },
            },
            {
              id: "1116",
              name: { dk: "Tomme utsparinger og fuger" },
            },
            {
              id: "1117",
              name: { dk: "Ventilasjon" },
            },
          ],
        },
        {
          id: "112",
          name: { dk: "Betongvegg" },
        },
        {
          id: "113",
          name: { dk: "Gipsvegg" },
        },
        {
          id: "114",
          name: { dk: "KLT-kontruksjoner" },
        },
      ],
    },
    {
      id: "12",
      name: { dk: "Brannfuging" },
    },
    {
      id: "13",
      name: { dk: "Brannbeskyttelse" },
    },
    {
      id: "14",
      name: { dk: "Lydtetting" },
    },
  ],
};
