import { getRelativePath } from '@/utils';
import {
  SITE_TITLE,
  SITE_DESC,
  SITE_URL,
} from '../constants';

export default () => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={SITE_DESC} />
    <link rel="icon" type="image/png" sizes="32x32" href={getRelativePath('/static/favicon/favicon-32x32.png')} />
    <link rel="icon" type="image/png" sizes="16x16" href={getRelativePath('/static/favicon/favicon-16x16.png')} />
    <link rel="icon" type="image/x-icon" href={getRelativePath('/static/favicon/favicon.ico')} />
    <link rel="apple-touch-icon" href={getRelativePath('/static/favicon/apple-touch-icon.png')} />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:title" content={SITE_TITLE} />
    <meta property="og:description" content={SITE_DESC} />
    <meta property="og:image" content={getRelativePath('/static/favicon/icon.png')} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </>
);
