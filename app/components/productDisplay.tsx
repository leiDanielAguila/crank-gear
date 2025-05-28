import { ImageCarousel } from "./carousel";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { useState } from "react";

export default function ProductGroup() {
  const productImages = [
    "Product-1.jpg",
    "Product-2.jpg",
    "Product-3.jpg",
    "Product-5.jpg",
  ];

  const [expanded, setExpanded] = useState<string | false>('panel1');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
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
        <Accordion expanded={expanded == 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary>Eco Trek Backpack</AccordionSummary>
          <AccordionDetails>
            Crafted for the conscious adventurer, the Eco Trek Backpack blends
            rugged durability with modern sustainability. Made from 100%
            recycled materials, this versatile pack is designed to withstand
            harsh weather and rough trails while minimizing environmental
            impact. With an ergonomic frame, padded laptop sleeve, and multiple
            gear loops, its perfect for mountain hikes or daily commutes.
            Adventure responsibly, one trail at a time.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded == 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary>TrailLite Duffle</AccordionSummary>
          <AccordionDetails>
            Whether it’s a weekend getaway or a gym session before work, the
            TrailLite Duffle is your go-to companion. Lightweight yet incredibly
            durable, it features weather-resistant canvas, a recycled mesh
            interior, and detachable shoulder straps. Multiple compartments keep
            your gear organized, while its collapsible design makes it easy to
            store. Travel light. Travel right.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded == 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary>Summit Shell Pants</AccordionSummary>
          <AccordionDetails>
            Built for movement and made to last, the Summit Shell Pants offer
            all-weather protection without the bulk. Designed with hikers and
            climbers in mind, these pants feature reinforced knees,
            moisture-wicking fabric, and side-vent zippers for rapid temperature
            control. Made from recycled performance fibers, they balance stretch
            and strength so you can move freely across any terrain.
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded == 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary>StormGuard Parka</AccordionSummary>
          <AccordionDetails>
            The StormGuard Parka is engineered to take on the toughest climates
            while leaving a light footprint. Featuring a waterproof outer shell
            made from repurposed ocean plastics, this coat is both
            wind-resistant and breathable. With reinforced seams, thermal
            lining, and a high-coverage hood, it ensures warmth and comfort in
            unpredictable weather. Ideal for explorers who refuse to compromise
            between performance and planet care.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
