create table goals (
    id integer,
    name varchar(255),
    targetDate timestamp
);

create table records
(
    id           smallserial not null
        constraint records_pk
            primary key,
    name         varchar(60) not null,
    date         timestamp   not null,
    result       varchar(60) not null,
    "exerciseId" smallint    not null,
    username     varchar(60)
);

create table nutrition_values
(
    id       smallint         not null
        constraint nutrition_values_pk
            primary key,
    kcal     double precision not null,
    proteine double precision not null,
    zucker   double precision not null
);

create table nutrition
(
    id          smallserial  not null
        constraint nutrition_pk
            primary key
        constraint nutrition_nutrition_values_id_fk
            references nutrition_values,
    name        varchar(60)  not null,
    description varchar(255) not null,
    preparation text         not null
);

