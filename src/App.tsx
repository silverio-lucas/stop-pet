import { Primitive } from "@radix-ui/react-primitive"
import {
  Bath,
  Bone,
  Camera,
  ChevronRight,
  Heart,
  MapPin,
  Menu,
  PackageCheck,
  PawPrint,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react"
import {
  createElement,
  type ComponentType,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ButtonLink } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { cn } from "@/lib/utils"
import mapImage from "@/assets/map-santana-do-paraiso.svg"

const phone = "5531972520027"
const whatsapp = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
const mapExternalUrl =
  "https://www.google.com/maps/search/?api=1&query=Stop+Pet+Santana+do+Para%C3%ADso+MG"
const heroPetImage =
  "https://images.unsplash.com/photo-1611173622933-91942d394b04?auto=format&fit=crop&w=1200&q=88"

const nav = [
  ["Serviços", "#servicos"],
  ["Produtos", "#produtos"],
  ["Avaliações", "#avaliacoes"],
  ["Contato", "#contato"],
]

const services = [
  {
    icon: Bath,
    title: "Banho e tosa",
    description:
      "Cuidado gentil, banho caprichado e tosa do jeitinho que seu pet precisa.",
  },
  {
    icon: Bone,
    title: "Rações e petiscos",
    description:
      "As marcas que seu pet ama, com ajuda para você fazer a melhor escolha.",
  },
  {
    icon: ShoppingBag,
    title: "Acessórios e higiene",
    description:
      "Itens essenciais para passeio, diversão, conforto e cuidado diário.",
  },
  {
    icon: Truck,
    title: "Entrega em casa",
    description:
      "Seu pedido separado com carinho e entregue em Santana do Paraíso.",
  },
]

const products = [
  {
    tag: "Alimentação",
    name: "Rações para cães",
    description: "Consulte marcas e disponibilidade pelo WhatsApp.",
    color: "bg-primary-soft",
    icon: Bone,
  },
  {
    tag: "Alimentação",
    name: "Rações para gatos",
    description: "Consulte marcas e disponibilidade pelo WhatsApp.",
    color: "bg-secondary-soft",
    icon: PawPrint,
  },
  {
    tag: "Recompensas",
    name: "Petiscos",
    description: "Opções para cães e gatos, conforme disponibilidade.",
    color: "bg-sand",
    icon: Sparkles,
  },
  {
    tag: "Dia a dia",
    name: "Acessórios e passeio",
    description: "Itens para passeio, conforto e diversão do seu pet.",
    color: "bg-sky",
    icon: Heart,
  },
]

const groomingServices = [
  {
    icon: Bath,
    title: "Banho",
    description: "Higiene e cuidado com atenção às necessidades do seu pet.",
  },
  {
    icon: Scissors,
    title: "Banho + tosa",
    description: "Banho completo e tosa combinada de acordo com o seu pet.",
  },
  {
    icon: Sparkles,
    title: "Tosa higiênica",
    description: "Cuidado prático para manter a higiene e o bem-estar no dia a dia.",
  },
]

function Heading({
  as = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3"
  className?: string
  children: ReactNode
}) {
  return createElement(
    as,
    { className: cn("font-display text-foreground", className) },
    children,
  )
}

function Header(props: HTMLAttributes<HTMLElement>) {
  return createElement("header", props)
}

function Main(props: HTMLAttributes<HTMLElement>) {
  return createElement("main", props)
}

function Section(props: HTMLAttributes<HTMLElement>) {
  return createElement("section", props)
}

function Footer(props: HTMLAttributes<HTMLElement>) {
  return createElement("footer", props)
}

function HeroPetImage() {
  return (
    <img
      src={heroPetImage}
      alt="Cachorro feliz e bem cuidado após o banho"
      className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
      fetchPriority="high"
    />
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Primitive.p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
      <PawPrint className="size-4" aria-hidden="true" />
      {children}
    </Primitive.p>
  )
}

function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string
  title: string
  body?: string
  align?: "left" | "center"
}) {
  return (
    <Primitive.div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Primitive.div
        className={cn(align === "center" && "flex justify-center")}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
      </Primitive.div>
      <Heading className="text-3xl leading-tight sm:text-4xl">{title}</Heading>
      {body && (
        <Primitive.p className="mt-4 text-card text-muted sm:text-base">
          {body}
        </Primitive.p>
      )}
    </Primitive.div>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Primitive.a
      href="#inicio"
      aria-label="Stop Pet — início"
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-xl font-display text-2xl font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30",
        light ? "text-white" : "text-foreground",
      )}
    >
      <Primitive.span className="grid size-10 place-items-center rounded-xl bg-primary text-white shadow-sm">
        <PawPrint className="size-5" aria-hidden="true" />
      </Primitive.span>
      Stop{" "}
      <Primitive.span className={light ? "text-primary-light" : "text-primary"}>
        Pet
      </Primitive.span>
    </Primitive.a>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: ComponentType<{
    className?: string
    "aria-hidden"?: boolean | "true" | "false"
  }>
  title: string
  description: string
}) {
  return (
    <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        <Primitive.div className="mb-5 grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
          <Icon className="size-6" aria-hidden="true" />
        </Primitive.div>
        <Heading as="h3" className="text-xl">
          {title}
        </Heading>
        <Primitive.p className="mt-2 flex-1 text-card text-muted sm:text-base">
          {description}
        </Primitive.p>
      </CardContent>
    </Card>
  )
}

