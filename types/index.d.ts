declare module 'ezmodule' {
  import * as React from 'react';

  // Tooltip Component Props
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

  // BreadcrumbTrail Component Props
  export interface BreadcrumbTrailProps {
      separator?: string;
      theme?: 'light' | 'dark';
      textColor?: string;
      fontSize?: string;
      className?: string;
  }

  export const BreadcrumbTrail: React.FC<BreadcrumbTrailProps>;

  // Tabs Component Props
  export interface Tab {
      label: string;
      content: React.ReactNode;
  }

  export interface TabsProps {
      tabs: Tab[];
      defaultActiveTab?: number;
      tabPosition?: 'top' | 'bottom' | 'left' | 'right';
      theme?: 'light' | 'dark' | 'custom';
      buttonStyles?: React.CSSProperties;
      activeButtonStyles?: React.CSSProperties;
      containerStyles?: React.CSSProperties;
      contentStyles?: React.CSSProperties;
      transitionDuration?: string;
  }

  export const Tabs: React.FC<TabsProps>;
}
