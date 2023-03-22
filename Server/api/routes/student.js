const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const StudentsController = require('../controllers/student');
const multer = require('multer');
const checkAuth = require('../middleWare/check-auth');


//Upload a file and its configuration
const storage = multer.diskStorage({
    destination: function (req, file, callbback) {
        callbback(null, './uploads');
    },
    filename: function (res, file, callbback) {
        callbback(null, file.originalname + new Date().toISOString());
    }
});
const fileFilter = (req, file, callbback) => {
    // if (file.mimetype === '/image/jpg' || file.mimetype === '/image/png') {
    callbback(null, true)
    // } else {
    callbback(null, false);
    // }
}
const upload = multer({
    storage: storage,
    limits: {
        //setting filesize as 5mb
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


router.get('/',  StudentsController.student_get_all)

// router.post('/', upload.single('marksheetImg'), (req, res, next) => {
router.post('/',checkAuth, StudentsController.students_create_student);
router.get('/:std_id', checkAuth,StudentsController.students_get_student);
router.patch('/:std_id', StudentsController.students_update_student);
router.delete('/:std_id', StudentsController.students_delete_student);
module.exports = router;