-- SQLBook: Code
CREATE TABLE notas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_nota VARCHAR(255) NOT NULL,
    descripcion_nota VARCHAR(150) NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME ON UPDATE CURRENT_TIMESTAMP,
    archivada BOOLEAN DEFAULT FALSE
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(255) NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE nota_categoria (
    id INT AUTO_INCREMENT,
    nota_id INT,
    categoria_id INT,
    estado BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id),
    UNIQUE KEY (nota_id, categoria_id),
    FOREIGN KEY (nota_id) REFERENCES notas(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);