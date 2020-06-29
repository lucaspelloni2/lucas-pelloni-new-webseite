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

export type VimeoVideo = {
  videoId: number | string;
  isYoutube?: boolean;
};

export type Achievement = {
  title: string;
  subtitle?: string;
  pictures: Picture[];
  description?: string;
  logo?: Picture;
  videos?: VimeoVideo[];
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
  translation?: number;
  url?: string;
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
    year: 2020,
    month: MONTHS.JANUARY,
    url: "william",
    primaryColor: "#61dafb",
    achievement: {
      title: "Interview with William",
      hashtags: [
        {
          title: "reactnative"
        },
        {
          title: "williamcandillon"
        },
        { title: "animations" }
      ],
      subtitle:
        "In January 2020, I had the pleasure to be interview by William Candillion, one of the best React Native developers in the world, expert in the field of declarative animations.",
      description: `In this interview, I had a chat with [William Candillion](https://twitter.com/wcandillon?lang=en), maker of the [Can it be done in React Native?”](https://www.youtube.com/user/wcandill/videos) YouTube series. We talked about the tech universe behind React, React Native, AWS and serverless architectures.`,
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/lucas_wiiliam.png"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/william.jpeg"
        }
      ],
      link: "https://www.youtube.com/watch?v=1GG4YZmz0CI&t=1091s",
      logo: {
        src:
          "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/react.png"
      },
      videos: [
        {
          videoId: "1GG4YZmz0CI",
          isYoutube: true
        }
      ]
    }
  },
  {
    year: 2019,
    month: MONTHS.MAY,
    url: "axelra",
    primaryColor: "#369cf7",
    secondaryColor: "#0a274b",
    achievement: {
      title: "Axelra was born",
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
      description: `[Axelra AG](https://www.axelra.com) has been founded in May 2019 by Peter Zwyssig, Thomas Bocek, Severin Wullschleger and myself.
Axelra accelerates digital business models for corporates and startups with skin in the game. Also known as tech venture builder or tech accelerator, Axelra is based in the heart of Zurich and loves to build, launch and scale digital products and services and the business around it.
Our approach takes 100 days from the idea to the MVP launch.

Usually, our delivery process can be divided into four different phases:

1.  Ideation
    *  Generation and verification of ideas by understanding customer needs, market trends and technological potential.


2.  Testing
    * Selection of the use cases and creation of mockups or prototypes to test with real (potential) customers in the market and model the high level business case.

3.  MVP
    * Building and launching the MVP as private or public beta. Building up your organisation, supporting in recruiting of key people and handing over the company.


4.  Scaling
    * We collaborate with partners to provide you with the boost and experience needed to continuously iterate your product helping you to grow your business.


Want to launch your company with us? Visit us here [https://www.axelra.com](https://www.axelra.com). We would love to co-create and accelerate your venture :)`,
      logo: {
        src:
          "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/logo_font.png"
      },
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/axelra_1.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/axelra_2.jpg"
        }
      ],
      link: "https://axelra.com"
    }
  },
  {
    year: 2019,
    month: MONTHS.DECEMBER,
    url: "master",
    primaryColor: "#4862ea",
    achievement: {
      title: "Master Degree at UZH",
      subtitle:
        "In December 2019, I obtained a Master Degree in Computer Science at the University of Zurich (UZH). I wrote my master thesis in the field of passive Wi-Fi signals. Overall grade: 5.73 of 6.0.",
      description:
        "After spending my childhood in the beautiful Canton Ticino, I moved to Zurich to start my academic path in **September 2013**  in the departement of Business & Informatics at University of Zurich.  After 5 and a half years of sacrifice, beautiful memories and a lot of work, I got a degree in Computer Science with summa cum laude.\n" +
        "\n" +
        "During my studies I got to know and experience many fields related to the world of computer science. Below is just a list of some of my publications. \n",
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/bachelor.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/bachelor_2.jpeg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/bachelor_3.jpeg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/bachelor_4.jpeg"
        }
      ],
      logo: {
        src:
          "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/uzh.png"
      },
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
    year: 2019,
    month: MONTHS.JUNE,
    url: "sbhack",
    primaryColor: "#7B8E47",
    achievement: {
      title: "SBHACK19 Overall Winner",
      subtitle:
        "Together with the Axelra Team, we won the biggest Blockchain Hackathon in Switzerland with our app called Velove. Velove is a blockchain app which rewards people for commuting with their bikes by giving them CO2 token as reward.",
      description:
        "[Velove](https://www.axelra.com/velove/) is a blockchain app which rewards people for commuting with their bikes.",
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/sbhack19.jpeg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/sbhack19_2.jpeg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/sbhack19_3.jpeg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/sbhack19_5.jpeg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/sbhack_4.jpeg"
        }
      ],
      videos: [
        {
          videoId: 414890377
        },
        { videoId: 414896672 }
      ],
      link: "https://hackathon.trustsquare.ch/winner/",
      logo: {
        src:
          "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/trust_square.jpeg"
      },
      hashtags: [
        {
          title: "sbhack19"
        },
        {
          title: "swissblockchainhackthon"
        },
        { title: "velove" }
      ]
    }
  },
  {
    year: 2018,
    month: MONTHS.SEPTEMBER,
    url: "hackzurich",
    primaryColor: "#1FD674",
    achievement: {
      title: "HackZurich Audience Award",
      subtitle:
        "Together with Jonny Burger, we have been selected in the top 500 applications from a global pool of over 5500 representing several elite universities. After 40 hours of hacking, where we implemented our app called MAKADAY, we won the audience award at the biggest Hackathon in Europe.    ",
      description:
        "[MAKADAY](https://www.axelra.com/makaday/) combines locals' insight and google knowledge to plan your visit to a city and interact with your community by creating a day's schedule using a sequence of activities. Users are able to share their days and give rating for other days that have been already shared. After 40 hours of hacking this app at the #HackZurich18 , we won the Audience Award",
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/hack_zuri_4.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/hack_zuri_1.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/hack_zuri_3.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/audience.jpg"
        }
      ],
      videos: [
        {
          videoId: 414553471
        },
        { videoId: 414559184 }
      ],
      link: "https://www.instagram.com/maka.day/",
      logo: {
        src:
          "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/hack_zuri_logo.png"
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
    url: "eureka",
    primaryColor: "#4caef3",
    achievement: {
      title: "EUREKA - Science Matters",
      subtitle:
        "In 2018 we successfully launched the EUREKA platform to the main ETH network. EUREKA is a peer-to-peer scientific data publishing platform, powered by blockchain, to promote open science. I was deputy CTO at EKA Blockchain Solutions GmbH from November 2017 to February 2019.",
      description:
        "In 2018 we successfully launched the EUREKA platform to the main ETH network. EUREKA is a peer-to-peer scientific data publishing platform, powered by blockchain, to promote open science. I was deputy CTO for EKA Blockchain Solutions GmbH.",
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/eureka_1.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/eureka_2.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/eureka_3.jpg"
        }
      ],
      hashtags: [
        {
          title: "eurekatoken"
        },
        {
          title: "blockchain"
        },
        { title: "ethereum" },
        { title: "openscience" }
      ]
    }
  },
  {
    year: 2013,
    month: MONTHS.MARCH,
    url: "luckyp",
    primaryColor: "#ec4d63",
    achievement: {
      title: "LuckyP on Stage",
      subtitle:
        "I opened the concert to a very famous Italian band, Studio 3. There were about 100 people at the concert. Many of them, they knew my songs by heart. An emotion, that I would never forget.",
      description: "lorem lorem ",
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/temus_1.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/temus_2.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/temus_3.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/temus_4.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/temus_5.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/temus_6.jpg"
        }
      ],
      hashtags: [
        {
          title: "luckyp"
        },
        {
          title: "temus"
        },
        { title: "live" },
        { title: "rap" }
      ]
    }
  },
  {
    year: 2012,
    month: MONTHS.DECEMBER,
    url: "unadomenicadineve",
    primaryColor: "#f546a1",
    achievement: {
      title: "Una Domenica di Neve",
      subtitle:
        "In December 2012, I published my first album as Lucky P entitled una Domenica di Neve. After few months, it was sold-out in Lugano.",
      description: "lorem lorem ",
      pictures: [
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/album.jpg"
        },
        {
          src:
            "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/album_2.jpg"
        }
      ],
      hashtags: [
        {
          title: "luckyp"
        },
        {
          title: "unadomenicadineve"
        },
        { title: "rap" },
        { title: "ticino" }
      ]
    }
  }
];
