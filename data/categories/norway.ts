import { Category } from "@/data/categories";

export const norwayCategoryTree: Category<"norway"> = {
  id: "1",
  name: { no: "Løsninger", en: "Solutions" },
  children: [
    {
      id: "11",
      name: { no: "Branntetting", en: "Fire Sealing" },
      imageUrl: "https://picsum.photos/200",
      children: [
        {
          id: "111",
          name: { no: "Betongdekke", en: "Concrete Slab" },
          children: [
            {
              id: "1111",
              name: {
                no: "Blandede installasjoner / mixed",
                en: "Mixed Installations / Mixed",
              },
            },
            {
              id: "1112",
              name: { no: "Kabel", en: "Cable" },
              children: [
                {
                  id: "11121",
                  name: { no: "Aluminiumskabel", en: "Aluminum Cable" },
                },
                {
                  id: "11122",
                  name: {
                    no: "Datakabel/fiberkabel",
                    en: "Data Cable/Fiber Cable",
                  },
                },
                {
                  id: "11123",
                  name: { no: "El-trekkerør", en: "Electrical Conduit" },
                },
                {
                  id: "11124",
                  name: { no: "Enkelt kabel", en: "Single Cable" },
                },
                {
                  id: "11125",
                  name: { no: "Kabel i bunt", en: "Bundled Cable" },
                },
              ],
            },
            {
              id: "1113",
              name: { no: "Kabelhylse", en: "Cable Sleeve" },
              children: [
                {
                  id: "11131",
                  name: { no: "Firkantet", en: "Square" },
                },
                {
                  id: "11132",
                  name: { no: "Rund", en: "Round" },
                },
                {
                  id: "11133",
                  name: { no: "KL-reserve", en: "KL Reserve" },
                },
              ],
            },
            {
              id: "1114",
              name: { no: "Rør", en: "Pipe" },
              children: [
                {
                  id: "11141",
                  name: { no: "ALU-PEX-rør", en: "ALU-PEX Pipe" },
                },
                {
                  id: "11142",
                  name: { no: "El-trekkerør", en: "Electrical Conduit" },
                },
                {
                  id: "11143",
                  name: { no: "Kobberrør", en: "Copper Pipe" },
                },
                {
                  id: "11144",
                  name: { no: "Plastrør", en: "Plastic Pipe" },
                },
                {
                  id: "11145",
                  name: { no: "Støpejernsrør", en: "Cast Iron Pipe" },
                },
                {
                  id: "11146",
                  name: { no: "Stålrør", en: "Steel Pipe" },
                },
                {
                  id: "11147",
                  name: { no: "Komposittrør", en: "Composite Pipe" },
                },
              ],
            },
            {
              id: "1115",
              name: { no: "Sluk", en: "Drain" },
            },
            {
              id: "1116",
              name: {
                no: "Tomme utsparinger og fuger",
                en: "Empty Openings and Joints",
              },
            },
            {
              id: "1117",
              name: { no: "Ventilasjon", en: "Ventilation" },
            },
          ],
        },
        {
          id: "112",
          name: { no: "Betongvegg", en: "Concrete Wall" },
        },
        {
          id: "113",
          name: { no: "Gipsvegg", en: "Gypsum Wall" },
        },
        {
          id: "114",
          name: { no: "KLT-kontruksjoner", en: "CLT Constructions" },
        },
      ],
    },
    {
      id: "12",
      name: { no: "Brannfuging", en: "Fire Caulking" },
    },
    {
      id: "13",
      name: { no: "Brannbeskyttelse", en: "Fire Protection" },
    },
    {
      id: "14",
      name: { no: "Lydtetting", en: "Soundproofing" },
    },
  ],
};
