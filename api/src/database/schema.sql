-- winpty docker exec -it pg bash -> para executar o bash do docker no git ou cmd se der o seguinte erro:
-- OCI runtime exec failed: exec failed: unable to start container process: exec: "-it": executable file not found in $PATH: unknown
-- colar cada uma das queries abaixo no bash

CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE,
    phone VARCHAR,
    category_id UUID,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

