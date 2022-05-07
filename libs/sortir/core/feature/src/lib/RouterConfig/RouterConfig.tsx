import styled from '@emotion/styled';
import { Loading } from '@sortir/sortir-shared-ui';
import { About } from '@sortir/sortir/about/feature';
import { Footer } from '@sortir/sortir/home/ui';
import { Home, Navigation } from 'libs/sortir/home/feature/src';
import { Suspense } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useRoutes,
} from 'react-router-dom';

/* eslint-disable-next-line */
export interface RouterConfigProps { }

export function RouterConfig(props: RouterConfigProps) {
  return (
    <Suspense fallback={<Loading />}>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<div>Signup</div>} />
          <Route path="login" element={<div>Login</div>} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Suspense>
  );
}

export default RouterConfig;
