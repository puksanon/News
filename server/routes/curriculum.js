const express = require('express');
const router  = express.Router();

const curriculum_controller = require('../controllers/CurriculumController');

/* 
    ส่งค่า : ส่งผ่าน Body ด้วย tags [name, degree]
    อธิบาย :  เพิ่มข้อมูลที่ถูกส่งเข้า Table curriculum
    คืนค่า : curriculum_id ล่าสุด
*/
router.post('/', curriculum_controller.cCurriculum);

/* 
    ส่งค่า : ส่งผ่าน parameter ids ถ้ามีมากกว่า 1 id ให้คั่นด้วย comma(,)
    อธิบาย : ร้องขอข้อมูลของ curriculum โดยอ้างอิงจาก ids
    คืนค่า : ข้อมูลของ curriculum ที่ประกอบไปด้วย {curriculum_id, name, degree}
*/
router.get('/:ids', curriculum_controller.rCurriculum);

/* 
    ส่งค่า : ส่งผ่าน Body ด้วย tags [id, [, name, degree]]
    อธิบาย : แก้ไขข้อมูลที่ถูกเก็บใน Table curriculum ตาม id ที่ได้รับ
    คืนค่า : String ของรายละเอียดการแก้ไข
*/
router.put('/:id', curriculum_controller.uCurriculum);

/* 
    ส่งค่า : ส่งผ่าน parameter ids ถ้ามีมากกว่า 1 id ให้คั่นด้วย comma(,)
    อธิบาย : ลบ curriculum ออกจาก Table ตาม ids ที่กำหนด
    คืนค่า : จำนวน curriculum ที่ได้รับผลของคำสั่ง {affectedCurriculum}
*/
router.delete('/:ids', curriculum_controller.dCurriculum);

module.exports = router;