import { Loading } from '@sortir/sortir-shared-ui';
import { Navigation } from 'libs/sortir/home/feature/src';
import { Footer } from '@sortir/sortir/home/ui';
import { Suspense } from 'react';
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';
import {
  BrowserRouter,
} from 'react-router-dom';

/* eslint-disable-next-line */
export interface RouterConfigProps { }

export function RouterConfig(props: RouterConfigProps) {
  return (
    <Suspense fallback={<Loading />}>
      <Navigation />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <Footer />
    </Suspense>
  );
}

export default RouterConfig;
