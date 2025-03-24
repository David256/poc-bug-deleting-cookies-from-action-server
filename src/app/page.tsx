import Login from '@/components/Login'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Steps:</h1>
      <ol>
        <li>
          Click the button <strong>Set cookie</strong>
        </li>
        <li>
          Click the link <strong>Go to private page</strong>
        </li>
        <li>
          Check if you are redirected to the <em>success page</em>
        </li>
      </ol>

      <Login />

      <br />

      <Link href="/private">Go to private page</Link>
    </div>
  )
}
