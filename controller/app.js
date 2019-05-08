const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
const jsonParser = bodyParser.json();

const path = require('path');

const cors = require('cors');
app.use(urlEncodedParser);
app.use(jsonParser);
app.use(cors());

const ruangan = require('../model/ruangan');
const barang = require('../model/barang');
const user = require('../model/user');

app.get('/api/ruangan', (req, res, next) => {
    ruangan.getRuangan((err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.get('/api/ruangan/:id', (req, res, next) => {
    const {
        id
    } = req.params;
    ruangan.getRuanganId(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result[0]);
    });
});

app.get('/api/ruangan/user/:user_id', (req, res, next) => {
    const {
        user_id
    } = req.params;
    ruangan.getRuanganUser(user_id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.post('/api/ruangan/', (req, res, next) => {
    const {
        nama,
        nim,
        kelas,
        nohp,
        rg,
        tanggal_peminjaman,
        jam_peminjaman,
        tanggal_pengembalian,
        jam_pengembalian,
        user_id
    } = req.body;
    ruangan.addRuangan(nama, nim, kelas, nohp, rg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.put('/api/ruangan/:id', (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        nama,
        nim,
        kelas,
        nohp,
        rg,
        tanggal_peminjaman,
        jam_peminjaman,
        tanggal_pengembalian,
        jam_pengembalian,
        user_id,
        status,
        keterangan
    } = req.body;
    ruangan.updateRuangan(id, nama, nim, kelas, nohp, rg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, status, keterangan, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.delete('/api/ruangan/:id', (req, res, next) => {
    const {
        id
    } = req.params;
    ruangan.deleteRuangan(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.get('/api/barang', (req, res, next) => {
    barang.getBarang((err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.get('/api/barang/:id', (req, res, next) => {
    const {
        id
    } = req.params;
    barang.getBarangId(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result[0]);
    });
});

app.get('/api/barang/user/:user_id', (req, res, next) => {
    const {
        user_id
    } = req.params;
    barang.getBarangUser(user_id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.post('/api/barang/', (req, res, next) => {
    const {
        nama,
        nim,
        kelas,
        nohp,
        bg,
        jumlah_bg,
        tanggal_peminjaman,
        jam_peminjaman,
        tanggal_pengembalian,
        jam_pengembalian,
        user_id
    } = req.body;
    barang.addBarang(nama, nim, kelas, nohp, bg, jumlah_bg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.put('/api/barang/:id', (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        nama,
        nim,
        kelas,
        nohp,
        bg,
        jumlah_bg,
        tanggal_peminjaman,
        jam_peminjaman,
        tanggal_pengembalian,
        jam_pengembalian,
        user_id,
        status,
        keterangan
    } = req.body;
    barang.updateBarang(id, nama, nim, kelas, nohp, bg, jumlah_bg, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, status, keterangan, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.delete('/api/barang/:id', (req, res, next) => {
    const {
        id
    } = req.params;
    barang.deleteBarang(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.get('/api/user', (req, res, next) => {
    user.getUser((err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.post('/api/user/create-account', (req, res, next) => {
    const {
        nama,
        email,
        password
    } = req.body;
    user.addUser(nama, email, password, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

app.post('/api/user/login', (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    user.loginUser(email, password, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.status(200).send(result);
    });
});

module.exports = app;
