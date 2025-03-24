'use server'

import { cookies } from 'next/headers'

const COOKIE_KEY = 'poc'

export async function setCookie(value: string) {
  const cookieStore = await cookies()

  cookieStore.set(COOKIE_KEY, value)
}

export async function checkCookie() {
  const cookieStore = await cookies()

  const value = await cookieStore.get(COOKIE_KEY)?.value

  if (!value) {
    console.warn('You have to set the cookie before!!')
    return true
  }

  // ...

  // For some reason, we need delete the cookie
  cookieStore.delete(COOKIE_KEY)

  return false
}
