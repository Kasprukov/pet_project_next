import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-5">
      <Image 
        src="/404.png" 
        alt="404 Not Found" 
        width={300} 
        height={300} 
        className="mb-8"
      />
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg mb-6">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-all duration-200">
        Return Home
      </Link>
    </div>
  );
}
