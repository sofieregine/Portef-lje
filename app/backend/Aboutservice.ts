import { AboutItem } from "@/types/About"


interface IAboutservice {
   getaboutinfo: () => AboutItem [] 
   x: () => number 
   myFavoriteNumber: number

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
        
    ]
},

    x: () => { 
    const now = new Date()
    const xmas = new Date("2025-12-24")

    const m = xmas.getTime() - now.getTime()

     
    
    return m / (1000 * 60 * 60 * 24)

    }

   

    };

 



