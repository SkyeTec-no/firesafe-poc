export interface Category {
  id: string;
  name: string;
  children?: Category[];
}

export const categoryTree: Category = {
  id: "1",
  name: "Løsninger",
  children: [
    {
      id: "11",
      name: "Branntetting",
      children: [
        {
          id: "111",
          name: "Betongdekke",
          children: [
            {
              id: "1111",
              name: "Blandede installasjoner / mixed",
            },
            {
              id: "1112",
              name: "Kabel",
              children: [
                {
                  id: "11121",
                  name: "Aluminiumskabel",
                },
                {
                  id: "11122",
                  name: "Datakabel/fiberkabel",
                },
                {
                  id: "11123",
                  name: "El-trekkerør",
                },
                {
                  id: "11124",
                  name: "Enkelt kabel",
                },
                {
                  id: "11125",
                  name: "Kabel i bunt",
                },
              ],
            },
            {
              id: "1113",
              name: "Kabelhylse",
              children: [
                {
                  id: "11131",
                  name: "Firkantet",
                },
                {
                  id: "11132",
                  name: "Rund",
                },
                {
                  id: "11133",
                  name: "KL-reserve",
                },
              ],
            },
            {
              id: "1114",
              name: "Rør",
              children: [
                {
                  id: "11141",
                  name: "ALU-PEX-rør",
                },
                {
                  id: "11142",
                  name: "El-trekkerør",
                },
                {
                  id: "11143",
                  name: "Kobberrør",
                },
                {
                  id: "11144",
                  name: "Plastrør",
                },
                {
                  id: "11145",
                  name: "Støpejernsrør",
                },
                {
                  id: "11146",
                  name: "Stålrør",
                },
                {
                  id: "11147",
                  name: "Komposittrør",
                },
              ],
            },
            {
              id: "1115",
              name: "Sluk",
            },
            {
              id: "1116",
              name: "Tomme utsparinger og fuger",
            },
            {
              id: "1117",
              name: "Ventilasjon",
            },
          ],
        },
        {
          id: "112",
          name: "Betongvegg",
        },
        {
          id: "113",
          name: "Gipsvegg",
        },
        {
          id: "114",
          name: "KLT-kontruksjoner",
        },
      ],
    },
    {
      id: "12",
      name: "Brannfuging",
    },
    {
      id: "13",
      name: "Brannbeskyttelse",
    },
    {
      id: "14",
      name: "Lydtetting",
    },
  ],
};
