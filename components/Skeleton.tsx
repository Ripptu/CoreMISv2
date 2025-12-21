import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', variant = 'rect' }) => {
  const baseClasses = "relative overflow-hidden bg-slate-200/60";
  const shimmer = "after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:-translate-x-full after:animate-[shimmer_1.5s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent";
  
  const roundedClasses = variant === 'circle' ? 'rounded-full' : 'rounded-lg';
  
  return (
    <div className={`${baseClasses} ${roundedClasses} ${shimmer} ${className}`} />
  );
};