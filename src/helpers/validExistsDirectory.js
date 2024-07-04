import fs from "fs/promises";

/**
 * Function to validate if a directory exists
 * 
 * @param string urlPath 
 * @return true | false 
 */
export const validExistsDirectory = async (urlPath) => {

    try {
        await fs.access(urlPath);
        return true;
    } catch (error) {
        
        return false;
    }
}
