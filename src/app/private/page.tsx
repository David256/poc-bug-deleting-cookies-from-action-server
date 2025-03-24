import { FunctionComponent } from 'react'
import { checkCookie } from '../actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const PrivatePage: FunctionComponent = async () => {
  const checked = await checkCookie()

  if (!checked) {
    redirect('/success')
  }

  return (
    <div>
      <p>This page should not be displayed.</p>
      <p>
        You have to click the button <strong>Set cookie</strong> before go to
        the private page
      </p>

      <br />

      <Link href="/">Try again</Link>
    </div>
  )
}

export default PrivatePage
