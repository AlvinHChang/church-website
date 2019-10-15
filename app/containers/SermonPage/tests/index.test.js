import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import SermonPage from '../index';

describe('<SermonPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <SermonPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
