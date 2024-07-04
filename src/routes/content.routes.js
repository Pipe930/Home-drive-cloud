import { Router } from 'express';
import fs from 'fs/promises';
import { validExistsDirectory } from '../helpers/validExistsDirectory.js';
import { processPath } from '../helpers/path.js';
import { generateMessageResponse } from '../helpers/messageResponse.js';

const router = Router();

router.get('/:path?', async (req, res, next) => {

    const dirPath = processPath(req.params.path);
    const validDirectory = await validExistsDirectory(dirPath.absolutePath);

    if(!validDirectory){
        return res.status(400).json(generateMessageResponse(400, "the directory doesn't exist"));
    }

    const dir = await fs.opendir(dirPath.absolutePath);
    const content = { files: [], directories: [] };

    for await (let dirent of dir){

        if(dirent.isDirectory()){
            content.directories.push(dirent.name);
        } else {
            content.files.push(dirent.name);
        }
    }

    content.directories.sort();
    content.files.sort();

    res.json({path: dirPath.relativePath, content, status_code:200});

});

export default router;
