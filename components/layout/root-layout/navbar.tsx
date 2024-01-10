"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Avatar } from "@nextui-org/avatar";
import { useAuth } from "@context/auth";
import OpenLoginModal from "@components/custom/BzbOpenLoginButton";
import ThemSwitchIcon from "@components/custom/BzbLightDark/LightDarkSwitch";

type TMenuItem = {
  name: string;
  url: string;
  style?: string;
};

const AppNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { userInfo, login, logout, isLogin } = useAuth();

  const onClickItem = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api-v2/me");
      if (response.ok) {
        login(await response.json());
      }
    }
    fetchData();
  }, []);

  const menuItems: TMenuItem[] = [
    {
      name: "Blogs",
      url: "/blog",
    },
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl"> 
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <Link
          className="font-bold text-inherit dark:text-white"
          href="/"
          as={NextLink}
        >
          FxEater
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link
              color={pathname === item.url ? "primary" : "foreground"}
              className="font-semibold"
              href={item.url}
              size="lg"
              as={NextLink}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {isLogin ? (
            <div className="flex">
              {userInfo.avatar && (
                <Dropdown>
                  <DropdownTrigger>
                    <Avatar
                      src={userInfo.avatar}
                      className="w-6 h-6 text-tiny ms-1"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownSection showDivider>
                      <DropdownItem
                        key="profile"
                        textValue="profile"
                        className="h-14 gap-2"
                      >
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold lowercase">{`@${userInfo.username}`}</p>
                      </DropdownItem>
                    </DropdownSection>
                    <DropdownSection>
                      <DropdownItem
                        key="logout"
                        textValue="logout"
                        className=" text-danger"
                        color="danger"
                        onClick={logout}
                      >
                        Logout
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              )}
              <span className="ms-1">{userInfo.username}</span>
            </div>
          ) : (
            <OpenLoginModal />
          )}
        </NavbarItem>
        <NavbarItem>
          <ThemSwitchIcon />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={pathname === item.url ? "primary" : "foreground"}
              className="font-semibold w-full"
              href={item.url}
              size="lg"
              as={NextLink}
              onClick={onClickItem}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavBar;
