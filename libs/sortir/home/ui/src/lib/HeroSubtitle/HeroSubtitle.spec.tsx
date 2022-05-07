import { render } from '@testing-library/react';

import HeroSubtitle from './HeroSubtitle';

describe('HeroSubtitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSubtitle />);
    expect(baseElement).toBeTruthy();
  });
});
