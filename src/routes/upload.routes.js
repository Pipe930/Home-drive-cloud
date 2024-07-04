import { Router } from 'express';
import { processPath } from '../helpers/path.js';
import { validExistsFile } from '../helpers/move.js';
import { validExistsDirectory } from '../helpers/validExistsDirectory.js';
import { generateMessageResponse } from '../helpers/messageResponse.js';

const router = Router();

router.post('/:path?', async (req, res, next) => {
    
    if(!req.files){

        return res.status(400).json(
            generateMessageResponse(400, 'No files were uploaded')
        );
    }

    const dirPath = processPath(req.params.path);
    let files = req.files.file;

    
    if (!Array.isArray(files)){
        
        files = [files];
    }
        
    const validDirectory = await validExistsDirectory(dirPath.absolutePath);

    if(!validDirectory){
        return res.status(400).json(generateMessageResponse(400, "The directory doesn't exist"));
    }

    for(let file of files){
        await validExistsFile(file, dirPath.absolutePath);
    }

    res.status(200).json(
        generateMessageResponse(200, 'Files successfully uploaded', dirPath.relativePath)
    )
})

export default router;
