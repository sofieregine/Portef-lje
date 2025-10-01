import { Icon } from "@iconify/react";
import z from "zod";

export interface InniAboutProps {
  icon:
    | "wi:day-cloudy"
    | "wi:night-alt-lightning"
    | "wi:day-snow"
    | "wi:day-rain-mix"
    | "bi:bicycle"
    | "bi:airplane-engines"
    |  "pepicons-pop:coctail"
    |  "pepicons-pop:eye"
    |  "pepicons-pop:flower-circle-filled"
    |  "pepicons-pop:heart"
    ;
    
  title: string;
  description: string;
  number?: number;
}

export const inniaboutschema = z.object({
  icon: z.string(),
  title: z.string().max(30,"Tittel er for lang").min(2,"Tittelen er for kort"),
  description :z.string(),
  number: z.number().optional(),
  
})

export type inniabouttype = z.infer<typeof inniaboutschema>


export const InniAbout = ({ icon, title, description }: InniAboutProps) => (
  <div className="flex items-center mb-2">
    <Icon icon={icon} width="40" height="40" className="mr-2" />
    <div>
      <p className="font-bold text-3xl bg-fuchsia-800 bg-clip-text text-transparent">
        {title}
      </p>
      <p>{description}</p>
    </div>
  </div>
);
