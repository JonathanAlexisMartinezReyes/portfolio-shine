import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

// 👇 ¡Fíjate que diga "export function"!
export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/50 backdrop-blur-md border-primary/20 hover:border-primary shadow-lg"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}