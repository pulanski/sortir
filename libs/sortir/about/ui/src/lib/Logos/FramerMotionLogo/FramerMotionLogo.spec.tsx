import { render } from '@testing-library/react';

import FramerMotionLogo from './FramerMotionLogo';

describe('FramerMotionLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FramerMotionLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
