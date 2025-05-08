const multer = require('multer');

const storage = multer.diskStorage({
  desination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.organizationname}`);
  },
  
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)){
    cb(null, true);
   }
  
};
const upload = multer({ storage, fileFilter });
module.exports = upload;
