
import * as React from "react"
import {
  Home,
  Compass,
  Activity,
  BarChart2,
  Users,
  MessageSquare,
  Network,
  TrendingUp,
  FileText,
  Bell,
  Settings,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Pin,
  Search,
  Grid,
  HelpCircle,
  LogOut,
  UserCircle,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { cn } from "../lib/utils"
import { useNavigation } from "./navigation-context"
import { ToolBar } from "./ToolBar"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

// ==================== TYPES ====================

type NavItem = {
  title: string
  icon: React.ElementType | (() => React.ReactNode)
  href: string
  isActive?: boolean
  children?: NavItem[]
  badge?: {
    text: string
    variant: string
  }
}

interface AppNavigationProps {
  companyName?: string
  userName?: string
  className?: string
  children?: React.ReactNode
  toolbarProps?: {
    onToggleHistory?: () => void
  }
}

// ==================== SHARED COMPONENTS ====================

// Inline SVG implementation for Meltwater logo
const MeltwaterLogo = () => (
  <svg width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <g clipPath="url(#clip0_6451_45876)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7739 0.261475C23.0493 0.261475 26.5158 3.7259 26.5158 8.00211C26.5158 12.2779 23.0493 15.7432 18.7739 15.7432C14.4973 15.7432 11.0328 12.2779 11.0328 8.00211C11.0328 3.7259 14.4973 0.261475 18.7739 0.261475ZM18.7739 11.32C20.6063 11.32 22.0922 9.83537 22.0922 8.00211C22.0922 6.16969 20.6063 4.68505 18.7739 4.68505C16.9406 4.68505 15.4573 6.16969 15.4573 8.00211C15.4573 9.83537 16.9406 11.32 18.7739 11.32ZM33.0328 8.35032C32.2299 9.39453 31.2606 10.4232 30.2918 11.3975C28.6088 13.0981 26.7006 14.584 24.7794 15.7432H30.4076C33.3213 13.6421 35.8951 10.8219 37.5739 8.00211C35.8951 5.18316 33.3213 2.36295 30.4076 0.261475H24.7794C26.7006 1.42063 28.6088 2.90695 30.2918 4.60758C31.2606 5.5819 32.2299 6.61011 33.0328 7.65474V7.65769C33.1086 7.75242 33.1554 7.87032 33.1554 8.00084C33.1554 8.13095 33.1086 8.24926 33.0328 8.34358V8.35032ZM4.51536 8.35032C5.31789 9.39453 6.28799 10.4232 7.25684 11.3975C8.93894 13.0981 10.848 14.584 12.7693 15.7432H7.14105C4.22694 13.6421 1.65263 10.8219 -0.0252686 8.00211C1.65263 5.18316 4.22694 2.36295 7.14105 0.261475H12.7693C10.848 1.42063 8.93894 2.90695 7.25684 4.60758C6.28799 5.5819 5.31789 6.61011 4.51536 7.65474V7.65769C4.43957 7.75242 4.39326 7.87032 4.39326 8.00084C4.39326 8.13095 4.43957 8.24926 4.51536 8.34358V8.35032Z"
        fill="#28BBBB"
      />
    </g>
    <defs>
      <clipPath id="clip0_6451_45876">
        <rect width="37.4737" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

// Replace the MiraLogo component with this inline SVG implementation
const MiraLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="10" fill="url(#mira-logo-gradient)" />
    <g clipPath="url(#mira-logo-clip)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0159 7.11426C11.8413 7.11426 13.3214 8.62994 13.3214 10.5008C13.3214 12.3714 11.8413 13.8875 10.0159 13.8875C8.18989 13.8875 6.7107 12.3714 6.7107 10.5008C6.7107 8.62994 8.18989 7.11426 10.0159 7.11426ZM10.0159 11.9524C10.7982 11.9524 11.4327 11.3028 11.4327 10.5008C11.4327 9.6991 10.7982 9.04957 10.0159 9.04957C9.23312 9.04957 8.59977 9.6991 8.59977 10.5008C8.59977 11.3028 9.23312 11.9524 10.0159 11.9524ZM16.104 10.6531C15.7611 11.11 15.3473 11.56 14.9336 11.9863C14.2151 12.7303 13.4003 13.3804 12.58 13.8875H14.9831C16.2271 12.9683 17.3261 11.7344 18.0428 10.5008C17.3261 9.26749 16.2271 8.03365 14.9831 7.11426H12.58C13.4003 7.62139 14.2151 8.27165 14.9336 9.01568C15.3473 9.44194 15.7611 9.89178 16.104 10.3488V10.3501C16.1363 10.3915 16.1563 10.4431 16.1563 10.5002C16.1563 10.5572 16.1363 10.6089 16.104 10.6502V10.6531ZM3.92795 10.6531C4.27061 11.11 4.68481 11.56 5.09847 11.9863C5.81667 12.7303 6.63177 13.3804 7.45209 13.8875H5.04903C3.80481 12.9683 2.70566 11.7344 1.98926 10.5008C2.70566 9.26749 3.80481 8.03365 5.04903 7.11426H7.45209C6.63177 7.62139 5.81667 8.27165 5.09847 9.01568C4.68481 9.44194 4.27061 9.89178 3.92795 10.3488V10.3501C3.89559 10.3915 3.87582 10.4431 3.87582 10.5002C3.87582 10.5572 3.89559 10.6089 3.92795 10.6502V10.6531Z"
        fill="white"
      />
    </g>
    <defs>
      <radialGradient
        id="mira-logo-gradient"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20 1.19209e-06) rotate(135) scale(28.2843)"
      >
        <stop stopColor="#28BBBB" />
        <stop offset="1" stopColor="#B627A1" />
      </radialGradient>
      <clipPath id="mira-logo-clip">
        <rect width="16" height="7" fill="white" transform="translate(2 7)" />
      </clipPath>
    </defs>
  </svg>
)

