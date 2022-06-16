INSERT INTO departments (name)
    VALUES
    ('CEO aka HBIC'),
    ('Sales Manager'),
    ('Salesperson'),
    ('Accounting Manager'),
    ('Accountant'),
    ('Marketing Manager'),
    ('Marketer'),
    ('Dev Team'),
    ('Legal Team'),
    ('Human Resources');


INSERT INTO roles (job_title, department_id, salary_amount)
    VALUES
    ('CEO aka HBIC', 1, 1000000),
    ('Sales Manager', 2, 190000),
    ('Salesperson', 3, 50000),
    ('Accounting Manager', 4, 85000),
    ('Accountant', 5, 65000),
    ('Marketing Manager', 6, 40000),
    ('Marketer', 7, 45000),
    ('Dev Team', 8, 70000),
    ('Legal Team', 9, 85000),
    ('Human Resources', 10, 75000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES
    ('Alana', 'McKeel', 1, NULL),
    ('Shaun', 'Greene', 2, 1),
    ('Kevin', 'Begin', 3, 2),
    ('Cabral', 'Williams', 4, 1),
    ('Brennan', 'Spicer', 5, 4),
    ('Katie' 'TA', 6, 1),
    ('Jim', 'Gryck', 7, 6),
    ('Katie', 'McKeel', 8, 1),
    ('Alissa', 'Smith', 9, 10),
    ('Don', 'Ruth', 10, 9);

