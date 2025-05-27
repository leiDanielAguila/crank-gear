
import { Roboto_Mono } from "next/font/google";
import { Krona_One } from "next/font/google";
import { DropdownMenu } from "../page";


const roboto = Roboto_Mono({
  subsets: ["latin"],
});

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});
export default function Product() {
  return (
    <>
      <nav className="flex flex-row w-full h-24 items-center">
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
    </>
  );
}
