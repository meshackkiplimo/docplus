"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import  SubmitButton from "../SubmitButton"
import { UserFormValidation } from "@/lib/validation";
import {useRouter} from "next/navigation"
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



const PatientForm = () => {
  const router  = useRouter()
const [isLoading,setIsLoading] = useState(false)


  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
    //   const userData = {name,email,phone}
    //  const user = await createUser(userData)
    //  if (user) router.push(`/patients/${user.$id}/register`)
      
      
      
      
    } catch (error) {
      console.log(error)

      
    }

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
