"use client";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { Krona_One } from "next/font/google";
import Button from "@mui/joy/Button";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Input from "@mui/joy/Input";
import Footer from "./components/footer";
import ProductGroup from "./components/productDisplay";
import { DropdownMenu } from "./components/dropdownmenu";

const roboto = Roboto_Mono({
  subsets: ["latin"],
});

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [navBg, setNavBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-[#CDE4B2]");
      } else {
        setNavBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <nav
        className={`sticky top-0 z-50 flex flex-row w-full h-24 items-center transition-colors duration-300 ${navBg}`}
      >
        <h1 className={`${krona.className} text-4xl ml-4`}>Crank Gear</h1>
        <div className="ml-auto mr-8">
          <DropdownMenu />
        </div>
        <div className="ml-8 mr-8">
          <img className="w-8 h-8" src="shopping-cart.png" />
        </div>
        <div className="ml-8 mr-8">
          <img className="w-8 h-8" src="user.png" />
        </div>
      </nav>
      <section className="bg-[#CDE4B2] w-full h-136 flex justify-center items-center p-16 shadow-xl">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className={`${krona.className} text-6xl mb-4`}>
            Crank Gear Supply Co.
          </h1>
          <p className={`${roboto.className} text-l text-zinc-600`}>
            Sustainable outdoor gear to combat the fast-changing climate
          </p>
          <div className="mt-24">
            <Button
              size="lg"
              variant="soft"
              color="primary"
              startDecorator={<OpenInNew />}
              component="a"
              href="#catalog"
            >
              View Catalog
            </Button>
          </div>
        </div>
      </section>

      <ProductGroup />

      <div className="flex flex-col items-center justify-center p-8 mt-4 text-center space-y-4">
        <p className={`${krona.className} text-3xl font-bold`}>
          Our Mission: Gear That Goes Further
        </p>
        <p className={`${roboto.className} text-lg text-gray-700 m-8`}>
          At Crank Gear Supply Co., we believe that your adventure gear should
          be as enduring as your spirit—and as kind to the planet as you are.
          That’s why every product we design is built with sustainable
          materials, ethical sourcing, and uncompromising durability. From
          repurposed ocean plastics to recycled high-performance fabrics, our
          commitment goes beyond style or survival—it’s about shaping a future
          where outdoor exploration and environmental responsibility go hand in
          hand. Join us in pushing boundaries without leaving a trace.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center p-4 mt-4">
        <img src="2.jpg" className="h-96 w-auto object-cover" />
        <img src="3.jpg" className="h-96 w-auto object-cover" />
        <img src="4.jpg" className="h-96 w-auto object-cover" />
      </div>
      <div className="flex flex-row bg-[#CDE4B2] rounded-xl m-16 h-120 border border-black justify-center items-center">
        <div className="flex w-1/2 m-4">
          <div className="flex flex-col items-center w-full">
            <img src="letter.png" className="w-20 h-20 mb-2" />
            <h1 className={`${krona.className} text-3xl font-bold ml-8 mb-4`}>
              Join the Movement for Greener Gear
            </h1>
            <p className={`${roboto.className} text-lg text-gray-700 m-auto`}>
              Sign up for updates on sustainable product launches, eco-stories,
              and members-only deals.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 m-4 p-2">
          <h1 className={`${roboto.className} text-lg text-gray-700 mb-2`}>
            First Name
          </h1>
          <Input size="lg" placeholder="John" className="mb-4" />
          <h1 className={`${roboto.className} text-lg text-gray-700 mb-2`}>
            Last Name
          </h1>
          <Input size="lg" placeholder="Doe" className="mb-4" />
          <h1 className={`${roboto.className} text-lg text-gray-700 mb-2`}>
            Email
          </h1>
          <Input
            type="email"
            size="lg"
            placeholder="johndoe@gmail.com"
            className="mb-4"
          />
          <Button component="a" href="#as-link">
            Subscribe
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
