import { Router } from 'express';
import { processPath } from '../helpers/path.js';
import { generateMessageResponse } from '../helpers/messageResponse.js';
import { validExistsDirectory } from '../helpers/validExistsDirectory.js';
import fs from 'fs/promises';
import path from 'path';

const router = Router();

router.post('/:path?', async (req, res) => {

    const dirPath = processPath(req.params.path);
    const nameDirectory = req.body.name;

    if(!nameDirectory){

        return res.status(400).json(generateMessageResponse(400, 'No name directory was specified'))
    }

    const newDirPath = path.join(dirPath.absolutePath, nameDirectory);

    const validDirectoryCreated = await validExistsDirectory(newDirPath);
    const validDirectoryPath = await validExistsDirectory(dirPath.absolutePath);

    if(validDirectoryCreated || !validDirectoryPath){
        return res.status(400).json(generateMessageResponse(400, "Directory already exists or the directory doesn't exist"));
    }

    if(!validDirectoryPath){
        return res.status(400).json(generateMessageResponse(400, "The directory doesn't exist"));
    }

    try {
        await fs.mkdir(newDirPath);
    } catch (mkdirError) {
        return res.status(500).json(generateMessageResponse(500, 'Error creating directory'));
    }

    return res.status(200).json(generateMessageResponse(200, 'Directory created successfully'));

})

export default router;
