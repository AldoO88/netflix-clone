"use server"

import { signIn } from "@/auth"
import { signInSchema } from "@/lib/zos"
import { AuthError } from "next-auth"
import { z } from "zod"

export const login = async (values: z.infer<typeof signInSchema>) => {
  const validatedFields = signInSchema.safeParse(values);

  if(!validatedFields.success) {
    return { error: "invalid fields!"}
  }
  const { email, password } = validatedFields.data; 

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/profiles"
    })

    return { success: true}
    
  } catch (error) {
    if(error instanceof AuthError) {
      switch (error.type){
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" }
        default:
          return { error: "Something went wrong!" }
      }
    }
  }
}