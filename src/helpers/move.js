import path from 'path';
import fs from 'fs/promises';

/**
 * Function validate if the file exists
 * 
 * @param string file 
 * @param string storagePath 
 * @returns
 */
export const validExistsFile = (file, storagePath) => {

    const filePath = path.join(storagePath, file.name);

    return new Promise((resolve, reject) => {

        fs.access(filePath)
        .then(() => reject(new Error(`File ${file.name} already exists`)))
        .catch(() => file.mv(filePath, (error) => {

            if(error){
                reject();
            } else {
                resolve();
            }
        }))
    })

}
