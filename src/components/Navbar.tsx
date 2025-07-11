import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'

export function Navbar () {
  return (
    <nav className='container mx-auto flex justify-between py-5'>
      <Link href='/'>
        <h1>NextAuth App</h1>
      </Link>
      <ThemeSwitch />
    </nav>
  )
}
