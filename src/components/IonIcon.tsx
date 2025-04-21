// IonIcon.tsx
'use client'

import React, { useEffect, useState } from 'react';

interface IonIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  size?: string;
  color?: string;
  style?: React.CSSProperties;
}

export default function IonIcon({
  name,
  size = '24px',
  color = 'inherit',
  style = {},
  ...props
}: IonIconProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return React.createElement('ion-icon', {
    name,
    style: { fontSize: size, color, ...style },
    ...props,
  });
}
