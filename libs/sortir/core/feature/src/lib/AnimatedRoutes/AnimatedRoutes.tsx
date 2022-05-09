import styled from '@emotion/styled';
import { About } from '@sortir/sortir/about/feature';
import { Home } from '@sortir/sortir/home/feature';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import { } from 'framer-motion/dist/framer-motion';
import Champions from '../../../../../champions/feature/src/lib/Champions/Champions';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/* eslint-disable-next-line */
export interface AnimatedRoutesProps { }

const StyledAnimatedRoutes = styled.div`
  color: pink;
`;

const queryClient = new QueryClient();

export function AnimatedRoutes(props: AnimatedRoutesProps) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Routes location={location} key={location.pathname}>
          <Route path="signup" element={<div>Signup</div>} />
          <Route path="login" element={<div>Login</div>} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='champions' element={<Champions />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
