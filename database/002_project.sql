

create table if not exists projects (
        id  serial primary key,
        owner_id integer not null references users(id) on delete restrict,
        name varchar(100) not null,
        description text,
        visibility varchar(20) not null default 'private',
        start_date date,
        end_date date,
        status VARCHAR(20) NOT NULL DEFAULT 'planning',
        created_at timestamp not null default current_timestamp,
        updated_at timestamp
);