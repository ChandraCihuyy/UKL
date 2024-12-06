import express from 'express';
import {
    getAllBarang,
    getBarangById,
    addBarang,
    updateBarang,
    deleteBarang,
    getUsageReport,
} from '../controller/barang_controller.js'

const app = express()

// Routes
app.get('/', getAllBarang)            // Mendapatkan semua barang
app.get('/:id', getBarangById)       // Mendapatkan barang berdasarkan ID
app.post('/', addBarang)               // Menambahkan barang baru
app.put('/:id', updateBarang)         // Mengupdate barang berdasarkan ID
app.delete('/:id', deleteBarang)      // Menghapus barang berdasarkan ID
app.post('/report', getUsageReport)           // Mendapatkan laporan penggunaan barang

export default app
