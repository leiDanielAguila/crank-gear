"use client";
import { useEffect, useState } from "react";

import { Roboto_Mono } from "next/font/google";
import { Krona_One } from "next/font/google";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Button from "@mui/joy/Button";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { ImageCarousel } from "./carousel";

const roboto = Roboto_Mono({
  subsets: ["latin"],
});

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export function DropdownMenu() {
  return (
    <Dropdown>
      <MenuButton>Menu</MenuButton>
      <Menu>
        <MenuItem>Men</MenuItem>
        <MenuItem>Women</MenuItem>
        <MenuItem>Kids</MenuItem>
        <MenuItem>Featured</MenuItem>
      </Menu>
    </Dropdown>
  );
}

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

  const productImages = [
    "Product-1.jpg",
    "Product-2.jpg",
    "Product-3.jpg",
    "Product-5.jpg",
  ];

  return (
    <main>
      <nav
        className={`sticky top-0 z-50 flex flex-row w-full h-24 items-center transition-colors duration-300 ${navBg}`}
      >
        <h1 className={`${krona.className} text-4xl ml-4`}>Crank Gear</h1>
        <div className="ml-auto mr-8">
          <img className="w-8 h-8" src="user.png" />
        </div>
        <div className="ml-8 mr-8">
          <img className="w-8 h-8" src="shopping-cart.png" />
        </div>
        <div className="ml-8 mr-8">
          <DropdownMenu />
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
              href="/product"
            >
              View Catalog
            </Button>
          </div>
        </div>
      </section>
      
      <div className="flex flex-row m-16">
        <ImageCarousel
          images={productImages}
          className="max-w-3xl"
          aspectRatio="aspect-square"
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>
      <div className="flex flex-row items-center justify-center p-4 mt-4">
        <img src="2.jpg" className="h-96 w-auto object-cover" />
        <img src="3.jpg" className="h-96 w-auto object-cover" />
        <img src="4.jpg" className="h-96 w-auto object-cover" />
      </div>
    </main>
  );
}
