import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/men" className="hover:underline">
                Men
              </Link>
            </li>
            <li>
              <Link href="/women" className="hover:underline">
                Women
              </Link>
            </li>
            <li>
              <Link href="/kids" className="hover:underline">
                Kids
              </Link>
            </li>
            <li>
              <Link href="/featured" className="hover:underline">
                Featured
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="hover:underline">
                View Catalog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:support@crankgear.com" className="hover:underline">
              support@crankgear.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +1 (234) 567-890
            </a>
          </p>
          <p>Mon–Fri: 9am – 5pm PST</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">About Crank Gear</h3>
          <p className="text-sm">
            Dedicated to sustainable exploration, Crank Gear Supply Co. designs
            high-performance gear that respects the planet and empowers the
            wild-hearted.
          </p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Crank Gear Supply Co. All rights
        reserved.
      </div>
    </footer>
  );
}
