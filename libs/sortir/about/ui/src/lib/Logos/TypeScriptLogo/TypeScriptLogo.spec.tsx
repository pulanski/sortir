import { render } from '@testing-library/react';

import TypeScriptLogo from './TypeScriptLogo';

describe('TypeScriptLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TypeScriptLogo logoImage={''} alt={''} href={''} />);
    expect(baseElement).toBeTruthy();
  });
});
