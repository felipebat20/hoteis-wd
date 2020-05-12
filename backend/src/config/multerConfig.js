import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const filename = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, filename);
            });
        },
    }),
}