// Update the navItems array to reflect the new structure
// Make sure Content appears above Account and Mira is a root-level item at the bottom
const navItems: NavItem[] = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Explore",
    icon: Compass,
    href: "/explore",
  },
  {
    title: "Explore+",
    icon: TrendingUp,
    href: "/explore-plus",
    children: [
      {
        title: "Analytics",
        href: "/explore-plus/analytics",
      },
      {
        title: "Insight Pages",
        href: "/explore-plus/insight-pages",
      },
      {
        title: "Assets",
        href: "/explore-plus/assets",
      },
    ],
  },
  {
    title: "Monitor",
    icon: Activity,
    href: "/monitor",
  },
  {
    title: "Analyze",
    icon: BarChart2,
    href: "/analyze",
  },
  {
    title: "Media Relations",
    icon: Users,
    href: "/media-relations",
    children: [
      {
        title: "Media Lists",
        href: "/media-relations/lists",
      },
      {
        title: "Search",
        href: "/media-relations/search",
      },
      {
        title: "Outreach",
        href: "/media-relations/outreach",
      },
      {
        title: "PR Assistant",
        href: "/media-relations/assistant",
      },
    ],
  },
  {
    title: "Engage",
    icon: MessageSquare,
    href: "/engage",
    children: [
      {
        title: "Conversations",
        href: "/engage/conversations",
      },
      {
        title: "Publish",
        href: "/engage/publish",
      },
      {
        title: "Asset Library",
        href: "/engage/asset-library",
      },
      {
        title: "Measure",
        href: "/engage/measure",
      },
      {
        title: "Advertise",
        href: "/engage/advertise",
        badge: {
          text: "Beta",
          variant: "purple",
        },
      },
    ],
  },
  {
    title: "Author Segments",
    icon: Network,
    href: "/author-segments",
  },
  {
    title: "Report",
    icon: FileText,
    href: "/report",
    children: [
      {
        title: "Digest reports",
        href: "/report/digest",
      },
      {
        title: "Insight reports",
        href: "/report/insight",
      },
    ],
  },
  {
    title: "Alert",
    icon: Bell,
    href: "/alert",
  },
  {
    title: "Content",
    icon: FileText,
    href: "/content",
    children: [
      {
        title: "Tags",
        href: "/content/tags",
      },
      {
        title: "Automation",
        href: "/content/automation",
        badge: {
          text: "New",
          variant: "purple",
        },
      },
      {
        title: "Incoming RSS feeds",
        href: "/content/rss-feeds",
      },
      {
        title: "Added content",
        href: "/content/added-content",
      },
      {
        title: "Labels",
        href: "/content/labels",
      },
      {
        title: "Newsfeeds",
        href: "/content/newsfeeds",
      },
    ],
  },
  {
    title: "Account",
    icon: Settings,
    href: "/account",
    children: [
      {
        title: "Profile",
        href: "/account/profile",
      },
      {
        title: "Manage users",
        href: "/account/manage-users",
      },
      {
        title: "Workspaces",
        href: "/account/workspaces",
      },
      {
        title: "Sources",
        href: "/account/sources",
      },
      {
        title: "Third party integrations",
        href: "/account/integrations",
      },
      {
        title: "Meltwater API",
        href: "/account/api",
      },
      {
        title: "Social connections",
        href: "/account/social-connections",
      },
      {
        title: "Approved senders",
        href: "/account/approved-senders",
      },
      {
        title: "Email integration",
        href: "/account/email-integration",
      },
    ],
  },
  {
    title: "Mira",
    icon: MiraLogo,
    href: "/mira",
  },
]

