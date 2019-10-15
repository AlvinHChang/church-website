/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Navbar';

export default defineMessages({
  navbar: {
    id: `${scope}.navbar`,
    defaultMessage: 'This is the Navigation Bar',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  sermon: {
    id: `${scope}.sermon`,
    defaultMessage: 'Sermon',
  },
  gallery: {
    id: `${scope}.gallery`,
    defaultMessage: 'Gallery',
  },
  newcomer: {
    id: `${scope}.newcomer`,
    defaultMessage: "I'm New",
  },
});
