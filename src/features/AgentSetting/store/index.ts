'use client';

import { createContext } from 'zustand-utils';
import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import type { StateCreator } from 'zustand';

import { StoreApiWithSelector } from '@/utils/zustand';

import { Store, store } from './action';

export type { State } from './initialState';

export const createStore = () => createWithEqualityFn(
    subscribeWithSelector(
      store as StateCreator<Store>
    ),
    shallow
);

export const { useStore, useStoreApi, Provider } = createContext<StoreApiWithSelector<Store>>();

export { selectors } from './selectors';
