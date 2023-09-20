const REPOSITORY = 'fanta-git/this_is_kyu-kura-rin';
const [userName, repositoryName] = REPOSITORY.split('/');

export const REPOSITORY_URL = `https://github.com/${REPOSITORY}`;
export const SITE_NAME = 'きゅうくらりんメーカー';
export const DESCRIPTION = 'これがきゅうくらりんです';
export const SITE_URL = `https://${userName}.github.io/${repositoryName}`;
export const IMG_URL = `${SITE_URL}/ogp.png`;
