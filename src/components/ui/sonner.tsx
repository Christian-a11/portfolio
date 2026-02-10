import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-[var(--word-green)]" />,
        info: <InfoIcon className="size-4 text-[var(--word-blue)]" />,
        warning: <TriangleAlertIcon className="size-4 text-[#F0A600]" />,
        error: <OctagonXIcon className="size-4 text-[#C50022]" />,
        loading: <Loader2Icon className="size-4 animate-spin text-[var(--word-blue)]" />,
      }}
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-[#FFFFFF] group-[.toaster]:text-[var(--word-text)] group-[.toaster]:border-[var(--word-border)] group-[.toaster]:shadow-[0_4px_12px_rgba(0,0,0,0.12)] group-[.toaster]:rounded-sm group-[.toaster]:border-t-4 group-[.toaster]:border-t-[var(--word-blue)] font-ui p-4",
          description: "group-[.toast]:text-[var(--word-text-secondary)] font-ui text-[11px] mt-1 opacity-80",
          title: "font-document text-sm font-bold tracking-tight",
          actionButton: "group-[.toast]:bg-[var(--word-blue)] group-[.toast]:text-white group-[.toast]:rounded-sm font-medium text-xs",
          cancelButton: "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-900 group-[.toast]:rounded-sm text-xs",
          success: "group-[.toaster]:border-t-[var(--word-green)]",
          error: "group-[.toaster]:border-t-[#C50022]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
