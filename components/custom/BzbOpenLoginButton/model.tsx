import { ReactNode, useState } from "react";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";
import {  Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import MailIcon from "@components/icon/MailIcon";
import LockIcon from "@components/icon/LockIcon";
import { useAuth } from "@context/auth";

type TModal = {
  // children: React.ReactNode,
  title: string,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}

type TLoginInfo = {
  email: string;
  password: string;
}


const LoginForm = ({setLoginInfo}: {setLoginInfo: (loginInfo: TLoginInfo) => void}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event:any) => {
    setUsername(event.target.value);
    setLoginInfo({email: event.target.value, password: password})
  }

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
    setLoginInfo({email: username, password: event.target.value})
  }

  return (
    <>
      <Input
        autoFocus
        endContent={
          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Email"
        placeholder="Enter your email"
        variant="bordered"
        value={username} onChange={handleUsernameChange}
      />
      <Input
        endContent={
          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
        value={password}
        onChange={handlePasswordChange}
      />
    </>
  )
}

const BzbModal = ({title, isOpen, setIsOpen}: TModal) : ReactNode => {

  const [loginInfo, setLoginInfo] = useState<TLoginInfo>()
  const {login} = useAuth()

  const onClose = () => {
    setIsOpen(!isOpen)
  }

  const fetchData = async () => {
    const response = await fetch('/api-v2/me');
    if (response.ok) { 
      login(await response.json())
    }
  }

  const onLogin = async () => {
    // handle api call to login
    const res = await fetch('/api-v2/login',{
      method: 'POST',
      body: JSON.stringify(loginInfo),
    })

    // authen OK
    if(res.ok){ 
      // update state of the app
      await fetchData();
      setIsOpen(false)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <LoginForm setLoginInfo={setLoginInfo}/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={onLogin}>
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default BzbModal