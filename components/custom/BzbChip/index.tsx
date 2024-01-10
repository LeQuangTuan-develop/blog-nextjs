'use client'

import {css} from '@emotion/react'
import styled from '@emotion/styled'
import { memo } from 'react'

const dynamicStyle = 
  css`
  height: 15px;
  border-radius: 5px;
  padding: 2px 8px;
  font-size: 12px;
`

const Chip = styled.span`
  ${dynamicStyle}
`

interface IChip {
  label: string
  className?:string
}

const BzbChip = (props:IChip) => {
  const {label, className} = props
  return (
    <Chip className={className ?? ''}> 
      {label}
    </Chip>
  )
}

export default memo(BzbChip)