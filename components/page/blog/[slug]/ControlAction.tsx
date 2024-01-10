'use client'

import { IToCData, TocModal } from "@components/custom/BzbTOC";
import CommentSvg from "@components/icon/CommentSvg";
import LikeSvg from "@components/icon/LikeSvg";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useState } from "react";

const ControlAction = ({data}:{data:IToCData[]}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <ButtonGroup>
      <Button isIconOnly disabled>
        <LikeSvg />
      </Button>
      <Button isIconOnly disabled >
        <CommentSvg />
      </Button>
      <Button  onClick={() => setIsOpen(!isOpen)}>
        Table of content
      </Button>
    </ButtonGroup>
    <TocModal data={data} isOpen={isOpen} setIsOpen={setIsOpen} title="Table of content"/>
    </>
  );
}

export default ControlAction;