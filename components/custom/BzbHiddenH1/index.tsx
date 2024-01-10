'use client'

import {css} from '@emotion/react'
import styled from '@emotion/styled'

const dynamicStyle = 
  css`
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
  `

const H1 = styled.h1`
    ${dynamicStyle}
  `

export default function BzbHiddenH1({text}: {text?: string}) {
  return (
    <H1>{text ?? 'Bazabean'}</H1>
  )
}
