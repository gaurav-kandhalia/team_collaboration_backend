

create table if not exists task_comments (
        id serial primary key ,
        task_id integer not null references tasks(id) on delete cascade,
        created_by integer not null references users(id) on delete restrict,
        comment text not null,
        created_at timestamp not null default current_timestamp,
        updated_at timestamp
);
