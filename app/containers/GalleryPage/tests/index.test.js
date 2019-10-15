import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import GalleryPage from '../index';

describe('<GalleryPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <GalleryPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
