import { type ReactNode } from "react";
import { AlertTriangle, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type NoticeType = "info" | "notice" | "warning" | "error";

const noticeStyles: Record<NoticeType, { container: string; text: string; icon: string; Icon: typeof Info }> = {
  info: {
    container: "bg-white border-border",
    text: "text-muted-foreground",
    icon: "text-muted-foreground",
    Icon: Info,
  },
  notice: {
    container: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900/50",
    text: "text-blue-700 dark:text-blue-300",
    icon: "text-blue-500 dark:text-blue-300",
    Icon: Info,
  },
  warning: {
    container: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-900/50",
    text: "text-amber-800 dark:text-amber-300",
    icon: "text-amber-600 dark:text-amber-300",
    Icon: AlertTriangle,
  },
  error: {
    container: "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-900/50",
    text: "text-red-700 dark:text-red-300",
    icon: "text-red-600 dark:text-red-300",
    Icon: XCircle,
  },
};

interface NoticeProps {
  text: ReactNode;
  type?: NoticeType;
  className?: string;
}

const Notice = ({ text, type = "info", className }: NoticeProps) => {
  const { container, text: textClass, icon, Icon } = noticeStyles[type];

  return (
    <div className={cn("flex items-start gap-2 rounded-lg border p-3 text-sm", container, className)}>
      <Icon className={cn("mt-0.5 h-4 w-4 flex-shrink-0", icon)} />
      <span className={cn("text-sm", textClass)}>{text}</span>
    </div>
  );
};

export default Notice;
