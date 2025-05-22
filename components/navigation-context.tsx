
"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type NavigationContextType = {
  activeSection: string
  setActiveSection: (section: string) => void
}

const NavigationContext = createContext<NavigationContextType>({
  activeSection: "Mira",
  setActiveSection: () => {},
})

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("Mira")

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
