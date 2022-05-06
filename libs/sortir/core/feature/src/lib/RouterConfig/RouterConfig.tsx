import styled from '@emotion/styled';
import { Loading } from '@sortir/sortir-shared-ui';
import { Home } from 'libs/sortir/home/feature/src';
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
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />}> */}
          <Route path="signup" element={<div>Signup</div>} />
          <Route path="login" element={<div>Login</div>} />
          {/* </Route> */}
          <Route path="/" element={<Home />}>
            <Route path="home" element={<div>Home</div>} />
            <Route path="about" element={<div>About</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default RouterConfig;
