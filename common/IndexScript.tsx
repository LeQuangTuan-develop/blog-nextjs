'use client'

import { memo } from 'react'
import GoogleTagManager from './GTM'
import { Analytics } from '@vercel/analytics/react';

const IndexTracking = () => {

  if (process.env.NODE_ENV === 'development') return <></>

  return (
    <>
      <GoogleTagManager />
      <Analytics />
    </>
  )
}

export default memo(IndexTracking)