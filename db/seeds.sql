INSERT INTO department (id, name)
    VALUES
    (1, 'CEO aka HBIC'),
    (2, 'Sales'),
    (3, 'Accounting'),
    (4, 'Marketing'),
    (5, 'Dev Team'),
    (6, 'Legal Team'),
    (7, 'Human Resources');

INSERT INTO role (id, title, salary, department_id)
    VALUES
    (1, 'CEO aka HBIC', 1000000, 1),
    (2, 'Sales Manager', 190000, 2),
    (3, 'Salesperson', 50000, 2),
    (4, 'Accounting Manager', 85000, 3),
    (5, 'Accountant', 65000, 3),
    (6, 'Marketing Manager', 40000, 4),
    (7, 'Marketer', 45000, 4),
    (8, 'Dev Team', 70000, 5),
    (9, 'Legal Team', 85000, 6),
    (10, 'Human Resources', 75000, 7);

    INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES
    (1, 'Alana', 'McKeel', 1, NULL),
    (2, 'Shaun', 'Greene', 2, 1),
    (3, 'Kevin', 'Begin', 3, 2),
    (4, 'Cabral', 'Williams', 4, 1),
    (5, 'Brennan', 'Spicer', 5, 4),
    (6, 'Katie', 'TA', 6, 1),
    (7, 'Jim', 'Gryck', 7, 6),
    (8, 'Katie', 'McKeel', 8, 1),
    (9, 'Alissa', 'Smith', 9, 10),
    (10, 'Don', 'Ruth', 10, 9);

