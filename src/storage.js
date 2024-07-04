import { config } from 'dotenv';

config();

const storagePath = process.env.PATH_CLOUD_STORAGE;

if (!storagePath){

    console.error('Storage path not defined, ', 'set a value for PATH_CLOUD_STORAGE enviroment variable');
    process.exit(1);
}

export default storagePath;
