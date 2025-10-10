"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@src/components/ui/dialog";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";
import { Button } from "@src/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@src/components/ui/select";
import { Icon } from "@iconify/react";

export default function ContactModal({
  open,
  onOpenChange,
  onSuccess, // 👈 add callback
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void; // 👈 notify parent when form is successful
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false); // close modal first 👈
    setTimeout(() => onSuccess(), 200); // show notification after closing
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-6 md:p-10 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/tech-image.png"
              alt="Support"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col">
            <DialogHeader className="mb-4">
              <DialogTitle className="flex items-center text-xl font-semibold text-gray-800">
                <Icon icon="mdi:headset" className="mr-2 text-primary" />
                Contact TruthHub Support
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="billing">Billing Inquiry</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Type your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />

              <Button
                type="submit"
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
