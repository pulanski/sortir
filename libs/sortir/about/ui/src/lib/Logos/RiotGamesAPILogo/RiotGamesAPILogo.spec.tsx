import { render } from '@testing-library/react';

import RiotGamesAPILogo from './RiotGamesAPILogo';

describe('RiotGamesAPILogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RiotGamesAPILogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
