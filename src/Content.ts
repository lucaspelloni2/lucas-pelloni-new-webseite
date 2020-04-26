import { CSSProperties } from "react";
import { __COLORS } from "./Layout/Theme";

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
  firstWordColor?: string;
  link?: string;
};

export type Memory = {
  year: number;
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
  DECEMBER = "DECEMBER"
}

export const Memories: Memory[] = [
  {
    year: 2019,
    month: MONTHS.MAY,
    primaryColor: "#369cf7",
    secondaryColor: "#0a274b",
    achievement: {
      title: "Axelra has born",
      firstWordColor: __COLORS.FOURTH,
      subtitle:
        "In May 2019, together with Peach, Thomas and Severin, we co-founded Axelra. Axelra is a tech venture builder based in Zurich and loves to build, launch and scale digital products and services and the business around it. Our approach takes 100 days from the idea to the MVP launch.",
      description:
        "Axelra has been founded in May 2019 by Peach Zwssyig, Thomas Bocek, Severin Wullschleger and myself.",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/axelra%2FShooting%20co-founders%2003.jpg?alt=media&token=d0f6c49c-272a-4bf9-8200-7bfdab140e78"
        }
      ],
      link: "https://axelra.com"
    }
  },
  {
    year: 2019,
    month: MONTHS.DECEMBER,
    primaryColor: "#36f793",
    achievement: {
      title: "Master Degree",
      subtitle:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/master%2FIMG_5344-_1_.png?alt=media&token=6b46c6f5-33c5-4f89-9b9f-e03d80ec3be4"
        }
      ]
    }
  },
  {
    year: 2018,
    month: MONTHS.APRIL,
    primaryColor: "#36f793",
    achievement: {
      title: "EUREKA Platform Launch",
      subtitle: "I was Deputy CTO bla bla ",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/8f172667-f08c-411b-b49f-12ce7c05176e.JPG?alt=media&token=cf1abffd-f8aa-448b-ac4a-8c76799359d5"
        }
      ]
    }
  },
  {
    year: 2017,
    month: MONTHS.JULI,
    primaryColor: "#4a93e9",
    achievement: {
      title: "Bachelor Degree",
      subtitle: "I completed my bachelor degree in Computer Science",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/8f172667-f08c-411b-b49f-12ce7c05176e.JPG?alt=media&token=cf1abffd-f8aa-448b-ac4a-8c76799359d5"
        }
      ]
    }
  },
  {
    year: 1993,
    month: MONTHS.MARCH,
    primaryColor: "#ab39dd",
    achievement: {
      title: "My birth",
      subtitle: "lorem lorem lorem lorem",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/8f172667-f08c-411b-b49f-12ce7c05176e.JPG?alt=media&token=cf1abffd-f8aa-448b-ac4a-8c76799359d5"
        }
      ]
    }
  }
];
