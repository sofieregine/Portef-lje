import { AboutItem } from "@/types/About";

interface IAboutservice {
  getaboutinfo: () => AboutItem[];
  daysUntilChristmas: () => number;
  myFavoriteNumber: number;
  spaaKone: (navn: string) => string;
}

export const Aboutservice: IAboutservice = {
  myFavoriteNumber: 3,

  getaboutinfo: () => {
    return [
      {
        icon: "wi:day-cloudy",
        title: "Utvikler",
        description: "heiheihei",
      },
      {
        icon: "wi:night-alt-lightning",
        title: "fghj",
        description: "fghj",
      },
      {
        icon: "pepicons-pop:flower-circle-filled",
        title: "Hallai",
        description: "ye",
      },
      {
        icon: "bi:airplane-engines",
        title: "Hallai",
        description: "ye",
      },
    ];
  },

  daysUntilChristmas: () => {
    const now = new Date();
    const xmas = new Date("2025-12-24");

    const m = xmas.getTime() - now.getTime();

    return Math.floor(m / (1000 * 60 * 60 * 24));
  },

  spaaKone: (navn: string) => {
    return "Du har 3 uker igjen å leve, " + navn;
  },
};
