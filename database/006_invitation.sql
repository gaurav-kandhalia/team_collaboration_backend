

create table if not exists invitations (
        id serial primary key ,
        invited_to integer not null references users(id) on delete restrict,
        invited_by integer not null references users(id) on delete restrict,
        invited_at timestamp not null default current_timestamp,
        project_id integer not null references projects(id) on delete restrict,
        status varchar(20) not null default 'pending',
        responded_at timestamp
);