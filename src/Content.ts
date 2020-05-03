import { CSSProperties } from "react";
import { __COLORS } from "./Layout/Theme";

export type Picture = {
  src: string;
  alt?: string;
  style?: CSSProperties;
};

export type Hashtag = {
  title: string;
};

export type Achievement = {
  title: string;
  subtitle?: string;
  pictures: Picture[];
  description?: string;
  logo?: Picture;
  firstWordColor?: string;
  link?: string;
  hashtags?: Hashtag[];
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
      hashtags: [
        {
          title: "axelra"
        },
        {
          title: "techventurebuilder"
        },
        { title: "techaccelerator" }
      ],
      subtitle:
        "In May 2019, together with Peach, Thomas and Severin, we co-founded Axelra. Axelra is a tech venture builder based in Zurich and loves to build, launch and scale digital products and services and the business around it. Our approach takes 100 days from the idea to the MVP launch.",
      description:
        "Axelra has been founded in May 2019 by Peach Zwssyig, Thomas Bocek, Severin Wullschleger and myself.",
      logo: {
        src:
          "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/logo%2Faxelra_logo.png?alt=media&token=9e3149ab-f59f-4e45-b353-fcf7bbabc089"
      },
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/axelra%2FShooting%20co-founders%2003.jpg?alt=media&token=d0f6c49c-272a-4bf9-8200-7bfdab140e78"
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/1-2.jpg?alt=media&token=a16e0317-842d-4ee9-b36e-12e7c26c25b8"
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/IMG_4171-_1_.png?alt=media&token=bdcd0a48-7850-4873-b428-661df683a611"
        }
      ],
      link: "https://axelra.com"
    }
  },
  {
    year: 2019,
    month: MONTHS.DECEMBER,
    primaryColor: "#4862ea",
    achievement: {
      title: "Master Degree at UZH",
      subtitle:
        "In December 2019, I obtained a Master Degree in Computer Science at the University of Zurich (UZH). I wrote my master thesis in the field of passive Wi-Fi signals. Overall grade: 5.73 of 6.0.",
      description:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/bachelor.jpg?alt=media&token=e5d7a06c-1c99-4b94-9769-9d9d058ce082"
        }
      ],
      hashtags: [
        {
          title: "masterdegree"
        },
        {
          title: "universityofzurich"
        },
        { title: "computerscience" }
      ]
    }
  },
  {
    year: 2018,
    month: MONTHS.SEPTEMBER,
    primaryColor: "#1FD674",
    achievement: {
      title: "HackZurich Audience Award",
      subtitle:
        "Together with Jonny Burger, we have been selected in the top 500 applications from a global pool of over 5500 representing several elite universities. After 40 hours of hacking, where we implemented our app called MAKADAY, we won the audience award at the biggest hackthon in Europe.    ",
      description:
        "MAKADAY combines locals' insight and google knowledge to plan your visit to a city and interact with your community by creating a day's schedule using a sequence of activities. Users are able to share their days and give rating for other days that have been already shared. After 40 hours of hacking this app at the #HackZurich18 , we won the Audience Award",
      pictures: [
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/hack_zuri_4.jpg?alt=media&token=60e9f4da-f675-4e74-80c6-b5f375c28190"
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/hack_zuri_1.jpg?alt=media&token=56368723-87e7-409f-9e54-3f1e89a8f431"
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/hack_zuri_3.jpg?alt=media&token=9cfb02bc-4332-4df4-9155-d4bb742849f7"
        },
        {
          src:
            "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/audience.jpg?alt=media&token=ba274591-2c00-4250-bdef-cc9a37243244"
        }
      ],
      logo: {
        src:
          "https://firebasestorage.googleapis.com/v0/b/lucaswebsite-b3acc.appspot.com/o/logo%2Fhack_zuri_logo.png?alt=media&token=0f3a46ab-dafe-49df-aa2b-d9b78105f4d0"
      },
      hashtags: [
        {
          title: "hackzurich2018"
        },
        {
          title: "makaday"
        },
        { title: "hackathon" }
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
