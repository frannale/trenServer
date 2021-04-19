-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: TREN
-- ------------------------------------------------------
-- Server version	10.3.25-MariaDB-0ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cabinas`
--

DROP TABLE IF EXISTS `cabinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cabinas` (
  `id_config` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_cabina` varchar(120) NOT NULL,
  `observaciones` varchar(400) NOT NULL,
  `fecha_instalacion` date NOT NULL,
  PRIMARY KEY (`id_config`),
  UNIQUE KEY `codigo_cabina` (`codigo_cabina`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cabinas`
--

LOCK TABLES `cabinas` WRITE;
/*!40000 ALTER TABLE `cabinas` DISABLE KEYS */;
INSERT INTO `cabinas` VALUES (1,'22dds22','sss','2020-08-23'),(2,'ff','sss','2020-03-23'),(56,'z','sss','2022-03-23');
/*!40000 ALTER TABLE `cabinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lecturas`
--

DROP TABLE IF EXISTS `lecturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lecturas` (
  `id_lectura` int(11) NOT NULL AUTO_INCREMENT,
  `id_punto` int(11) DEFAULT NULL,
  `id_cabina` int(11) DEFAULT NULL,
  `epc` varchar(220) NOT NULL,
  `fecha_lectura` datetime NOT NULL,
  PRIMARY KEY (`id_lectura`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecturas`
--

LOCK TABLES `lecturas` WRITE;
/*!40000 ALTER TABLE `lecturas` DISABLE KEYS */;
INSERT INTO `lecturas` VALUES (1,2,1,'000256789abc1542','2020-11-28 18:12:23'),(2,2,1,'000256789abc1542','2020-11-28 18:12:23'),(3,2,1,'000256789abc1542','2020-11-28 18:12:23'),(4,4098,2,'100256789abc1542','2020-12-28 18:12:23'),(5,4098,2,'100256789abc1542','2020-12-28 18:12:23'),(6,4098,2,'100256789abc1542','2022-12-28 18:12:23'),(7,4098,2,'100256789abc1542','2022-12-28 19:12:23'),(8,4098,6,'100256789abc1542','2022-12-28 19:12:23');
/*!40000 ALTER TABLE `lecturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntos`
--

DROP TABLE IF EXISTS `puntos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puntos` (
  `id_punto` int(11) NOT NULL AUTO_INCREMENT,
  `id_tag` varchar(120) NOT NULL,
  `via` varchar(220) NOT NULL,
  `baliza` varchar(220) NOT NULL,
  `asociado_a` varchar(220) NOT NULL,
  `progresivas` varchar(220) NOT NULL,
  `latitud` varchar(220) NOT NULL,
  `longitud` varchar(220) NOT NULL,
  `estado` varchar(220) NOT NULL,
  `epc` varchar(220) NOT NULL,
  `fecha_instalacion` date NOT NULL,
  `observaciones` varchar(400) NOT NULL,
  PRIMARY KEY (`id_punto`),
  UNIQUE KEY `id_tag` (`id_tag`)
) ENGINE=InnoDB AUTO_INCREMENT=688 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntos`
--

LOCK TABLES `puntos` WRITE;
/*!40000 ALTER TABLE `puntos` DISABLE KEYS */;
INSERT INTO `puntos` VALUES (2,'yy','la plata bs as','baliza','asociado_a','4554km','-452.61531','-2.61531','activo','asd2321','2022-08-23','-2.61531'),(22,'123','la plata bs as','baliza','asociado_a','4554km','-452.61531','-2.61531','activo','asd2321','2020-08-23','-2.61531'),(687,'c','la plata bs as','baliza','asociado_a','4554km','-452.61531','-2.61531','activo','asd2321','2021-08-23','-2.61531');
/*!40000 ALTER TABLE `puntos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(120) NOT NULL,
  `password` varchar(120) NOT NULL,
  `role` varchar(120) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$pbkdf2-sha256$29000$8b7XGuP8f0/JGSMkZAwBQA$rZgh/OnJjyOJdA7dhr7KICHPMZ6oOh3rQV0iPdqaH5g','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-19 20:00:40
