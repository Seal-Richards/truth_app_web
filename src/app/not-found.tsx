'use client'

import Link from 'next/link'
import { Button } from '@src/components/ui/button'
import { Ghost } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <div className="w-[400px] md:w-[500px] lg:w-[600px] text-center border rounded-xl shadow-lg bg-white/70 backdrop-blur-md p-12 animate-in fade-in zoom-in-90 duration-500">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex justify-center items-center w-36 h-36 rounded-full bg-gradient-to-b from-[#2780fc] to-[#ffffff]  text-zinc-700 ">
        <Ghost size={60} className="animate-pulse" />
        </div>

        <h1 className="text-7xl font-extrabold text-[#1A1A1A] tracking-tight">404</h1>
        <p className="mt-4 text-xl font-medium text-gray-700">Oops! Page Not Found</p>

        <div className="mt-8">
          <Link href="/" passHref>
            <Button
              variant="outline"
				  className="w-48 rounded-md bg-amber-500 text-black hover:bg-white hover:text-[#041737] shadow-lg"
            >
              Back to Home →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
