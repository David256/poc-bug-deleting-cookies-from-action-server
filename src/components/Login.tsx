'use client'

import { setCookie } from '@/app/actions'
import { FunctionComponent } from 'react'

const Login: FunctionComponent = () => {
  const handleClick = async () => {
    await setCookie('old-value')

    alert('All right. Next step!')
  }

  return <button onClick={handleClick}>Set cookie</button>
}

export default Login
