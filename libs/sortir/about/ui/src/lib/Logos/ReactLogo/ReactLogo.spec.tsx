import { render } from '@testing-library/react';

import ReactLogo from './ReactLogo';

describe('ReactLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
