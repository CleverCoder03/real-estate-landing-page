import { MapPin } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full px-20 py-5 text-white flex justify-between border-b border-white/50">   
        <div className="lg:text-xl font-medium font-serif grid grid-cols-2">
            Briar & Co.
        </div>
        <div className="gap-8 grid  grid-cols-5 ">
            <Link href={"/"}>Buy</Link>
            <Link href={"/"}>Sell</Link>
            <Link href={"/"}>Properties</Link>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Contact</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2">
                <MapPin /> Miami, FL
            </div>
            <Link href="/">
                Client Login
            </Link>
        </div>
    </div>
  )
}

export default Navbar