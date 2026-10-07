import { Primitive } from "@radix-ui/react-primitive"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Card({
  className,
  ...props
}: ComponentProps<typeof Primitive.div>) {
  return (
    <Primitive.div
      className={cn(
        "rounded-2xl border border-border bg-white shadow-card",
        className,
      )}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: ComponentProps<typeof Primitive.div>) {
  return <Primitive.div className={cn("p-6", className)} {...props} />
}
