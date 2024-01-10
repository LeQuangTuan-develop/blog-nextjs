'use client'

import { useState } from 'react'
import './RealtimePrice.css'
import './Drawer'
import Drawer from './Drawer'
import ChartIconSvg from '../../icon/ChartIconSvg'
import { Button } from '@nextui-org/react'

const URL = {
  fx: 'https://www.widgets.investing.com/live-currency-cross-rates?theme=lightTheme&hideTitle=true&roundedCorners=true&pairs=1,3,2,4,5,7',
  crypto: 'https://www.widgets.investing.com/top-cryptocurrencies?theme=lightTheme&hideTitle=true&roundedCorners=true&cols=priceUsd,chg24,chg7'
}

const Realtime = ({styling = '', type = 'fx'}:{styling?: string, type?: 'fx' | 'crypto'}) => {

  return (
    <>
      <div className={`${styling} live__currency rounded-lg`}>
        <iframe
          src={URL[type]}
          width="100%" height="100%" frameBorder="0" marginWidth={0} marginHeight={0} title={`fxeater real time data for ${type}`}></iframe>
      </div>
    </>
  )
}

const RealtimePrice = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (  
  <>
    <Button color="default" variant="faded" aria-label="Market Data" onClick={()=>setIsOpen(!isOpen)}  endContent={<ChartIconSvg />}>
      Market Data
    </Button>

    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='flex flex-col p-4 justify-items-center gap-6 mb-6'>
        <Realtime styling='fx'/>
        <Realtime styling='crypto' type='crypto'/>
      </div>
    </Drawer>
  </>
  )
}

export default RealtimePrice