import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   getUsageAnalysis,
   analyzeItems
} from '../controller/peminjaman_controllers.js'


const app = express()
import { authorize } from '../controller/auth_controller.js'
import { IsMember, IsAdmin } from '../middleware/role_validation.js'


app.get('/borrow', getAllPeminjaman)
app.get('/borrow/:id', getPeminjamanById)
app.post('/borrow', authorize, [IsMember], addPeminjaman)
app.post('/return', authorize, [IsMember], pengembalianBarang)
app.post('/usage-report',authorize,[IsAdmin], getUsageAnalysis)
app.post('/borrow-analysis', authorize,[IsAdmin],analyzeItems)

export default app