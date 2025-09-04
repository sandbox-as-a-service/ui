import {cn} from "../../../lib/utils"

export function TypographyH1({className, ...props}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", className)}
      {...props}
    />
  )
}

export function TypographyH2({className, ...props}: React.ComponentProps<"h2">) {
  return <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight", className)} {...props} />
}

export function TypographyH3({className, ...props}: React.ComponentProps<"h3">) {
  return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
}

export function TypographyH4({className, ...props}: React.ComponentProps<"h4">) {
  return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
}

export function TypographyP({className, ...props}: React.ComponentProps<"p">) {
  return <p className={cn("leading-7", className)} {...props} />
}

export function TypographyBlockquote({className, ...props}: React.ComponentProps<"blockquote">) {
  return <blockquote className={cn("border-l-2 pl-6 italic", className)} {...props} />
}

export function TypographyInlineCode({className, ...props}: React.ComponentProps<"code">) {
  return (
    <code
      className={cn("bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}
      {...props}
    />
  )
}

export function TypographyLead({className, ...props}: React.ComponentProps<"p">) {
  return <p className={cn("text-muted-foreground text-xl", className)} {...props} />
}

export function TypographyLarge({className, ...props}: React.ComponentProps<"div">) {
  return <div className={cn("text-lg font-semibold", className)} {...props} />
}

export function TypographySmall({className, ...props}: React.ComponentProps<"small">) {
  return <small className={cn("text-sm leading-none font-medium", className)} {...props} />
}

export function TypographyMuted({className, ...props}: React.ComponentProps<"p">) {
  return <p className={cn("text-muted-foreground text-sm", className)} {...props} />
}
