import { Inter, Anton, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../../styles/main.css";
import "../../styles/framework.css";
import "../../styles/swiper.css";
import Header from "@src/components/shared/header/header";
import { Toaster } from "react-hot-toast";
import Redux from "@src/providers/redux";
import ReactQuery from "@src/providers/reactQuery";
import Footer from "@src/components/shared/footer/footer";


const inter = Inter({ subsets: ["latin"] });

const AntonF = Anton({
  subsets: ["latin"],
  variable: "--font-Anton",
  weight: "400",
});

const mainfont = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  variable: "--font-mains",
  weight: "400",
});
export default async function RootLayout({ children }) {
  return (
    <ReactQuery>
      <html lang="en">
        <body
          dir="rtl"
          className={`${mainfont.className}`}
        >
          <Redux>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </Redux>
        </body>
      </html>
    </ReactQuery>
  );
}
