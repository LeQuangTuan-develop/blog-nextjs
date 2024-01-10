"use client"

import React, { useEffect, useState } from "react";
import {Switch} from "@nextui-org/switch";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import { useTheme } from "next-themes";

const ThemSwitchIcon = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }
  
  return (
    <Switch
      isSelected={theme === "dark" }
      size="lg"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}

export default ThemSwitchIcon