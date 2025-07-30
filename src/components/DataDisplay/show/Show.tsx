import React from "react";
export type ShowProps = {
  children: React.ReactNode;
  when: null | undefined | boolean;
  fallback?: React.ReactNode;
};

export const Show = (props: ShowProps) => {
  const { children, when, fallback } = props;
  if (!when) return <>{fallback || null}</>;
  return <>{children}</>;
};
