import { render } from '@testing-library/react';

import AnimatedRoutes from './AnimatedRoutes';

describe('AnimatedRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimatedRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
