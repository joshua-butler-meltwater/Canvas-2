
import * as React from "react"
import { cn } from "../../lib/utils"

// Simplified dropdown menu components without radix-ui dependency

export interface DropdownMenuProps {
  children: React.ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="relative inline-block">{children}</div>
}

export interface DropdownMenuTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, asChild, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ref: ref,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        children.props.onClick?.(e);
        props.onClick?.(e);
      },
    });
  }
  
  return (
    <button
      type="button"
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export interface DropdownMenuContentProps {
  children: React.ReactNode
  className?: string
  align?: "start" | "center" | "end"
}

export function DropdownMenuContent({ children, className, align = "center" }: DropdownMenuContentProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  React.useEffect(() => {
    const handleOutsideClick = () => setIsOpen(false)
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])
  
  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
    end: "right-0"
  }
  
  return (
    <div 
      className={cn(
        "absolute z-50 mt-2 rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
        alignmentClasses[align],
        className
      )}
    >
      {children}
    </div>
  )
}

export interface DropdownMenuLabelProps {
  children: React.ReactNode
  className?: string
}

export function DropdownMenuLabel({ children, className }: DropdownMenuLabelProps) {
  return <div className={cn("px-2 py-1.5 text-sm font-semibold", className)}>{children}</div>
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-border" />
}

export interface DropdownMenuGroupProps {
  children: React.ReactNode
}

export function DropdownMenuGroup({ children }: DropdownMenuGroupProps) {
  return <div className="flex flex-col gap-0.5">{children}</div>
}

export interface DropdownMenuItemProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function DropdownMenuItem({ children, className, onClick }: DropdownMenuItemProps) {
  return (
    <button
      className={cn(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
