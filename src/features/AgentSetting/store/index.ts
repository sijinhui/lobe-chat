'use client';

import { createContext } from 'zustand-utils';
import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
// import { StateCreator } from 'zustand';

import { StoreApiWithSelector } from '@/utils/zustand';

import { Store, store } from './action';

export type { State } from './initialState';

// @ts-expect-error
export const createStore = () => createWithEqualityFn(subscribeWithSelector(store), shallow);
// export const createStore = () => createWithEqualityFn(
//     subscribeWithSelector(
//       store as StateCreator<Store, [['zustand/subscribeWithSelector', never]]>
//     ),
//     shallow
// );

export const { useStore, useStoreApi, Provider } = createContext<StoreApiWithSelector<Store>>();

export { selectors } from './selectors';
