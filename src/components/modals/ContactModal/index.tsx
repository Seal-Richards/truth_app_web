"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@src/components/ui/dialog";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";
import { Button } from "@src/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@src/components/ui/select";
import { Icon } from "@iconify/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ✅ Yup Validation Schema
const contactSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .matches(/^[0-9+()\-\s]+$/, "Invalid phone number")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  service: yup.string().required("Please select a service"),
  message: yup.string().required("Message cannot be empty"),
});

export default function ContactModal({
  open,
  onOpenChange,
  onSuccess,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onTouched",
  });

  // ✅ Submit Handler — same Mailchimp logic as your Newsletter
  const onSubmit = async (data: any) => {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("FNAME", data.firstName);
    formData.append("LNAME", data.lastName);
    formData.append("EMAIL", data.email);
    formData.append("PHONE", data.phone);
    formData.append("MMERGE7", data.service); // select field
    formData.append("MMERGE3", data.message);
    formData.append("b_01fd22c1a0d13a09ec4ed2534_41979459af", ""); // honeypot

    try {
      // 👇 Replace with your Mailchimp form action URL
      await fetch(
        "https://truthhub.us13.list-manage.com/subscribe/post?u=01fd22c1a0d13a09ec4ed2534&id=41979459af",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      reset();
      onOpenChange(false);
      setTimeout(() => onSuccess(), 300);
    } catch (error) {
      console.error("Mailchimp error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Input placeholder="First Name" {...register("firstName")} />
                  {errors.firstName && (
                    <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Input placeholder="Last Name" {...register("lastName")} />
                  {errors.lastName && (
                    <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Input placeholder="Phone Number" {...register("phone")} />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <Input type="email" placeholder="Email Address" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Select onValueChange={(v) => setValue("service", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Billing Inquiry">Billing Inquiry</SelectItem>
                    <SelectItem value="Technical Support">Technical Support</SelectItem>
                    <SelectItem value="General Support">General Support</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Type your message here..."
                  rows={4}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
