

create table if not exists tasks (
    id serial primary key,
    project_id integer not null 
        references projects(id)
        on delete cascade,
    assigned_to integer
        references users(id)
        on delete set null,
    assigned_by integer not null
        references users(id)
        on delete restrict,
    created_by integer not null
        references users(id)
        on delete restrict,
    task_name varchar(255) not null,
    description text,
    status varchar(20) not null default 'pending',
    priority varchar(20) not null default 'medium',
    -- due_date date,
    completed_at timestamp,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp 
);