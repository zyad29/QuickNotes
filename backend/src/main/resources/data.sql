-- Insérer des catégories de base
INSERT INTO CATEGORY (name, color) VALUES ('Travail', '#FF5733');
INSERT INTO CATEGORY (name, color) VALUES ('Personnel', '#33FF57');
INSERT INTO CATEGORY (name, color) VALUES ('Idées', '#3357FF');
INSERT INTO CATEGORY (name, color) VALUES ('Courses', '#F3FF33');
INSERT INTO CATEGORY (name, color) VALUES ('Autre', '#FF33F3');

-- Insérer quelques notes d'exemple
INSERT INTO NOTE (title, content, created_at, important, category_id) 
VALUES ('Réunion équipe', 'Préparer la présentation pour la réunion hebdomadaire', CURRENT_TIMESTAMP(), true, 1);

INSERT INTO NOTE (title, content, created_at, important, category_id) 
VALUES ('Anniversaire Julie', 'Acheter un cadeau pour l''anniversaire de Julie', CURRENT_TIMESTAMP(), false, 2);

INSERT INTO NOTE (title, content, created_at, important, category_id) 
VALUES ('Idée app', 'Développer une application de suivi de budget', CURRENT_TIMESTAMP(), true, 3);

INSERT INTO NOTE (title, content, created_at, important, category_id) 
VALUES ('Liste courses', 'Lait, pain, œufs, fromage', CURRENT_TIMESTAMP(), false, 4);