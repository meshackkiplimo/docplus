"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import  SubmitButton from "../SubmitButton"
import {
  Form,
  
} from "@/components/ui/form"
import CustomFormFiled from "../CustomFormFiled"
import { useState } from "react"

export enum FormFieldType{
  INPUT ='input',
  TEXTAREA ='textarea',
  PHONE_INPUT='phoneInput',
  CHECKBOX ='checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',

  

  
  
}


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
const PatientForm = () => {
const [isLoading,setIsLoading] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className = "mb-12 space-y-4" >
        <h1 className="header" >Hi their</h1>
       <p className="text-dark-700" >schedule your appointment</p>


      </section>
      <CustomFormFiled
      fieldType = {FormFieldType.INPUT}
      control={form.control}

      name="name"
      label= "Full Name"
      placeholder = "John Doe"
      iconSrc="/assets/icons/user.svg"
      iconAlt="user"

      
      />
      <CustomFormFiled
      fieldType = {FormFieldType.INPUT}
      control={form.control}

      name="email"
      label= "Email"
      placeholder = "Johndoe@gmail.com"
      iconSrc="/assets/icons/email.svg"
      iconAlt="email"

      
      />
      <CustomFormFiled
      fieldType = {FormFieldType.PHONE_INPUT}
      control={form.control}

      name="phone"
      label= "phone number"
      placeholder = "(254) 222-222-222"
      

      
      />
     <SubmitButton
     isLoading={isLoading}
     >Get Started 
     </SubmitButton>
    </form>
  </Form>
  )
}
export default PatientForm
