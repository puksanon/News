const express = require('express');
const router = express.Router();

const document_controller = require('../controllers/DocumentController');

// Get document data from given uid
router.get('/:limit', document_controller.listDocuments);

/* 
    ส่งค่า : ส่งผ่าน body ด้วย tags 
           [name, abstract, [keywords], courseId, adviserId [, coadvisers[, commitees[, [students] ]]]
           และส่งไฟล์ thesis ในรูปแบบ pdf ขนาดไม่เกิน 10MB ผ่าน input box ที่กำหนด id และ name ชื่อ thesis
    อธิบาย : เขียนไฟล์ลงใน Server และทำการเก็บข้อมูลลงใน document, commitee, coadviser, keyword_list, author_list
    คืนค่า : document_id ล่าสุด
*/
router.post('/', document_controller.cDocument);

module.exports = router;