'use client';

import { Button } from '@src/components/ui/button';
import { Input } from '@src/components/ui/input';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsLetterSection() {
   const [email, setEmail] = useState('');

   const handleSubscribe = () => {
      if (!email.trim()) {
         toast.error('Please enter your email address.');
         return;
      }

      // Simulate API subscription
      toast.success('Successfully subscribed to the waitlist!');
      setEmail('');
   };

   return (
      <section className="relative w-full py-24 overflow-hidden bg-gradient-to-r from-[#10443D] via-[#132F2B] to-[#0F3D3A] flex flex-col items-center justify-center text-center px-6">


         {/* Main heading */}
         <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10 leading-snug max-w-3xl">
            Join our waitlist today for exclusive early access.
         </h2>

         {/* Input + Button */}
         <div className="flex flex-col sm:flex-row items-center w-full max-w-md gap-4">
            <div className="relative w-full">
               <Icon
                  icon="mdi:email-outline"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"
               />
               <Input
                  type="email"
                  placeholder="Enter your mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 w-full h-14 rounded-xl bg-white text-gray-800 text-base placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-teal-400"
               />
            </div>
            <Button
               size="lg"
               onClick={handleSubscribe}
               className="w-full sm:w-auto h-14 px-8 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium transition-all"
            >
               Subscribe
            </Button>
         </div>
      </section>
   );
}
