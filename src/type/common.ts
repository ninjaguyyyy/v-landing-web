import React from 'react';

type EmptyObject = Record<never, never>;

type KeyOfOrEmpty<P extends Record<string, unknown> = EmptyObject> =
  keyof P extends never ? '' : keyof P;

export type ExtendableComponentProps<
  C extends React.ElementType,
  P extends Record<string, unknown> = EmptyObject,
> = P & Omit<React.ComponentPropsWithRef<C>, KeyOfOrEmpty<P>>;
