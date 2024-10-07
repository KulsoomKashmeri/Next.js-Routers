import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <Link href="career"><li>Career</li></Link>
      </ul>
      <h1>This is  Home page.</h1>
    </div>
  )
}

export default Home