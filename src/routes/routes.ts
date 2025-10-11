import LazyLayout from '../01-lazyload/layout/LazyLayout';
import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages'
import { NoLazy } from '../01-lazyload/pages/NoLazy'
import { lazy, LazyExoticComponent } from 'react';
//type to declare a lazyComponent

type JSXComponent = () => JSX.Element;

export interface Routes {
    name: string
    path: string
    to: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  }

  const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));


  //   const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
//   const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Routes[] = [
    {
        name: 'LazyLayout - Dash',
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout
    },  
      {
        name: 'No Lazy',
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy
      }
];

