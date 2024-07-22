import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="
    min-h-screen
    bg-gradient-to-r from-black to zinc-800  text-white " >
      <h1 className="font-black"> MasterClass Next</h1>
      <nav className="flex flex-col">
        <a href="/first">First Component</a>
        <Link href="/flexbox">FlexBox</Link>
      </nav>
    </div>
  )
}
