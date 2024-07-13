import { Inter, Zen_Dots } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Loading from "../loading";

export const metadata = {
  title: "Projects - Vishal Jatia",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  keywords: [
    "Vishal jatia",
    "portfolio",
    "vishal portfolio",
    "vishal",
    "jatia",
    "Next.js",
    "React",
    "JavaScript",
    "projects",
  ],
  description:
    "Discover the impressive portfolio of Vishal Jatia, a skilled software developer in Delhi, India. Specializing in web development and machine learning, Vishal creates engaging websites and solves complex problems with creativity.",
  openGraph: {
    title: "Projects - Vishal Jatia",
    type: "website",
    description:
      "Hey everyone! You are visiting the official portfolio of Vishal Jatia, who is a software developer from Delhi, India. Developing websites has been a passion for him and has been developing since 2021. He is also interested in machine learning and have participated in many hackathons. He is a very active learner and is always on the journey to learn new technologies.",
    url: "https://vishal-jatia.vercel.app/",
    siteName: "vishal-jatia",
    images: [
      {
        url: "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687170236/favicon2_dgzorq.png",
        alt: "Vishal Jatia",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://vishal-jatia.vercel.app/",

    title: "Projects | Vishal Jatia - Software Developer",
    description:
      "Hey everyone! You are visiting the official portfolio of Vishal Jatia, who is a software developer from Delhi, India. Developing websites has been a passion for him and has been developing since 2021. He is also interested in machine learning and have participated in many hackathons. He is a very active learner and is always on the journey to learn new technologies.",
    creator: "@vishaljatia3",
    images: [
      "https://res.cloudinary.com/dhe0y0a7n/image/upload/v1687170236/favicon2_dgzorq.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inter = Inter({ subsets: ["latin"] });
const zen = Zen_Dots({
  subsets: ["latin-ext"],
  variable: "--font-zen",
  weight: "400",
});

export default function ProjectLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
