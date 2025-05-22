"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ArrowRight, Terminal } from "lucide-react"

type CommandOutput = {
  content: string
  isError?: boolean
}

export function Shell() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [outputs, setOutputs] = useState<CommandOutput[]>([
    { content: "GitHub Shell v1.0.0" },
    { content: "Type 'help' to see available commands" },
    { content: "Type 'connect' to authenticate with GitHub" },
  ])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const outputEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when outputs change
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [outputs])

  // Focus input on mount and when clicking on the terminal
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add command to history
    setHistory((prev) => [...prev, input])

    // Process command
    processCommand(input)

    // Clear input
    setInput("")
  }

  const processCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()

    // Add command to output
    setOutputs((prev) => [...prev, { content: `$ ${cmd}` }])

    // Process command
    switch (command) {
      case "help":
        setOutputs((prev) => [
          ...prev,
          {
            content: `
Available commands:
  help     - Show this help message
  clear    - Clear the terminal
  connect  - Connect to GitHub
  status   - Check connection status
  logout   - Disconnect from GitHub
  repos    - List your repositories (requires authentication)
          `,
          },
        ])
        break

      case "clear":
        setOutputs([])
        break

      case "connect":
        if (isAuthenticated) {
          setOutputs((prev) => [
            ...prev,
            {
              content: `Already connected as ${username}`,
            },
          ])
        } else {
          simulateGitHubAuth()
        }
        break

      case "status":
        if (isAuthenticated) {
          setOutputs((prev) => [
            ...prev,
            {
              content: `Connected to GitHub as ${username}`,
            },
          ])
        } else {
          setOutputs((prev) => [
            ...prev,
            {
              content: 'Not connected to GitHub. Use "connect" to authenticate.',
            },
          ])
        }
        break

      case "logout":
        if (isAuthenticated) {
          setIsAuthenticated(false)
          setUsername("")
          setOutputs((prev) => [
            ...prev,
            {
              content: "Successfully logged out from GitHub",
            },
          ])
        } else {
          setOutputs((prev) => [
            ...prev,
            {
              content: "Not currently logged in",
            },
          ])
        }
        break

      case "repos":
        if (isAuthenticated) {
          setOutputs((prev) => [
            ...prev,
            {
              content: `
Fetching repositories for ${username}...

Repositories:
- ${username}/awesome-project
- ${username}/personal-website
- ${username}/react-components
- ${username}/node-api
            `,
            },
          ])
        } else {
          setOutputs((prev) => [
            ...prev,
            {
              content: 'Authentication required. Use "connect" to authenticate with GitHub.',
              isError: true,
            },
          ])
        }
        break

      default:
        setOutputs((prev) => [
          ...prev,
          {
            content: `Command not found: ${command}. Type 'help' for available commands.`,
            isError: true,
          },
        ])
    }
  }

  const simulateGitHubAuth = () => {
    setOutputs((prev) => [
      ...prev,
      {
        content: "Connecting to GitHub...",
      },
    ])

    // Simulate authentication delay
    setTimeout(() => {
      const mockUsername = "github-user"
      setIsAuthenticated(true)
      setUsername(mockUsername)
      setOutputs((prev) => [
        ...prev,
        {
          content: `Successfully connected to GitHub as ${mockUsername}`,
        },
      ])
    }, 1500)
  }

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="bg-black text-white border-b border-gray-700">
        <CardTitle className="flex items-center gap-2">
          <Terminal size={18} />
          <span>Terminal</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div
          className="bg-black text-green-400 font-mono text-sm p-4 h-[400px] overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          {outputs.map((output, index) => (
            <div key={index} className={`whitespace-pre-wrap mb-1 ${output.isError ? "text-red-400" : ""}`}>
              {output.content}
            </div>
          ))}
          <div ref={outputEndRef} />
        </div>
      </CardContent>
      <CardFooter className="bg-gray-900 p-2">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <div className="flex items-center text-white">
            <Github size={18} />
            <span className="ml-2 mr-1">$</span>
          </div>
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-800 border-gray-700 text-white focus-visible:ring-gray-600"
            placeholder="Type a command..."
          />
          <Button type="submit" size="icon" variant="ghost" className="text-white">
            <ArrowRight size={18} />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
