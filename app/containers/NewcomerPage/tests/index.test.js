import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import NewcomerPage from '../index';

describe('<NewcomerPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <NewcomerPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
