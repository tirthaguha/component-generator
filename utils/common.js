/**
 * isTypescript - Based on script args, it returns if it is Typescript or javascript generate action
 * @returns {boolean}
 */
export function isTypescript() {
    const scriptArgs = process.argv
    return scriptArgs.indexOf('--js') < 0
}

/**
 * getComputedFolderPath - This will compute folder path relative to monorepo(if any)
 * @param {string} monoropePath - path of monorepo app/package selected
 * @param {string} resourcePath - path of the resource beinng created
 * @returns {string} final computed path
 */

export function getComputedFolderPath(monoropePath, resourcePath) {
    return monoropePath ? `${monoropePath}/${resourcePath}` : resourcePath
}