// ==================== MAIN COMPONENT ====================

export function AppNavigation({ companyName = "Company name", userName = "User", className, children, toolbarProps }: AppNavigationProps) {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader companyName={companyName} userName={userName} className={className} />
      <div className="flex flex-1 overflow-hidden">
        <MiraSidebar className={className} />
        <div className="flex flex-col flex-1">
          <ToolBarContainer toolbarProps={toolbarProps} />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}

// ==================== HEADER COMPONENT ====================

function AppHeader({ companyName = "Company name", userName = "User", className }: AppNavigationProps) {
  const { activeSection } = useNavigation()
  const navigate = useNavigate()
  
  // Ensure we always display "Mira Studio" as the header text when activeSection is "Mira"
  const displaySection = activeSection === "Mira" ? "Mira Studio" : activeSection
  const initials = userName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
    
  // Handle click on the Meltwater logo to go back to Mira Studio
  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <header
      className={cn("flex h-14 items-center justify-between border-b px-4 bg-background sticky top-0 z-50", className)}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <MeltwaterLogo />
          <span className="font-semibold text-lg">{displaySection}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative max-w-[240px] w-full hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Find"
            className="pl-8 h-9 rounded-full bg-gray-50 border-gray-200 focus-visible:ring-mira-teal"
            aria-label="Search"
          />
        </div>

        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex items-center gap-2 h-9 border-gray-200 px-3"
          style={{ height: "36px", borderRadius: "2px", minWidth: "160px" }}
          aria-label="Mira Companion"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Mira Companion</span>
        </Button>

        <div className="relative flex items-center justify-center" style={{ width: "36px", height: "36px" }}>
          <div className="absolute inset-0 rounded-full border border-gray-200"></div>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full flex items-center justify-center relative z-10"
            aria-label="Apps"
          >
            <Grid className="h-5 w-5 text-gray-600" />
          </Button>
        </div>

        <div className="relative flex items-center justify-center" style={{ width: "36px", height: "36px" }}>
          <div className="absolute inset-0 rounded-full border border-gray-200"></div>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full flex items-center justify-center relative z-10"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-1.5 h-9 border-gray-200 px-3"
          style={{ height: "36px", borderRadius: "2px", minWidth: "100px" }}
          aria-label="Help"
        >
          <HelpCircle className="h-5 w-5 text-gray-600" />
          <span className="text-sm font-medium">Help</span>
        </Button>

        <CompanyDropdown companyName={companyName} userName={userName} />
      </div>
    </header>
  )
}

// ==================== SIDEBAR COMPONENT ====================

