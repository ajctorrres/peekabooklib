-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2020 at 07:02 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `peekabookf`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `ISBN` varchar(20) NOT NULL,
  `id` int(20) NOT NULL,
  `edition` int(100) NOT NULL,
  `authorlname` varchar(50) NOT NULL,
  `authorfname` varchar(50) NOT NULL,
  `publishDate` date NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `collection`
--

CREATE TABLE `collection` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `resourceId` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `resource`
--

CREATE TABLE `resource` (
  `id` int(15) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `status` int(1) NOT NULL,
  `dateCreated` datetime NOT NULL,
  `dateUpdated` datetime NOT NULL,
  `dateDeleted` datetime NOT NULL,
  `typeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resource`
--

INSERT INTO `resource` (`id`, `title`, `category`, `location`, `section`, `status`, `dateCreated`, `dateUpdated`, `dateDeleted`, `typeId`) VALUES
(1, 'Harry Potter and the Philosopher\'s Stone', 'Fiction', 'JB-LRC', 'Humanities', 1, '2020-12-22 08:24:15', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(2, 'Harry Potter and the Chamber of Secrets', 'Fiction', 'JB-LRC', 'Humanities', 1, '2020-12-22 08:18:37', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(3, 'Harry Potter and the Prisoner of Azkaban', 'Fiction', 'JB-LRC', 'Humanities', 1, '2020-12-22 10:14:29', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `yearLevel` int(11) NOT NULL,
  `program` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `school` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `yearLevel`, `program`, `department`, `school`, `address`) VALUES
(18400248, 3, 'BS Computer Science', 'Department of Computer Information Sciences and Mathematics', 'School of Arts and Sciences', 'Talamban, Cebu City');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(8) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `mname` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  `contact` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `typeId` int(11) NOT NULL,
  `dateCreated` datetime NOT NULL,
  `dateUpdated` datetime NOT NULL,
  `dateDeleted` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `lname`, `fname`, `mname`, `birthday`, `contact`, `status`, `typeId`, `dateCreated`, `dateUpdated`, `dateDeleted`) VALUES
(16100999, '18400255@usc.edu.ph', 'p@ssw0rd', 'Cabarron', 'Oscar III', 'Leva', '1999-12-29', 2147483647, 1, 1, '2020-12-22 06:36:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16101456, '16101456@usc.edu.ph', 'p@ssw0rd', 'Sagarino', 'Vin Myca', 'C', '1999-09-14', 2147483647, 1, 1, '2020-12-22 06:33:13', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18400248, '18400248@usc.edu.ph', 'p@ssw0rd', 'Torres', 'Ariel Joy', 'Concepcion', '1996-08-17', 2147483647, 1, 1, '2020-12-22 06:07:25', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18400255, '18400255@usc.edu.ph', 'p@ssw0rd', 'Montejo', 'Jennen Isabelle', 'Mazo', '1999-11-22', 2147483647, 1, 1, '2020-12-22 06:43:21', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`ISBN`);

--
-- Indexes for table `collection`
--
ALTER TABLE `collection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resource`
--
ALTER TABLE `resource`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collection`
--
ALTER TABLE `collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18400256;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