export default function App() {
  return (
    <Primitive.div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-lg">
        <Primitive.div className="container-page flex h-16 items-center justify-between sm:h-20">
          <Logo />
          <Primitive.nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navegação principal"
          >
            {nav.map(([label, href]) => (
              <Primitive.a
                key={href}
                href={href}
                className="flex min-h-11 items-center rounded-lg text-sm font-semibold text-muted transition hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
              >
                {label}
              </Primitive.a>
            ))}
          </Primitive.nav>
          <ButtonLink
            href={whatsapp("Olá! Vim pelo site e quero fazer um pedido")}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex"
          >
            <WhatsAppIcon className="size-5" aria-hidden="true" />
            Pedir pelo WhatsApp
          </ButtonLink>
          <Sheet>
            <SheetTrigger className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-white text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 lg:hidden">
              <Menu className="size-5" aria-hidden="true" />
              <span className="sr-only">Abrir menu</span>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Menu principal</SheetTitle>
              <Logo />
              <Primitive.nav
                className="mt-12 flex flex-col"
                aria-label="Menu móvel"
              >
                {nav.map(([label, href]) => (
                  <SheetClose asChild key={href}>
                    <Primitive.a
                      href={href}
                      className="flex min-h-14 items-center justify-between border-b border-border text-lg font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                    >
                      {label}
                      <ChevronRight
                        className="size-5 text-primary"
                        aria-hidden="true"
                      />
                    </Primitive.a>
                  </SheetClose>
                ))}
              </Primitive.nav>
              <ButtonLink
                href={whatsapp("Olá! Vim pelo site e quero fazer um pedido")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full"
              >
                <WhatsAppIcon className="size-5" aria-hidden="true" />
                Pedir pelo WhatsApp
              </ButtonLink>
            </SheetContent>
          </Sheet>
        </Primitive.div>
      </Header>

      <Main id="inicio">
        <Section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
          <Primitive.div className="absolute -right-20 top-24 size-72 rounded-full bg-primary-soft blur-3xl" />
          <Primitive.div className="container-page relative grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 xl:gap-16">
            <Primitive.div>
              <Primitive.div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-soft px-3 py-2 text-xs font-bold text-secondary-dark sm:mb-6 sm:px-4 sm:text-sm">
                <MapPin className="size-4" aria-hidden="true" />
                Seu pet shop em Santana do Paraíso
              </Primitive.div>
              <Heading
                as="h1"
                className="max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
              >
                Cuidado, ração e entrega em casa para quem você mais ama.
              </Heading>
              <Primitive.p className="mt-5 max-w-xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
                Tudo para seu pet, com atendimento próximo, carinho de verdade e
                a comodidade de pedir pelo WhatsApp.
              </Primitive.p>
              <Primitive.div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <ButtonLink
                  href={whatsapp("Olá! Vim pelo site e quero fazer um pedido")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:min-w-52 sm:w-auto"
                >
                  <WhatsAppIcon className="size-5" aria-hidden="true" />
                  Pedir pelo WhatsApp
                </ButtonLink>
              </Primitive.div>
              <Primitive.div className="mt-6 text-xs sm:mt-7 sm:text-sm">
                <Primitive.div>
                  <Primitive.div
                    className="flex gap-0.5 text-star"
                    aria-label="5 estrelas"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="size-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </Primitive.div>
                  <Primitive.p className="mt-0.5 font-semibold">
                    5,0 no Google · 123 avaliações
                  </Primitive.p>
                </Primitive.div>
              </Primitive.div>
            </Primitive.div>

            <Primitive.div className="relative mx-auto w-full max-w-xl">
              <Primitive.div className="absolute -left-5 bottom-16 z-10 hidden rounded-2xl bg-white p-4 shadow-card sm:flex sm:items-center sm:gap-3">
                <Primitive.div className="grid size-11 place-items-center rounded-full bg-secondary-soft text-secondary">
                  <ShieldCheck className="size-6" aria-hidden="true" />
                </Primitive.div>
                <Primitive.div>
                  <Primitive.p className="text-xs text-muted">
                    Atendimento local
                  </Primitive.p>
                  <Primitive.p className="font-bold">
                    Carinho que dá confiança
                  </Primitive.p>
                </Primitive.div>
              </Primitive.div>
              <Primitive.div className="relative overflow-hidden rounded-3xl bg-primary-soft p-2.5 shadow-card-hover sm:p-3">
                <HeroPetImage />
                <Primitive.div className="absolute right-5 top-5 rounded-2xl bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur sm:right-6 sm:top-6 sm:px-4 sm:py-3">
                  <Primitive.p className="font-display text-base font-bold sm:text-lg">
                    Cuidado de perto
                  </Primitive.p>
                  <Primitive.p className="text-xs text-muted">
                    Para cães e gatos
                  </Primitive.p>
                </Primitive.div>
              </Primitive.div>
            </Primitive.div>
          </Primitive.div>
        </Section>

        <Section
          id="servicos"
          className="section-space bg-white/60 scroll-mt-20"
        >
          <Primitive.div className="container-page">
            <SectionHeader
              eyebrow="Tudo em um só lugar"
              title="O que seu melhor amigo precisa"
              body="Da rotina de cuidados ao pacote de ração, a Stop Pet ajuda você a resolver tudo de um jeito simples e próximo."
            />
            <Primitive.div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </Primitive.div>
          </Primitive.div>
        </Section>

        <Section className="section-space">
          <Primitive.div className="container-page">
            <SectionHeader
              eyebrow="Banho e tosa"
              title="Cuidado do jeito que seu pet precisa"
              body="Fale com a equipe para consultar valores e encontrar o cuidado adequado para o porte e as necessidades do seu pet."
            />
            <Primitive.div className="grid gap-4 md:grid-cols-3">
              {groomingServices.map(
                ({ icon: Icon, title, description }) => (
                  <Card key={title} className="h-full">
                    <CardContent className="flex h-full flex-col p-5 sm:p-6">
                      <Primitive.div className="mb-5 grid size-12 place-items-center rounded-2xl bg-secondary-soft text-secondary-dark">
                        <Icon className="size-6" aria-hidden="true" />
                      </Primitive.div>
                      <Heading as="h3" className="text-xl">
                        {title}
                      </Heading>
                      <Primitive.p className="mt-2 flex-1 text-card text-muted sm:text-base">
                        {description}
                      </Primitive.p>
                    </CardContent>
                  </Card>
                ),
              )}
            </Primitive.div>
            <Primitive.div className="mt-8 flex justify-center">
              <ButtonLink
                href={whatsapp(
                  "Olá! Vim pelo site e quero consultar valores e horários de banho e tosa.",
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="size-5" aria-hidden="true" />
                Consultar valores e horários no WhatsApp
              </ButtonLink>
            </Primitive.div>
          </Primitive.div>
        </Section>

        <Section className="section-space bg-white/60">
          <Primitive.div className="container-page grid items-start gap-8 md:gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 xl:gap-20">
            <SectionHeader
              eyebrow="É simples pedir"
              title="Do WhatsApp até você, sem complicação"
              body="Converse com uma pessoa de verdade. A gente ajuda a escolher e combina tudo com você."
            />
            <Primitive.ol className="space-y-4">
              {[
                [
                  "Chame no WhatsApp",
                  "Conte o que seu pet precisa e tire suas dúvidas com a gente.",
                  WhatsAppIcon,
                ],
                [
                  "Escolha o produto ou horário",
                  "Confirmamos disponibilidade, valores e a melhor opção.",
                  PackageCheck,
                ],
                [
                  "Receba ou venha à loja",
                  "Entregamos em casa ou deixamos tudo pronto para você.",
                  Truck,
                ],
              ].map(([title, text, Icon], index) => {
                const StepIcon = Icon as typeof WhatsAppIcon
                return (
                  <Primitive.li key={String(title)}>
                    <Card className="border-0 bg-white">
                      <CardContent className="flex gap-4 p-5 sm:items-center sm:p-6">
                        <Primitive.span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-foreground font-display text-xl font-bold text-white">
                          {index + 1}
                        </Primitive.span>
                        <Primitive.div className="flex-1">
                          <Heading as="h3" className="text-xl">
                            {String(title)}
                          </Heading>
                          <Primitive.p className="mt-1 text-card text-muted sm:text-base">
                            {String(text)}
                          </Primitive.p>
                        </Primitive.div>
                        <StepIcon
                          className="hidden size-7 text-primary sm:block"
                          aria-hidden="true"
                        />
                      </CardContent>
                    </Card>
                  </Primitive.li>
                )
              })}
            </Primitive.ol>
          </Primitive.div>
        </Section>

        <Section
          id="produtos"
          className="section-space bg-foreground text-white scroll-mt-20"
        >
          <Primitive.div className="container-page">
            <Primitive.div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end md:gap-8">
              <Primitive.div className="max-w-2xl">
                <Primitive.p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-light">
                  <ShoppingBag className="size-4" aria-hidden="true" />
                  Produtos em destaque
                </Primitive.p>
                <Heading className="text-3xl leading-tight text-white sm:text-4xl">
                  Favoritos para a rotina do seu pet
                </Heading>
              </Primitive.div>
              <Primitive.p className="max-w-md text-card text-white/85 sm:text-base">
                Encontre categorias essenciais para a alimentação, o cuidado e
                o passeio do seu pet.
              </Primitive.p>
            </Primitive.div>
            <Carousel label="Produtos em destaque" showControls={false}>
              {products.map(({ tag, name, description, color, icon: Icon }) => (
                <Card
                  key={name}
                  className="carousel-product-card shrink-0 snap-start snap-always border-0 text-foreground"
                >
                  <CardContent className="p-5 sm:p-6">
                    <Primitive.div
                      className={cn(
                        "mb-6 grid aspect-[5/3] place-items-center rounded-2xl",
                        color,
                      )}
                    >
                      <Icon
                        className="size-16 text-foreground/75"
                        aria-hidden="true"
                      />
                    </Primitive.div>
                    <Primitive.p className="text-xs font-bold uppercase tracking-wider text-secondary">
                      {tag}
                    </Primitive.p>
                    <Heading as="h3" className="mt-2 text-2xl">
                      {name}
                    </Heading>
                    <Primitive.p className="mt-2 text-card text-muted sm:text-base">
                      {description}
                    </Primitive.p>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
            <Primitive.div className="mt-6 flex justify-center">
              <ButtonLink
                href={whatsapp(
                  "Olá! Vim pelo site e quero pedir produtos para o meu pet.",
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="size-5" aria-hidden="true" />
                Pedir pelo WhatsApp
              </ButtonLink>
            </Primitive.div>
          </Primitive.div>
        </Section>

        <Section
          id="avaliacoes"
          className="section-space scroll-mt-20"
        >
          <Primitive.div className="container-page">
            <SectionHeader
              eyebrow="Avaliações"
              title="O que dizem os clientes"
              align="center"
            />
            <Primitive.div className="mx-auto mb-7 flex w-fit items-center gap-3 rounded-2xl bg-secondary-soft px-4 py-3.5 text-secondary-dark sm:mb-8 sm:gap-4 sm:px-5 sm:py-4">
              <Primitive.div>
                <Primitive.div className="flex justify-center text-star">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </Primitive.div>
                <Primitive.p className="mt-1 text-sm font-semibold">
                  5,0 · 123 avaliações no Google
                </Primitive.p>
              </Primitive.div>
            </Primitive.div>
          </Primitive.div>
        </Section>

        <Section className="section-space bg-white/60">
          <Primitive.div className="container-page grid items-start gap-8 md:gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 xl:gap-20">
            <SectionHeader
              eyebrow="Dúvidas frequentes"
              title="Antes de chamar, talvez sua resposta esteja aqui"
              body="Se não estiver, é só mandar uma mensagem. A gente responde com prazer."
            />
            <Card className="border-0">
              <CardContent className="px-5 py-2 sm:px-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="delivery">
                    <AccordionTrigger>Vocês fazem entrega?</AccordionTrigger>
                    <AccordionContent>
                      Sim. Entregamos em Santana do Paraíso e região próxima.
                      Consulte bairros atendidos, prazo e taxa pelo WhatsApp.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="hours">
                    <AccordionTrigger>
                      Qual é o horário de funcionamento?
                    </AccordionTrigger>
                    <AccordionContent>
                      Confirme o horário de funcionamento pelo WhatsApp antes de
                      vir. Respondemos rapidinho!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="payment">
                    <AccordionTrigger>
                      Quais formas de pagamento são aceitas?
                    </AccordionTrigger>
                    <AccordionContent>
                      Pix, dinheiro, cartão de débito e crédito. Confirme
                      condições e parcelamento no momento do pedido.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="grooming">
                    <AccordionTrigger>
                      Como agendar banho e tosa?
                    </AccordionTrigger>
                    <AccordionContent>
                      Chame pelo WhatsApp, conte o porte e a necessidade do seu
                      pet. Nossa equipe apresenta os horários disponíveis.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </Primitive.div>
        </Section>

        <Section id="contato" className="section-space scroll-mt-20">
          <Primitive.div className="container-page">
            <SectionHeader
              eyebrow="Estamos por perto"
              title="Visite a Stop Pet ou chame no WhatsApp"
              body="Será um prazer conhecer você e seu melhor amigo."
            />
            <Primitive.div className="grid overflow-hidden rounded-2xl bg-secondary text-white shadow-card-hover md:grid-cols-[1.1fr_.9fr] lg:grid-cols-2">
              <Primitive.div className="p-5 sm:p-8 lg:p-12">
                <Primitive.div className="space-y-7">
                  {[
                    [MapPin, "Localização", "Santana do Paraíso, MG"],
                    [WhatsAppIcon, "WhatsApp", "(31) 97252-0027"],
                    [Camera, "Instagram", "@stop__pets"],
                  ].map(([Icon, label, value]) => {
                    const ContactIcon = Icon as typeof MapPin
                    return (
                      <Primitive.div key={String(label)} className="flex min-w-0 gap-3 sm:gap-4">
                        <Primitive.div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10">
                          <ContactIcon className="size-5" aria-hidden="true" />
                        </Primitive.div>
                        <Primitive.div className="min-w-0">
                          <Primitive.p className="text-xs font-bold uppercase tracking-wider text-white/85">
                            {String(label)}
                          </Primitive.p>
                          <Primitive.p
                            className="mt-1 break-words font-semibold leading-6"
                          >
                            {String(value)}
                          </Primitive.p>
                        </Primitive.div>
                      </Primitive.div>
                    )
                  })}
                </Primitive.div>
                <Primitive.div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href="https://instagram.com/stop__pets"
                    target="_blank"
                    rel="noreferrer"
                    variant="inverseOutline"
                  >
                    Ver Instagram
                  </ButtonLink>
                </Primitive.div>
              </Primitive.div>
              <Primitive.div className="relative min-h-72 overflow-hidden bg-secondary-dark sm:min-h-80">
                <img
                  src={mapImage}
                  alt="Mapa de Santana do Paraíso, MG"
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                />
                <Primitive.p className="absolute bottom-2 left-2 rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-foreground">
                  © OpenStreetMap
                </Primitive.p>
                <ButtonLink
                  href={mapExternalUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="inverse"
                  size="sm"
                  className="absolute right-4 top-4 z-10 shadow-card"
                >
                  <MapPin className="size-4" aria-hidden="true" />
                  Abrir no Google Maps
                </ButtonLink>
              </Primitive.div>
            </Primitive.div>
          </Primitive.div>
        </Section>

        <Section className="pb-16 sm:pb-20 lg:pb-24">
          <Primitive.div className="container-page">
            <Primitive.div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-secondary p-6 text-white shadow-card-hover sm:p-9 md:flex-row md:items-center lg:p-12">
              <Primitive.div>
                <Primitive.p className="mb-2 text-sm font-bold uppercase tracking-widest text-white/85">
                  Atendimento próximo
                </Primitive.p>
                <Heading as="h2" className="text-3xl text-white sm:text-4xl">
                  Fale com a Stop Pet agora
                </Heading>
              </Primitive.div>
              <ButtonLink
                href={whatsapp(
                  "Olá! Vim pelo site e quero falar com a Stop Pet agora.",
                )}
                target="_blank"
                rel="noreferrer"
                variant="inverse"
                className="w-full px-7 py-4 text-base md:w-auto"
              >
                <WhatsAppIcon className="size-5" aria-hidden="true" />
                Chamar no WhatsApp
              </ButtonLink>
            </Primitive.div>
          </Primitive.div>
        </Section>
      </Main>

      <Footer className="border-t border-border bg-white">
        <Primitive.div className="container-page flex flex-col gap-4 pb-24 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-8">
          <Logo />
          <Primitive.p className="max-w-lg text-sm leading-6 text-muted sm:text-right">
            © {new Date().getFullYear()} Stop Pet. Feito com carinho em Santana
            do Paraíso.
          </Primitive.p>
        </Primitive.div>
      </Footer>

      <ButtonLink
        href={whatsapp("Olá! Vim pelo site e quero fazer um pedido")}
        target="_blank"
        rel="noreferrer"
        size="icon"
        variant="olive"
        aria-label="Pedir pelo WhatsApp"
        className="whatsapp-float fixed z-40 size-14 rounded-full shadow-xl"
      >
        <WhatsAppIcon className="size-7" aria-hidden="true" />
      </ButtonLink>
    </Primitive.div>
  )
}
