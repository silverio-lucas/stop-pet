import { Primitive } from "@radix-ui/react-primitive"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { IconButton } from "./button"

export function Carousel({
  children,
  label,
  showControls = true,
}: {
  children: ReactNode
  label: string
  showControls?: boolean
}) {
  const track = useRef<HTMLDivElement>(null)
  const [canMoveBack, setCanMoveBack] = useState(false)
  const [canMoveForward, setCanMoveForward] = useState(true)

  const updateNavigation = () => {
    if (!track.current) return
    const { scrollLeft, scrollWidth, clientWidth } = track.current
    setCanMoveBack(scrollLeft > 2)
    setCanMoveForward(scrollLeft < scrollWidth - clientWidth - 2)
  }

  const move = (direction: -1 | 1) => {
    const carousel = track.current
    const firstCard = carousel?.firstElementChild as HTMLElement | null
    if (!carousel || !firstCard) return

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0
    carousel.scrollBy({
      left: (firstCard.getBoundingClientRect().width + gap) * direction,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const carousel = track.current
    if (!carousel) return

    const resizeObserver = new ResizeObserver(updateNavigation)
    resizeObserver.observe(carousel)
    updateNavigation()

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <Primitive.div className="min-w-0" aria-label={label} role="region">
      <Primitive.div
        ref={track}
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 md:gap-5"
        onScroll={updateNavigation}
        tabIndex={0}
      >
        {children}
      </Primitive.div>
      {showControls && (
        <Primitive.div className="mt-3 flex justify-end gap-2 sm:mt-4">
          <IconButton
            onClick={() => move(-1)}
            aria-label="Item anterior"
            disabled={!canMoveBack}
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </IconButton>
          <IconButton
            onClick={() => move(1)}
            aria-label="Próximo item"
            disabled={!canMoveForward}
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </IconButton>
        </Primitive.div>
      )}
    </Primitive.div>
  )
}
