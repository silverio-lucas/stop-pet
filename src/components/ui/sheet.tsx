import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close

export function SheetContent({
  className,
  children,
  ...props
}: ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto border-l border-border bg-background p-5 shadow-xl focus:outline-none sm:p-6",
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full text-foreground hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30">
          <X className="size-5" aria-hidden="true" />
          <span className="sr-only">Fechar menu</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const SheetTitle = Dialog.Title
