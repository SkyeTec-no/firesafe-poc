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
          children: [
            {
              id: "1111",
              name: { no: "Blandede installasjoner / mixed" }
            },
            {
              id: "1112",
              name: { no: "Kabel" },
              children: [
                {
                  id: "11121",
                  name: { no: "Aluminiumskabel" },
                },
                {
                  id: "11122",
                  name: { no: "Datakabel/fiberkabel" },
                },
                {
                  id: "11123",
                  name: { no: "El-trekkerør" },
                },
                {
                  id: "11124",
                  name: { no: "Enkelt kabel" },
                },
                {
                  id: "11125",
                  name: { no: "Kabel i bunt" },
                },
              ],
            },
            {
              id: "1113",
              name: { no: "Kabelhylse" },
              children: [
                {
                  id: "11131",
                  name: { no: "Firkantet" },
                },
                {
                  id: "11132",
                  name: { no: "Rund" },
                },
                {
                  id: "11133",
                  name: { no: "KL-reserve" },
                },
              ],
            },
            {
              id: "1114",
              name: { no: "Rør" },
              children: [
                {
                  id: "11141",
                  name: { no: "ALU-PEX-rør" },
                },
                {
                  id: "11142",
                  name: { no: "El-trekkerør" },
                },
                {
                  id: "11143",
                  name: { no: "Kobberrør" },
                },
                {
                  id: "11144",
                  name: { no: "Plastrør" },
                },
                {
                  id: "11145",
                  name: { no: "Støpejernsrør" },
                },
                {
                  id: "11146",
                  name: { no: "Stålrør" },
                },
                {
                  id: "11147",
                  name: { no: "Komposittrør" },
                },
              ],
            },
            {
              id: "1115",
              name: { no: "Sluk" },
            },
            {
              id: "1116",
              name: { no: "Tomme utsparinger og fuger" },
            },
            {
              id: "1117",
              name: { no: "Ventilasjon" },
            },
          ],
        },
        {
          id: "112",
          name: { no: "Betongvegg" },
        },
        {
          id: "113",
          name: { no: "Gipsvegg" },
        },
        {
          id: "114",
          name: { no: "KLT-kontruksjoner" },
        },
      ],
    },
    {
      id: "12",
      name: { no: "Brannfuging" }
    },
    {
      id: "13",
      name: { no: "Brannbeskyttelse" }
    },
    {
      id: "14",
      name: { no: "Lydtetting" }
    },
  ],
};
