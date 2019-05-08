const conn = require('./databaseConfig');
const ruanganDb = {
    getBarang: (callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM barang';
            con.query(sql, null, (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    getBarangId: (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM barang WHERE id=?';
            con.query(sql, [id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    getBarangUser: (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM barang WHERE user_id=?';
            con.query(sql, [id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    addBarang: (nama, nim, kelas, nohp, barang, jumlah_barang, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const shortid = require('shortid');
            const id = shortid.generate();
            const sql = 'INSERT INTO barang (id, nama, nim, kelas, nohp, barang, jumlah_barang, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            con.query(sql, [id, nama, nim, kelas, nohp, barang, jumlah_barang, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    updateBarang: (id, nama, nim, kelas, nohp, barang, jumlah_barang, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, status, keterangan, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'UPDATE barang SET nama=?, nim=?, kelas=?, nohp=?, barang=?, jumlah_barang=?, tanggal_peminjaman=?, jam_peminjaman=?, tanggal_pengembalian=?, jam_pengembalian=?, user_id=?, status=?, keterangan=? WHERE id=?';
            con.query(sql, [nama, nim, kelas, nohp, barang, jumlah_barang, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, status, keterangan, id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    deleteBarang: (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'DELETE FROM barang WHERE id=?';
            con.query(sql, [id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    }

}

module.exports = ruanganDb;
