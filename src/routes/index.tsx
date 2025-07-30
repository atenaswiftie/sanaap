import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { App } from '@wallpay/domains/app/App'
import { isLoggedIn } from '@wallpay/hooks/useAppStore'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  beforeLoad: ({ navigate }) => {
    if (!isLoggedIn()) {
      throw navigate({ to: '/signup' })
    }
  },
})

function RouteComponent() {
  return <App />
}
