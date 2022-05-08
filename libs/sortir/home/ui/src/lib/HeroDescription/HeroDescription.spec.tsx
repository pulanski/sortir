import { render } from '@testing-library/react';

import HeroDescription from './HeroDescription';

describe('HeroDescription', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroDescription />);
    expect(baseElement).toBeTruthy();
  });
});
