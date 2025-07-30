import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Signup } from '@wallpay/domains/signup'

export const Route = createLazyFileRoute('/signup/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Signup />
}
