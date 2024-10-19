import { atom } from 'jotai';

export type RootLayoutState = {
  openDrawer: boolean;
};

const INITIAL_STATE: RootLayoutState = {
  openDrawer: false,
};

export const rootLayoutAtom = atom<RootLayoutState>(INITIAL_STATE);
