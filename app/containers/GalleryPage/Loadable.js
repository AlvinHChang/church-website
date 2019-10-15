/**
 * Asynchronously loads the component for GalleryPage
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
