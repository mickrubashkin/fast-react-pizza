import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import Loader from '../ui/Loader'

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      {/* {isLoading && <Loader />} */}
      {true && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}
