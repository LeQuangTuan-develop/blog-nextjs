import {Button} from "@nextui-org/button";
import CloseIconSvg from '../../icon/CloseIconSvg'

type TDrawer = {
  children: React.ReactNode,
  title: string,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}


const Drawer = ({children, title, isOpen, setIsOpen}: TDrawer) => {

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-100 translate-x-0  "
          : " transition-all delay-100 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-2xl right-0 top-16 absolute bg-gray-50 dark:bg-slate-800 text-gray-700 h-full shadow-xl delay-300 duration-400 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-2xl pb-10 flex flex-col overflow-y-scroll h-full divide-y divide-slate-200">
          <header className="p-4 font-bold text-lg text-gray-700  dark:text-gray-50 flex justify-between">
            <span>{title}</span>
            <Button isIconOnly color="default" variant="ghost" aria-label="close" size="sm" className="ms-auto" onClick={closeDrawer}>
             <CloseIconSvg />
            </Button>
          </header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={closeDrawer}
      ></section>
    </main>
  );
}

export default Drawer