-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2023 a las 04:58:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mylist_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Electrónica', 'url_imagen_electronica', 'Descripción de Electrónica', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(2, 'Ordenadores', 'url_imagen_ordenadores', 'Descripción de Ordenadores', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(3, 'Casa inteligente', 'url_imagen_casa_inteligente', 'Descripción de Casa inteligente', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(4, 'Arte y Artesanía', 'url_imagen_arte_artesanía', 'Descripción de Arte y Artesanía', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(5, 'Automotor', 'url_imagen_automotor', 'Descripción de Automotor', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(6, 'Bebé', 'url_imagen_bebe', 'Descripción de Bebé', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(7, 'Belleza y cuidado personal', 'url_imagen_belleza', 'Descripción de Belleza y cuidado personal', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(8, 'Moda femenina', 'url_imagen_moda_femenina', 'Descripción de Moda femenina', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(9, 'Moda de hombres', 'url_imagen_moda_hombres', 'Descripción de Moda de hombres', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(10, 'Moda para niñas', 'url_imagen_moda_niñas', 'Descripción de Moda para niñas', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(11, 'Moda para niños', 'url_imagen_moda_niños', 'Descripción de Moda para niños', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(12, 'Salud y Hogar', 'url_imagen_salud_hogar', 'Descripción de Salud y Hogar', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(13, 'Hogar y cocina', 'url_imagen_hogar_cocina', 'Descripción de Hogar y cocina', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(14, 'Industrial y Científico', 'url_imagen_industrial_cientifico', 'Descripción de Industrial y Científico', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(15, 'Equipaje', 'url_imagen_equipaje', 'Descripción de Equipaje', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(16, 'Películas y televisión', 'url_imagen_peliculas_television', 'Descripción de Películas y televisión', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(17, 'Suministros de mascotas', 'url_imagen_mascotas', 'Descripción de Suministros de mascotas', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(18, 'Software', 'url_imagen_software', 'Descripción de Software', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(19, 'Deportes y aire libre', 'url_imagen_deportes_aire_libre', 'Descripción de Deportes y aire libre', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(20, 'Herramientas y mejoras del hogar', 'url_imagen_herramientas', 'Descripción de Herramientas y mejoras del hogar', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(21, 'Juguetes y juegos', 'url_imagen_juguetes_juegos', 'Descripción de Juguetes y juegos', '2023-11-26 22:04:01', '2023-11-26 22:04:01'),
(22, 'Juegos de vídeo', 'url_imagen_juegos_video', 'Descripción de Juegos de vídeo', '2023-11-26 22:04:01', '2023-11-26 22:04:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `asin` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ListId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lists`
--

CREATE TABLE `lists` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lists`
--

INSERT INTO `lists` (`id`, `title`, `description`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, 'Amazon', 'Pulenta', '2023-11-27 03:37:17', '2023-11-27 03:37:17', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `token`, `createdAt`, `updatedAt`) VALUES
(1, 'Pulenta', 'Admin', 'admin@email.com', '12345', 'wvspxrFlHGyk5oFb', '2023-11-26 18:39:03', '2023-11-27 03:36:54');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ListId` (`ListId`);

--
-- Indices de la tabla `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`ListId`) REFERENCES `lists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `lists`
--
ALTER TABLE `lists`
  ADD CONSTRAINT `lists_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
