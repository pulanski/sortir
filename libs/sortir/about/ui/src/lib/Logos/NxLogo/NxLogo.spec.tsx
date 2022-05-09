import { render } from '@testing-library/react';

import NxLogo from './NxLogo';

describe('NxLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
