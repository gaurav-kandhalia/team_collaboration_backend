

create table if not exists user_session (
    id serial primary key,
    user_id integer not null references users(id) on delete restrict,
    created_at timestamp not null default current_timestamp,
    hashed_refresh_token not null text unique,
    expires_at timestamp not null,
    device_info text,
    is_revoked boolean not null default false,
    last_activity timestamp not null default current_timestamp

)