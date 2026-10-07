import { Primitive } from "@radix-ui/react-primitive"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary-dark focus-visible:ring-primary/40",
  outline:
    "border border-primary/30 bg-white/70 text-foreground hover:border-primary hover:bg-primary-soft focus-visible:ring-primary/30",
  ghost: "text-foreground hover:bg-primary-soft focus-visible:ring-primary/30",
  olive:
    "bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary/30",
  inverse:
    "border border-white bg-white text-secondary-dark shadow-sm hover:bg-background focus-visible:ring-white/40",
  inverseOutline:
    "border border-white/80 bg-transparent text-white hover:bg-white hover:text-secondary-dark focus-visible:ring-white/40",
}

type ButtonLinkProps = ComponentProps<typeof Primitive.a> & {
  variant?: keyof typeof variants
  size?: "default" | "sm" | "icon"
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <Primitive.a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4",
        size === "default" && "px-5 py-3 text-sm",
        size === "sm" && "px-4 py-2 text-sm",
        size === "icon" && "size-11 p-0",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}

type IconButtonProps = ComponentProps<typeof Primitive.button>

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <Primitive.button
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground",
        className,
      )}
      {...props}
    />
  )
}
