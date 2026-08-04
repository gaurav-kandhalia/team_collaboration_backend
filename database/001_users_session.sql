

create table if not exists user_session (
    id serial primary key,
    user_id integer not null references users(id) on delete restrict,
    
    hashed_refresh_token not null text unique,
    created_at timestamp not null default current_timestamp,
    expires_at timestamp not null,
    device_info text,
   
    last_activity timestamp not null default current_timestamp
     is_revoked boolean not null default false,
)