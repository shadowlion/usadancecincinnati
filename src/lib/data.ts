export type BoardMember = {
  role: string;
  name: string;
};

export type Data = {
  [key: string]: BoardMember[];
};

export const boardMembers: Data = {
  "2020": [
    {
      role: "President",
      name: "Carol Ward",
    },
    {
      role: "Vice President",
      name: "Louise Buker",
    },
    {
      role: "Treasurer",
      name: "Yasha Ogg",
    },
    {
      role: "Secretary",
      name: "Justin Chiou",
    },
    {
      role: "Member at Large",
      name: "Katie Jones",
    },
    {
      role: "Member at Large",
      name: "Joy Ingram",
    },
    {
      role: "Member at Large",
      name: "Brenda Karr",
    },
    {
      role: "Member at Large",
      name: "Jeff Greatorex",
    },
    {
      role: "Member at Large",
      name: "Greg Howard",
    },
    {
      role: "Member at Large",
      name: "Michelle Weber",
    },
  ],
  "2021": [
    {
      role: "President",
      name: "Carol Ward",
    },
    {
      role: "Vice President",
      name: "Louise Buker",
    },
    {
      role: "Treasurer",
      name: "Yasha Ogg",
    },
    {
      role: "Secretary",
      name: "Justin Chiou",
    },
    {
      role: "Member at Large",
      name: "Katie Jones",
    },
    {
      role: "Member at Large",
      name: "Joy Ingram",
    },
    {
      role: "Member at Large",
      name: "Brenda Karr",
    },
    {
      role: "Member at Large",
      name: "Jeff Greatorex",
    },
    {
      role: "Member at Large",
      name: "Greg Howard",
    },
    {
      role: "Member at Large",
      name: "Michelle Weber",
    },
  ],
  "2022": [
    {
      role: "President",
      name: "Justin Chiou",
    },
    {
      role: "Vice President",
      name: "Brenda Karr",
    },
    {
      role: "Treasurer",
      name: "Yasha Ogg",
    },
    {
      role: "Secretary",
      name: "Justin Chiou",
    },
    {
      role: "Member at Large",
      name: "Chris Ingram",
    },
    {
      role: "Member at Large",
      name: "Joy Ingram",
    },
    {
      role: "Member at Large",
      name: "May Seibel",
    },
    {
      role: "Member at Large",
      name: "Bree Reynolds",
    },
  ],
};

