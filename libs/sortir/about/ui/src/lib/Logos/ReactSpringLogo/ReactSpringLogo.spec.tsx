import { render } from '@testing-library/react';

import ReactSpringLogo from './ReactSpringLogo';

describe('ReactSpringLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSpringLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
