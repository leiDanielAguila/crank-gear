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
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import ListDivider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";

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
      <MenuButton size="lg">Menu</MenuButton>
      <Menu size="lg">
        <MenuItem>
          <ListItemDecorator />
          Men
          <ListItemDecorator />
        </MenuItem>

        <MenuItem>
          <ListItemDecorator />
          Women
          <ListItemDecorator />
        </MenuItem>

        <MenuItem>
          <ListItemDecorator />
          Kids
          <ListItemDecorator />
        </MenuItem>

        <MenuItem>
          <ListItemDecorator />
          Featured
          <ListItemDecorator />
        </MenuItem>
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
          className="max-w-xl shadow-2xl mr-16"
          aspectRatio="aspect-square"
          autoPlay={true}
          autoPlayInterval={4000}
        />
        <AccordionGroup
          className="w-1/2 ml-8"
          sx={{ maxWidth: "100%" }}
          size="lg"
          transition="0.1s ease"
        >
          <Accordion>
            <AccordionSummary>Eco Trek Backpack</AccordionSummary>
            <AccordionDetails>
              Crafted for the conscious adventurer, the Eco Trek Backpack blends
              rugged durability with modern sustainability. Made from 100%
              recycled materials, this versatile pack is designed to withstand
              harsh weather and rough trails while minimizing environmental
              impact. With an ergonomic frame, padded laptop sleeve, and
              multiple gear loops, it's perfect for mountain hikes or daily
              commutes. Adventure responsibly, one trail at a time.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>TrailLite Duffle</AccordionSummary>
            <AccordionDetails>
              Whether it’s a weekend getaway or a gym session before work, the
              TrailLite Duffle is your go-to companion. Lightweight yet
              incredibly durable, it features weather-resistant canvas, a
              recycled mesh interior, and detachable shoulder straps. Multiple
              compartments keep your gear organized, while its collapsible
              design makes it easy to store. Travel light. Travel right.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Summit Shell Pants</AccordionSummary>
            <AccordionDetails>
              Built for movement and made to last, the Summit Shell Pants offer
              all-weather protection without the bulk. Designed with hikers and
              climbers in mind, these pants feature reinforced knees,
              moisture-wicking fabric, and side-vent zippers for rapid
              temperature control. Made from recycled performance fibers, they
              balance stretch and strength so you can move freely across any
              terrain.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>StormGuard Parka</AccordionSummary>
            <AccordionDetails>
              The StormGuard Parka is engineered to take on the toughest
              climates while leaving a light footprint. Featuring a waterproof
              outer shell made from repurposed ocean plastics, this coat is both
              wind-resistant and breathable. With reinforced seams, thermal
              lining, and a high-coverage hood, it ensures warmth and comfort in
              unpredictable weather. Ideal for explorers who refuse to
              compromise between performance and planet care.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </div>

      <div className="flex flex-col items-center justify-center p-8 mt-4 text-center space-y-4">
        <p className={`${krona.className} text-3xl font-bold`}>
          Our Mission: Gear That Goes Further
        </p>
        <p className="text-lg text-gray-700 m-8">
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
      <div className="flex flex-row">

      </div>
    </main>
  );
}
