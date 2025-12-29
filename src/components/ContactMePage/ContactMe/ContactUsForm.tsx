"use client";
import { useForm } from "react-hook-form";
import TextInput from "../../Reusable/TextInput/TextInput";
import Textarea from "../../Reusable/TextArea/TextArea";
import SelectDropdown from "../../Reusable/SelectDropdown/SelectDropdown";
import Button from "../../Reusable/Button/Button";

type TFormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};
/* eslint-disable react/no-unescaped-entities */
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const handleSendMessage = (data: TFormData) => {
    console.log(data);
  };
  return (
    <div className="bg-white p-5 rounded-xl w-full lg:w-1/2">
      <h2 className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-primary-10 text-center">
        Let's Connect
      </h2>

      <form
        onSubmit={handleSubmit(handleSendMessage)}
        className="flex flex-col gap-5 mt-8"
      >
        <div className="flex gap-5">
          {/* Full Name */}
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.name}
            {...register("name", {
              required: "Full Name is required",
            })}
          />

          {/* Email */}
          <TextInput
            label="Email"
            placeholder="Enter your email"
            type="email"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
        </div>

        {/* Targeted Audience */}
        <SelectDropdown
          label="Service"
          options={[
            "Web Development",
            "App Development",
            "SEO",
            "AI Integration",
            "Redesign",
            "Others",
          ]}
          error={errors.service}
          {...register("service")}
        />

        {/* Message */}
        <Textarea
          label="Massage"
          placeholder="Your Massage.........."
          error={errors.message}
          {...register("message")}
          rows={7}
        />
        <Button
          label="Send Massage"
          className="w-full flex items-center justify-center"
        />
      </form>
      <p className="mt-6 text-neutral-15 font-Inter text-center">
        (I will reach out to you within 6 hours)
      </p>
    </div>
  );
};

export default ContactUsForm;
