import { render } from '@testing-library/react';

import EmotionLogo from './EmotionLogo';

describe('EmotionLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmotionLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
