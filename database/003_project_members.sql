CREATE TABLE IF NOT EXISTS project_members (

    user_id INTEGER NOT NULL
        REFERENCES users(id)
        ON DELETE RESTRICT,

    project_id INTEGER NOT NULL
        REFERENCES projects(id)
        ON DELETE CASCADE,

    role VARCHAR(20) NOT NULL DEFAULT 'member',

    joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    left_at TIMESTAMP,

    PRIMARY KEY (user_id, project_id)

);