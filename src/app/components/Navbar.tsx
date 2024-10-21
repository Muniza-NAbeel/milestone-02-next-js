import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <>
     <div className="navbar-container">
           <div className="logo">
              <Image 
                 src="/logo.png"
                 alt="logo"
                 width={100}
                 height={100} />
            </div>

      <div className="nav-links">
         <Link href="/" className='nav-link'> Home </Link>
         <Link href="/About" className='nav-link'> About </Link>
         <Link href="/Contact" className='nav-link'> Contact </Link>
      </div>
 </div>
        </>
    );
}
