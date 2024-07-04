import { Router } from 'express';
import mime from 'mime-types';
import { processPath } from '../helpers/path.js';
import { validExistsDirectory } from '../helpers/validExistsDirectory.js';
import { generateMessageResponse } from '../helpers/messageResponse.js';

const router = Router();

router.get('/:path', async (req, res) => {

    const file = processPath(req.params.path).absolutePath;
    const validFile = await validExistsDirectory(file);

    if(!validFile){
        return res.status(400).json(generateMessageResponse(400, "The file doesn't exist"));
    }

    const mimeType = mime.lookup(file);

    res.setHeader('Content-Disposition', `attachament; filename=${file}`);
    res.setHeader('Content-Type', mimeType);
    res.download(file);
})

export default router;
