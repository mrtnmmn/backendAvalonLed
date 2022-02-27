import express from 'express'
var router = express.Router()

import * as controller from '../controller/ledStatus.js'

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.insert)
router.put('/:id', controller.update)

export { router }