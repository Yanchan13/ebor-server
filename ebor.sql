-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2019 at 05:59 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebor`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id` varchar(15) NOT NULL,
  `nama` varchar(30) DEFAULT NULL,
  `nim` varchar(20) DEFAULT NULL,
  `kelas` varchar(50) DEFAULT NULL,
  `nohp` varchar(16) DEFAULT NULL,
  `barang` varchar(255) DEFAULT NULL,
  `jumlah_barang` int(10) DEFAULT NULL,
  `tanggal_peminjaman` date DEFAULT NULL,
  `jam_peminjaman` varchar(10) DEFAULT NULL,
  `tanggal_pengembalian` date DEFAULT NULL,
  `jam_pengembalian` varchar(10) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'pending',
  `keterangan` varchar(255) DEFAULT 'tidak ada keterangan',
  `user_id` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ruangan`
--

CREATE TABLE `ruangan` (
  `id` varchar(15) NOT NULL,
  `nama` varchar(30) DEFAULT NULL,
  `nim` varchar(20) DEFAULT NULL,
  `kelas` varchar(50) DEFAULT NULL,
  `nohp` varchar(16) DEFAULT NULL,
  `ruangan` varchar(20) DEFAULT NULL,
  `tanggal_peminjaman` date DEFAULT NULL,
  `jam_peminjaman` varchar(10) DEFAULT NULL,
  `tanggal_pengembalian` date DEFAULT NULL,
  `jam_pengembalian` varchar(10) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'pending',
  `keterangan` varchar(255) DEFAULT 'tidak ada keterangan',
  `user_id` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(15) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ruangan`
--
ALTER TABLE `ruangan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
