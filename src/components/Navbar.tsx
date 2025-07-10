import Link from "next/link";

export function Navbar () {
  return (
    <nav className='flex justify-between'>
      <Link href='/'>Home</Link>
      <Link href='/profile'>Profile</Link>
    </nav>
  )
}
