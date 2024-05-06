"use client"
import React, { useEffect } from 'react'

function LoginPage() {
  return (
    <div className='flex item-center justify-center w-full h-full bg-muted/40'>
      <LoginForm />
    </div>
  )
}

export default LoginPage


import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState, useFormStatus } from 'react-dom'
import { LoginAction } from '@/app/(backend)/actions/auth/loginAction'
import { AlertCircle, Loader2 } from 'lucide-react'
// import { registerAction } from '@/app/(backend)/actions/registerAction'
import { redirect, useRouter } from 'next/navigation'

export function LoginForm() {
  const [state, dispatch] = useFormState(LoginAction, null)
  if (state?.success) {
    redirect("/panel/dashboard");
  }

  return (
    <Card className=" m-auto max-w-sm  ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              name="username"
              type="text"
              placeholder="Username"
              required
            />
            <p className='text-destructive text-xs ml-3'>{state?.error?.username}</p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input placeholder='******' name="password" type="password" required />
            <p className='text-destructive text-xs ml-3'>{state?.error?.password}</p>

          </div>
          {state?.autherror && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              <p>{state?.autherror}</p>
            </div>
          )}
          <SubmitButton title='Login' />

        </form>
        <div className="mt-4 text-center text-sm">
          <Link href="#" className="ml-auto inline-block text-sm underline">
            Forgot your password?
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}



const SubmitButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" /> Loading...
        </>
      ) : (
        title
      )}
    </Button>
  );
};