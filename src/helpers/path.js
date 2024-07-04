import path from 'path';
import storage from '../storage.js';

const slashSystem = process.platform === 'win32' ? '\\' : '/';

/**
 * Generate the relative and absolute path of the file or directory
 * 
 * @param string urlPath 
 * @returns {relativePath, absolutePath}
 */
export const processPath = (urlPath) => {

    const relativePath = urlPath ? urlPath.replace(/-/g, slashSystem) : slashSystem;
    const absolutePath = path.join(storage, relativePath);

    return { relativePath, absolutePath };
}
