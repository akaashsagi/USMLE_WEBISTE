import { Brain, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <Loader2 
      className={cn(
        "animate-spin text-blue-600", 
        sizeClasses[size], 
        className
      )} 
    />
  );
}

interface LoadingPageProps {
  message?: string;
  showLogo?: boolean;
}

export function LoadingPage({ 
  message = "Loading...", 
  showLogo = true 
}: LoadingPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        {showLogo && (
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">USMLE NextGen</span>
          </div>
        )}
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

interface LoadingCardProps {
  className?: string;
  children?: React.ReactNode;
}

export function LoadingCard({ className, children }: LoadingCardProps) {
  return (
    <div className={cn(
      "flex items-center justify-center p-8 border rounded-lg bg-card",
      className
    )}>
      <div className="text-center space-y-3">
        <LoadingSpinner />
        {children}
      </div>
    </div>
  );
}

// Skeleton components for better loading states
export function QuestionSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="p-6 border rounded-lg space-y-3 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
}