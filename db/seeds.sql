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
