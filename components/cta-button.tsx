'use client'

import { ReactNode } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  trustText?: string[]
  fullWidth?: boolean
  /** Native button type when rendered as a <button>. */
  type?: 'button' | 'submit'
}

/* Shared sizing & typography — refined, premium SaaS proportions.
   Mobile 48px · Tablet 50px · Desktop 52px, 14px radius, content-based width. */
const sharedClasses = `
  group relative inline-flex shrink-0 items-center justify-center gap-2
  h-12 sm:h-[50px] lg:h-[52px]
  px-5 sm:px-[22px] lg:px-7
  rounded-[14px] whitespace-nowrap
  font-heading font-semibold text-[15px] lg:text-base tracking-[-0.2px] leading-none
  transition-all duration-300 ease-out
  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25
  overflow-hidden
`

const primaryClasses = `
  ${sharedClasses}
  text-white
  border border-white/[0.12]
  shadow-[0_8px_20px_rgba(55,75,107,0.18),0_18px_40px_rgba(55,75,107,0.22)]
  hover:-translate-y-[3px] hover:scale-[1.02] hover:brightness-[1.05]
  hover:shadow-[0_12px_28px_rgba(55,75,107,0.24),0_26px_56px_rgba(55,75,107,0.30)]
  active:scale-[0.98] active:translate-y-0
  active:shadow-[0_4px_12px_rgba(55,75,107,0.16)]
`

const secondaryClasses = `
  ${sharedClasses}
  bg-white text-primary
  border border-[#D6DCE5]
  shadow-[0_1px_2px_rgba(55,75,107,0.06)]
  hover:bg-[#F5F8FC] hover:border-[#C3CEDD]
  hover:-translate-y-[2px]
  hover:shadow-[0_6px_16px_rgba(55,75,107,0.10)]
  active:scale-[0.98] active:translate-y-0
`

const primaryGradient =
  'linear-gradient(180deg, #466086 0%, #374B6B 50%, #2F4364 100%)'

function InnerContent({
  children,
  icon,
  variant,
}: {
  children: ReactNode
  icon: ReactNode
  variant: 'primary' | 'secondary'
}) {
  return (
    <>
      {/* Premium light reflection across the upper 25% (primary only) */}
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/[0.08] to-transparent"
        />
      )}
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 flex items-center transition-transform duration-300 ease-out group-hover:translate-x-1">
        {icon}
      </span>
    </>
  )
}

export function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  icon = <ArrowRight size={18} strokeWidth={2.25} />,
  trustText,
  fullWidth = false,
  type = 'button',
}: CTAButtonProps) {
  const widthClasses = fullWidth ? 'w-full' : 'min-w-[220px]'

  const finalClasses = `${
    variant === 'primary' ? primaryClasses : secondaryClasses
  } ${widthClasses}`

  const inlineStyle =
    variant === 'primary' ? { backgroundImage: primaryGradient } : undefined

  const inner = (
    <InnerContent icon={icon} variant={variant}>
      {children}
    </InnerContent>
  )

  const buttonEl = href ? (
    <a href={href} className={finalClasses} style={inlineStyle}>
      {inner}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={finalClasses} style={inlineStyle}>
      {inner}
    </button>
  )

  // Primary buttons get a soft navy glow to naturally draw attention.
  const button =
    variant === 'primary' ? (
      <span className={`group relative inline-flex ${fullWidth ? 'w-full' : ''}`}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 rounded-[22px] bg-primary/25 blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-80"
        />
        <span className={`relative ${fullWidth ? 'w-full' : ''}`}>{buttonEl}</span>
      </span>
    ) : (
      buttonEl
    )

  if (!trustText) {
    return button
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${fullWidth ? 'w-full' : ''}`}>
      {button}
      <p className="flex items-center justify-center gap-1.5 text-[13px] text-muted-foreground text-center leading-relaxed">
        <ShieldCheck size={14} className="shrink-0 text-primary/70" aria-hidden="true" />
        <span>
          {trustText.map((text, idx) => (
            <span key={idx}>
              {idx > 0 && ' • '}
              {text}
            </span>
          ))}
        </span>
      </p>
    </div>
  )
}

export function CTAButtonGroup({
  primary,
  secondary,
  vertical = false,
  children,
}: {
  primary?: {
    href?: string
    onClick?: () => void
    label: string
    trustText?: string[]
  }
  secondary?: {
    href?: string
    onClick?: () => void
    label: string
  }
  vertical?: boolean
  children?: ReactNode
}) {
  const containerClass = vertical ? 'flex-col' : 'flex-row sm:flex-row'

  return (
    <div className={`flex ${containerClass} gap-4 items-center`}>
      {children}
      {primary && (
        <CTAButton
          href={primary.href}
          onClick={primary.onClick}
          variant="primary"
          trustText={primary.trustText}
          fullWidth={vertical}
        >
          {primary.label}
        </CTAButton>
      )}
      {secondary && (
        <CTAButton
          href={secondary.href}
          onClick={secondary.onClick}
          variant="secondary"
          fullWidth={vertical}
        >
          {secondary.label}
        </CTAButton>
      )}
    </div>
  )
}
