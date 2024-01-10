'use client'

import { Button } from "@nextui-org/button"
import UserIconSvg from "../../icon/UserIconSvg"
import { useState } from "react"
import BzbModal from "./model"


const DEFAULT_MODAL_STATE = false


const OpenLoginModal = ({style = ''}:{style?: string}) => {

  const [isOpen, setIsOpen] = useState(DEFAULT_MODAL_STATE)

  const clickLogin = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={style}>
      <Button isIconOnly color="default" aria-label="login" size="sm" onClick={clickLogin}>
        <UserIconSvg />
      </Button>
      <BzbModal isOpen={isOpen} setIsOpen={setIsOpen} title="Wellcome back, trader!" />
    </div>
  )
}

export default OpenLoginModal