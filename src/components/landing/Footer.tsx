import Link from 'next/link'


export function Footer() {
  return (
    <footer className="border-t mt-28 py-12 text-center text-sm text-gray-500">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          Built by{' '}
          <Link 
            href="https://yuvraj.site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            yuvraj
          </Link>{' '}
        </p>
        <p>
          Zentha-Notepad uses{' '}
          <Link 
            href="https://upstash.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Upstash
          </Link>{' '}
          for storing encrypted data.
        </p>
      </div>
    </footer>
  )
}

