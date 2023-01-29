/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
// import img from '../'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-900">
      <nav className="border-b p-6">
        <p className="text-4xl font-bold text-white">🍊Cryptorganic
        <input
          placeholder="Search"
          className="mt-1 border rounded p-1 float-right text-2xl bg-gray-800 text-white"
        />
        
        </p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-yellow-600">
              Buy
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-yellow-600">
              Sell
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-yellow-600">
              My Purchased Orders
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-yellow-600">
              My Open Orders
            </a>
          </Link>
        </div>
      </nav>
      
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp