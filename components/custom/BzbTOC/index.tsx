'use client'

import Link from "next/link"
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useState } from "react";


export interface IToCData {
  name: string
  eleId: string
}

type TProps ={
  tocData:IToCData[]
}

type TModal = {
  data: IToCData[],
  title: string,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}

const TableOfContent = (data : TProps) => {
  return (
    <>
      <ul className="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-sm">
        <li>
          {
            data.tocData.map(item => {
              return (
                <Link href={`#${item.eleId}`} className="hover:text-primary block leading-[1.6] font-medium mb-2" key={item.name}>
                  {item.name}
                </Link>
              )
            })
          }
        </li>
      </ul>
    </>
  )
}

const TocModal = ({data, title, isOpen, setIsOpen}: TModal) => {

  const onClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody onClick={onClose}>
                <TableOfContent tocData={data} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

const ShowTocButton = (data:TProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Table of content
      </Button>
      <TocModal data={data.tocData} isOpen={isOpen} setIsOpen={setIsOpen} title="Table of content"/>
    </>
  )
}

export {TableOfContent, TocModal, ShowTocButton }