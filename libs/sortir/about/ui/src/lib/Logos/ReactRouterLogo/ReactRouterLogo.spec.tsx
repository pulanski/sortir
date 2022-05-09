import { render } from '@testing-library/react';

import ReactRouterLogo from './ReactRouterLogo';

describe('ReactRouterLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRouterLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
