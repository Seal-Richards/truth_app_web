'use client';

import { Button } from '@src/components/ui/button';
import { Input } from '@src/components/ui/input';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsLetterSection() {
   const [email, setEmail] = useState('');
   const [submitting, setSubmitting] = useState(false);

   const handleSubscribe = async () => {
      if (!email.trim()) {
         toast.error('Please enter your email address.');
         return;
      }

      setSubmitting(true);

      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('b_01fd22c1a0d13a09ec4ed2534_41979459af', '');

      try {
         await fetch(
            'https://truthhub.us13.list-manage.com/subscribe/post?u=01fd22c1a0d13a09ec4ed2534&id=41979459af',
            {
               method: 'POST',
               mode: 'no-cors',
               body: formData,
            }
         );

         toast.success('Successfully subscribed to the newsletter!');
         setEmail('');
      } catch (error) {
         toast.error('Subscription failed. Please try again later.');
      } finally {
         setSubmitting(false);
      }
   };

   return (
      <section className="relative w-full py-24 overflow-hidden bg-gradient-to-r from-[#10443D] via-[#132F2B] to-[#0F3D3A] flex flex-col items-center justify-center text-center px-6">
         <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10 leading-snug max-w-3xl">
            Join our waitlist today for exclusive early access.
         </h2>

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
               disabled={submitting}
               className="w-full sm:w-auto h-14 px-8 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium transition-all disabled:opacity-50"
            >
               {submitting ? 'Submitting...' : 'Subscribe'}
            </Button>
         </div>
      </section>
   );
}
