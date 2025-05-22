import { Shell } from "@/components/shell"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">GitHub Shell</h1>
        <Shell />
      </div>
    </main>
  )
}
