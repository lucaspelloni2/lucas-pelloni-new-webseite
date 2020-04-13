import { CSSProperties } from "react";

export type Picture = {
  src: string;
  alt?: string;
  style?: CSSProperties;
};

export type Achievement = {
  title: string;
  subtitle?: string;
  pictures: Picture[];
  description?: string;
  link?: string;
};

export type Memory = {
  year: string;
  month: MONTHS;
  primaryColor: string;
  secondaryColor?: string;
  achievement: Achievement;
};

export enum MONTHS {
  JANUARY = "JANUARY",
  FEBRUARY = "FEBRUARY",
  MARCH = "MARCH",
  APRIL = "APRIL",
  MAY = "MAY",
  JUNE = "JUNE",
  JULI = "JULI",
  AUGUST = "AUGUST",
  SEPTEMBER = "SEPTEMBER",
  OCTOBER = "OCTOBER",
  NOVEMBER = "NOVEMBER",
  DECEMBER = "DECEMBER",
}

export const Memories: Memory[] = [
  {
    year: "2019",
    month: MONTHS.MAY,
    primaryColor: "#369cf7",
    secondaryColor: "#0a274b",
    achievement: {
      title: "Axelra is born",
      subtitle:
        "Axelra is a tech venture builder based in Zurich and loves to build, launch and scale digital products and services and the business around it. Our approach takes 100 days from the idea to the MVP launch.",
      description:
        "Axelra has been founded in May 2019 by Peach Zwssyig, Thomas Bocek, Severin Wullschleger and myself.",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/axelra%2FShooting%20co-founders%2003.jpg?alt=media&token=d0f6c49c-272a-4bf9-8200-7bfdab140e78"
        }
      ]
    }
  }
];
