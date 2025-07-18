import { lazy, LazyExoticComponent } from 'react';
import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages'

type JSXComponent = () => JSX.Element;

export interface Routes {
    name: string
    path: string
    to: string
    Component: LazyExoticComponent<JSXComponent | JSXComponent>;
  }

  const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
  const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
  const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Routes[] = [
    {
        name: 'Lazy-1',
        path: 'lazy1',
        to: '/lazy1',
        Component: lazy1
      },
      {
        name: 'Lazy-2',
        path: 'lazy2',
        to: '/lazy2',
        Component: lazy2
      },
      {
        name: 'Lazy-3',
        path: 'lazy3',
        to: '/lazy3',
        Component: lazy3
      }
];

