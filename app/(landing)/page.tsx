import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div>LandingPage (unprotected)
    <div>
      <Link href={'/sign-in'}>
      <Button>
        Login
      </Button>
      </Link>
      <Link href={'/sign-up'}>
      <Button>
        Sign In
      </Button>
      </Link>
    </div>

    </div>
  )
}

export default LandingPage