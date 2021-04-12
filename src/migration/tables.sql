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