function MiraSidebar({ className }: { className?: string }) {
  const pathname = "/"  // We'll use a fixed path for now since we're not using real routing
  const { setActiveSection } = useNavigation()
  const navigate = useNavigate() // Add navigate hook
  
  const [collapsed, setCollapsed] = React.useState(false) // Start expanded
  const [hovering, setHovering] = React.useState(false) // Track hover state for entire sidebar
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)
  const [isPinned, setIsPinned] = React.useState(false) // Track if sidebar is pinned open

  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>(() => {
    // Initialize with sections that should be expanded by default
    // or based on the current path
    const initialState: Record<string, boolean> = {}

    navItems.forEach((item) => {
      if (item.children) {
        // Check if current path is within this section
        const isActive =
          pathname === item.href || (item.children && item.children.some((child) => pathname === child.href))

        // Expand the section if it's active
        initialState[item.title] = isActive
      }
    })

    return initialState
  })

  // Function to toggle a section's expanded state
  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Function to check if an item is active based on the current path
  const isItemActive = (item: NavItem): boolean => {
    const { activeSection } = useNavigation()
    
    // Check if this item matches the active section from context
    // Special case: When Mira is active, Home shouldn't be active even if path is root
    if (activeSection === "Mira" && item.title === "Home" && pathname === "/") {
      return false
    }
    
    if (item.title === activeSection) {
      return true
    }
    
    // Only use path-based checking for non-home items when Mira isn't active
    if (activeSection !== "Mira" && pathname === item.href) {
      return true
    }

    if (item.children) {
      return item.children.some((child) => pathname === child.href)
    }

    return false
  }

  // Always set Mira as the active section on component mount
  React.useEffect(() => {
    // Force Mira to be active regardless of URL path
    setActiveSection("Mira")
    
    // Intentionally not adding pathname as a dependency to ensure
    // Mira stays selected even when URL changes
  }, [setActiveSection])

  // Calculate the height of the copyright area for button positioning
  const copyrightRef = React.useRef<HTMLDivElement>(null)
  const [copyrightHeight, setCopyrightHeight] = React.useState(0)

  React.useEffect(() => {
    if (copyrightRef.current) {
      setCopyrightHeight(copyrightRef.current.offsetHeight)
    }

    // Add a resize observer to update the copyright height when the window resizes
    const resizeObserver = new ResizeObserver(() => {
      if (copyrightRef.current) {
        setCopyrightHeight(copyrightRef.current.offsetHeight)
      }
    })

    if (copyrightRef.current) {
      resizeObserver.observe(copyrightRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [collapsed])

  // Handle mouse enter/leave for the entire sidebar
  const handleSidebarMouseEnter = () => {
    if (collapsed && !isPinned) {
      setHovering(true)
    }
  }

  const handleSidebarMouseLeave = () => {
    if (!isPinned) {
      setHovering(false)
    }
  }

  // Determine if sidebar should be visually expanded
  const isExpanded = !collapsed || hovering || isPinned

  // Handle toggle button click
  const handleToggleClick = () => {
    if (collapsed) {
      // If sidebar is collapsed, expand and pin it
      setCollapsed(false)
      setIsPinned(true)
    } else {
      // If sidebar is expanded, collapse it and unpin
      setCollapsed(true)
      setIsPinned(false)
    }
  }

  // Sidebar width in pixels
  const sidebarWidth = 220
  const collapsedWidth = 48 // Changed from 64 to 48

  // Function to get the parent section title for a child item
  const getParentSectionTitle = (childHref: string): string => {
    for (const item of navItems) {
      if (item.children) {
        const childItem = item.children.find((child) => child.href === childHref)
        if (childItem) {
          return item.title
        }
      }
    }
    return "Home"
  }

  // Simplified Collapsible component
  const Collapsible = ({ children, open, className }: { 
    children: React.ReactNode, 
    open?: boolean, 
    className?: string 
  }) => {
    return <div className={className}>{children}</div>
  }

  // Simplified CollapsibleContent component
  const CollapsibleContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return open ? <div className={className}>{children}</div> : null
  }
  
  // Handle click on an item - for Mira this should reset the navigation
  const handleItemClick = (title: string) => {
    setActiveSection(title);
    
    // If clicking on Mira item, reset navigation to home
    if (title === "Mira") {
      navigate('/');
    }
  }

  return (
    <div
      className={cn("h-[calc(100vh-3.5rem)] flex-shrink-0 transition-all duration-300 group")}
      style={{ width: isExpanded ? `${sidebarWidth}px` : `${collapsedWidth}px` }}
      onMouseEnter={handleSidebarMouseEnter}
      onMouseLeave={handleSidebarMouseLeave}
    >
      {/* Main Sidebar */}
      <div
        className={cn(
          "fixed top-14 bottom-0 left-0 flex h-[calc(100vh-3.5rem)] flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-10",
          className,
        )}
        style={{ width: isExpanded ? `${sidebarWidth}px` : `${collapsedWidth}px` }}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Content - Only this area should scroll */}
          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col py-2 space-y-1">
              {navItems.map((item, index, array) => {
                const isActive = isItemActive(item)
                const hasChildren = item.children && item.children.length > 0
                const nextItem = array[index + 1]
                const prevItem = array[index - 1]

                // Check if we need to render a divider before this item
                const showDividerBefore = item.title === "Content"

                // Check if we need to render a divider after this item
                const showDividerAfter = item.title === "Mira"

                return (
                  <React.Fragment key={item.title}>
                    {/* Render divider before the item if needed */}
                    {showDividerBefore && <div className="w-full border-t border-gray-200 my-2" />}

                    {hasChildren ? (
                      <div
                        className="relative"
                        onMouseEnter={() => !isExpanded && setHoveredItem(item.title)}
                        onMouseLeave={() => !isExpanded && setHoveredItem(null)}
                      >
                        <Collapsible
                          open={expandedSections[item.title]}
                          className="w-full transition-all duration-200 ease-in-out"
                        >
                          <div className="flex w-full relative">
                            <Button
                              variant="ghost"
                              className={cn(
                                "justify-start gap-3 text-left font-normal",
                                isActive && isExpanded && "bg-[rgba(29,159,159,0.12)] rounded-r-full font-medium text-mira-teal",
                                !isActive && isExpanded && "hover:bg-gray-100 hover:rounded-r-full",
                                isActive && !isExpanded && "text-mira-teal font-medium",
                              )}
                              style={{
                                height: "36px",
                                width: isExpanded ? "176px" : "100%",
                                paddingLeft: isExpanded ? "16px" : "0", // Changed from "8px" to "0"
                                paddingRight: isExpanded ? "8px" : "0", // Changed from "8px" to "0"
                                justifyContent: isExpanded ? "flex-start" : "center",
                              }}
                              onClick={(e) => {
                                // Only navigate, don't toggle the section
                                handleItemClick(item.title);
                              }}
                            >
                              <div
                                className={cn(
                                  "flex items-center justify-center", // Ensure this has justify-center
                                  isActive && !isExpanded && "bg-[rgba(29,159,159,0.12)] rounded-full p-2",
                                )}
                              >
                                {item.title === "Mira" ? (
                                  <MiraLogo />
                                ) : typeof item.icon === "function" ? (
                                  <item.icon />
                                ) : (
                                  <item.icon className="h-5 w-5 shrink-0" />
                                )}
                              </div>
                              {isExpanded && (
                                <span className={cn("flex-1 truncate ml-3", isActive && "font-bold")}>
                                  {item.title === "Mira" ? (
                                    <div className="flex items-center">Mira Studio</div>
                                  ) : (
                                    item.title
                                  )}
                                </span>
                              )}
                              {isExpanded && item.badge && (
                                <span
                                  className={cn(
                                    "ml-2 rounded-full px-2 py-0.5 text-xs font-medium",
                                    item.badge.variant === "purple"
                                      ? "bg-purple-100 text-purple-800"
                                      : "bg-gray-100 text-gray-800",
                                  )}
                                >
                                  {item.badge.text}
                                </span>
                              )}
                            </Button>
                            {isExpanded && (
                              <Button
                                variant="ghost"
                                className="rounded-full flex items-center justify-center"
                                style={{
                                  position: "absolute",
                                  right: "8px",
                                  top: "0px",
                                  width: "36px",
                                  height: "36px",
                                  padding: "0",
                                }}
                                onClick={(e) => {
                                  e.preventDefault() // Prevent navigation
                                  e.stopPropagation() // Prevent parent button click
                                  toggleSection(item.title)
                                }}
                              >
                                {expandedSections[item.title] ? (
                                  <ChevronUp className="h-4 w-4 shrink-0 transition-transform duration-200" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                                )}
                              </Button>
                            )}
                          </div>
                          {isExpanded && expandedSections[item.title] && (
                            <div className="pl-10 pr-2 transition-all duration-200 ease-in-out">
                              <div className="flex flex-col space-y-0 pt-1 border-l-2 border-gray-200">
                                {item.children?.map((child) => {
                                  const isChildActive = pathname === child.href

                                  return (
                                    <div key={child.title} className="flex items-center">
                                      <Button
                                        variant="ghost"
                                        className={cn(
                                          "justify-start pl-4 rounded-none border-l-2 -ml-0.5 flex-1",
                                          isChildActive
                                            ? "border-mira-teal font-bold text-mira-teal bg-[rgba(29,159,159,0.12)]"
                                            : "border-transparent hover:bg-transparent hover:border-gray-400 font-normal text-black",
                                        )}
                                        style={{ height: "36px" }}
                                        onClick={() => setActiveSection(getParentSectionTitle(child.href))}
                                      >
                                        {child.icon &&
                                          (typeof child.icon === "function" ? (
                                            <child.icon className="mr-2 h-4 w-4" />
                                          ) : (
                                            <child.icon className="mr-2 h-4 w-4" />
                                          ))}
                                        <span>{child.title}</span>
                                      </Button>
                                      {child.badge && (
                                        <span
                                          className={cn(
                                            "mr-2 rounded-full px-2 py-0.5 text-xs font-medium",
                                            child.badge.variant === "purple"
                                              ? "bg-purple-100 text-purple-800"
                                              : "bg-gray-100 text-gray-800",
                                          )}
                                        >
                                          {child.badge.text}
                                        </span>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </Collapsible>

                        {/* Flyout menu for collapsed sidebar - Only show on hover */}
                        {!isExpanded && hoveredItem === item.title && (
                          <div
                            className="absolute left-full top-0 ml-2 z-[1000] min-w-[200px] rounded-md bg-white shadow-lg border border-gray-100"
                            style={{
                              pointerEvents: "auto",
                              display: "block",
                              visibility: "visible",
                              opacity: 1,
                            }}
                          >
                            <div className="px-3 py-2 font-medium text-sm border-b border-gray-100">{item.title}</div>
                            <div className="flex flex-col py-1">
                              {item.children?.map((child) => {
                                const isChildActive = pathname === child.href
                                return (
                                  <div key={child.title} className="flex items-center justify-between">
                                    <button
                                      className={cn(
                                        "px-3 py-2 text-sm hover:bg-gray-100 flex-1 flex items-center",
                                        isChildActive ? "bg-[rgba(29,159,159,0.12)] text-mira-teal font-medium" : "text-gray-700",
                                      )}
                                      style={{ height: "36px" }}
                                      onClick={() => setActiveSection(getParentSectionTitle(child.href))}
                                    >
                                      {child.icon &&
                                        (typeof child.icon === "function" ? (
                                          <child.icon className="mr-2 h-4 w-4" />
                                        ) : (
                                          <child.icon className="mr-2 h-4 w-4" />
                                        ))}
                                      {child.title}
                                    </button>
                                    {child.badge && (
                                      <span
                                        className={cn(
                                          "mr-2 rounded-full px-2 py-0.5 text-xs font-medium",
                                          child.badge.variant === "purple"
                                            ? "bg-purple-100 text-purple-800"
                                            : "bg-gray-100 text-gray-800",
                                        )}
                                      >
                                        {child.badge.text}
                                      </span>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        className={cn(
                          "justify-start gap-3 text-left font-normal",
                          isActive && isExpanded && "bg-[rgba(29,159,159,0.12)] rounded-r-full font-medium text-mira-teal",
                          !isActive && isExpanded && "hover:bg-gray-100 hover:rounded-r-full",
                          isActive && !isExpanded && "text-mira-teal font-medium",
                        )}
                        style={{
                          height: "36px",
                          width: isExpanded ? "212px" : "100%",
                          paddingLeft: isExpanded ? "16px" : "0",
                          paddingRight: isExpanded ? "8px" : "0",
                          marginRight: isExpanded ? "8px" : "0",
                          justifyContent: isExpanded ? "flex-start" : "center",
                        }}
                        onClick={() => handleItemClick(item.title)}
                      >
                        <div
                          className={cn(
                            "flex items-center justify-center",
                            isActive && !isExpanded && "bg-[rgba(29,159,159,0.12)] rounded-full p-2",
                          )}
                        >
                          {item.title === "Mira" ? (
                            <MiraLogo />
                          ) : typeof item.icon === "function" ? (
                            <item.icon />
                          ) : (
                            <item.icon className="h-5 w-5 shrink-0" />
                          )}
                        </div>
                        {isExpanded && (
                          <span className={cn("flex-1 truncate ml-3", isActive && "font-bold")}>
                            {item.title === "Mira" ? (
                              <div className="flex items-center">Mira Studio</div>
                            ) : (
                              item.title
                            )}
                          </span>
                        )}
                        {isExpanded && item.badge && (
                          <span
                            className={cn(
                              "ml-2 rounded-full px-2 py-0.5 text-xs font-medium",
                              item.badge.variant === "purple"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-gray-100 text-gray-800",
                            )}
                          >
                            {item.badge.text}
                          </span>
                        )}
                      </Button>
                    )}

                    {/* Render divider after the item if needed */}
                    {showDividerAfter && <div className="w-full border-t border-gray-200 my-2" />}
                  </React.Fragment>
                )
              })}
            </nav>
          </div>

          {/* Footer - only visible when expanded */}
          {isExpanded && (
            <div ref={copyrightRef} className="border-t border-gray-200 p-4 text-xs text-gray-500 flex-shrink-0">
              <div>©2024 Meltwater</div>
              <div className="mt-1 flex flex-wrap gap-1">
                <a href="#" className="hover:underline">
                  Copyright
                </a>
                <span>•</span>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
                <span>•</span>
                <a href="#" className="hover:underline">
                  Twitter TOC
                </a>
                <span>•</span>
                <a href="#" className="hover:underline">
                  Youtube POC
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toggle Button - Only visible on hover */}
      <Button
        variant="outline"
        size="icon"
        className="fixed z-20 h-8 w-8 rounded-full border border-gray-200 bg-white shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{
          left: isExpanded ? `calc(${sidebarWidth}px - 1rem)` : `calc(${collapsedWidth}px - 0.5rem)`,
          bottom: `calc(${copyrightHeight}px + 0.5rem)`,
          transform: isExpanded ? "translateY(-50%)" : "translateY(-50%) translateX(-50%)",
        }}
        onClick={handleToggleClick}
        aria-label={collapsed ? "Pin sidebar open" : "Collapse sidebar"}
      >
        {/* Show Pin icon when collapsed (even if temporarily expanded due to hover) */}
        {collapsed ? <Pin className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>
    </div>
  )
}

// ==================== TOOLBAR CONTAINER ====================

function ToolBarContainer({ toolbarProps }: { toolbarProps?: { onToggleHistory?: () => void } }) {
  return (
    <div className="flex-shrink-0">
      <ToolBar onToggleHistory={toolbarProps?.onToggleHistory} />
    </div>
  )
}

// ==================== DROPDOWN COMPONENT ====================

interface CompanyDropdownProps {
  companyName: string
  userName: string
}

function CompanyDropdown({ companyName, userName }: CompanyDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const initials = userName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center justify-end gap-2 h-9 border-gray-200 pl-3 pr-0 min-w-[160px]"
        style={{
          borderTopLeftRadius: "2px",
          borderBottomLeftRadius: "2px",
          borderTopRightRadius: "18px",
          borderBottomRightRadius: "18px",
        }}
        aria-label="Company menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium truncate mr-auto">{companyName}</span>
        <Avatar className="h-9 w-9 shrink-0">
          <AvatarFallback className="text-sm bg-gray-100 text-gray-800">{initials}</AvatarFallback>
        </Avatar>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-56 rounded-md bg-white border border-gray-100 shadow-lg z-50">
          <div className="p-2 font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{userName}</p>
              <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
            </div>
          </div>
          <div className="border-t border-gray-100 my-1"></div>
          <div className="p-1">
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100">
              <UserCircle className="h-4 w-4" />
              <span>Profile</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
          </div>
          <div className="border-t border-gray-100 my-1"></div>
          <div className="p-1">
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
