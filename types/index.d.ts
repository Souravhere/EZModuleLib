declare module 'ezmodule' {
    import * as React from 'react';
  
    export interface TooltipProps {
      children: React.ReactNode;
      content: React.ReactNode;
      position?: 'top' | 'right' | 'bottom' | 'left';
      trigger?: 'hover' | 'focus' | 'click';
      delay?: number;
      theme?: 'light' | 'dark';
      [key: string]: any;
    }
  
    export const Tooltip: React.FC<TooltipProps>;
  
    export interface BreadcrumbTrailProps {
      separator?: string;
      theme?: 'light' | 'dark';
      textColor?: string;
      fontSize?: string;
      className?: string;
    }
  
    export const BreadcrumbTrail: React.FC<BreadcrumbTrailProps>;
  }
  