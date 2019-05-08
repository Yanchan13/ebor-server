const conn = require('./databaseConfig');
const ruanganDb = {
    getRuangan: (callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM ruangan';
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
    getRuanganId: (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM ruangan WHERE id=?';
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
    getRuanganUser: (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'SELECT * FROM ruangan WHERE user_id=?';
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
    addRuangan: (nama, nim, kelas, nohp, ruangan, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const shortid = require('shortid');
            const id = shortid.generate();
            const sql = 'INSERT INTO ruangan (id, nama, nim, kelas, nohp, ruangan, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            con.query(sql, [id, nama, nim, kelas, nohp, ruangan, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    updateRuangan: (id, nama, nim, kelas, nohp, ruangan, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, status, keterangan, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'UPDATE ruangan SET nama=?, nim=?, kelas=?, nohp=?, ruangan=?, tanggal_peminjaman=?, jam_peminjaman=?, tanggal_pengembalian=?, jam_pengembalian=?, user_id=?, status=?, keterangan=? WHERE id=?';
            con.query(sql, [nama, nim, kelas, nohp, ruangan, tanggal_peminjaman, jam_peminjaman, tanggal_pengembalian, jam_pengembalian, user_id, status, keterangan, id], (err, res) => {
                con.release();
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                return callback(null, res);
            });
        });
    },
    deleteRuangan: (id, callback) => {
        conn.getConnection((err, con) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            console.log('Connected');
            const sql = 'DELETE FROM ruangan WHERE id=?';
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
