-- Petal Path seed data
-- This will load the metro areas (city) and the floral places in each (location).

START TRANSACTION;

-- Clear existing rows

DELETE FROM event;
DELETE FROM location;
DELETE FROM city;

-- Reset the auto-increment counters
ALTER TABLE event AUTO_INCREMENT = 1;
ALTER TABLE location AUTO_INCREMENT = 1;
ALTER TABLE city AUTO_INCREMENT = 1;

-- Cities (metro areas)
INSERT INTO city (name, state) VALUES
    ('Philadelphia', 'Pennsylvania'),
    ('New York City', 'New York'),
    ('St. Louis', 'Missouri'),
    ('San Diego', 'California');

-- Locations
-- city_id 1 = Philadelphia, 2 = New York City, 3 = St. Louis, 4 = San Diego

-- Philadelphia area
INSERT INTO location (name, description, city_id) VALUES
    ('Bartram''s Garden', 'The oldest surviving botanic garden in North America, along the Schuylkill River', 1),
    ('Morris Arboretum & Gardens', 'The arboretum of the University of Pennsylvania, with a Victorian landscape garden', 1),
    ('Awbury Arboretum', 'A historic English landscape park in Germantown', 1),
    ('Philadelphia Flower Show', 'A vibrant and spectacular celebration of flowers, gardens, and creative floral design', 1),
    ('Fairmount Park Horticulture Center', 'Greenhouses and display gardens in West Fairmount Park', 1),
    ('Shofuso Japanese Cultural Center', 'A traditional Japanese house and garden with a koi pond', 1),
    ('Azalea Garden', 'Spring azalea plantings near the Philadelphia Museum of Art', 1),
    ('Wyck Historic House & Garden', 'Home to one of the oldest rose gardens still in its original plan', 1),
    ('The Woodlands', 'A historic estate and garden cemetery in West Philadelphia', 1),
    ('Haverford College Arboretum', 'A campus arboretum with a pinetum and duck pond', 1),
    ('Chanticleer', 'A pleasure garden known for its inventive, changing plantings', 1),
    ('Jenkins Arboretum & Gardens', 'Woodland gardens with rhododendron and azalea collections', 1),
    ('Stoneleigh: A Natural Garden', 'A former estate replanted with native species', 1),
    ('Longwood Gardens', 'Conservatories, fountains and seasonal displays on a historic du Pont estate', 1),
    ('Bowman''s Hill Wildflower Preserve', 'A preserve devoted to Pennsylvania native plants', 1),
    ('Andalusia Historic House, Gardens & Arboretum', 'A Greek Revival estate on the Delaware River', 1),
    ('Brandywine Museum of Art Gardens', 'Native plant gardens along the Brandywine Creek', 1),
    ('Winterthur Museum, Garden & Library', 'A sprawling naturalistic garden on a former du Pont estate', 1),
    ('Mt. Cuba Center', 'A native plant garden in the Delaware Piedmont', 1);

-- New York City area
INSERT INTO location (name, description, city_id) VALUES
    ('New York Botanical Garden', 'A 250-acre garden with a landmark Victorian conservatory', 2),
    ('Brooklyn Botanic Garden', 'Known for its cherry esplanade and Japanese hill-and-pond garden', 2),
    ('Wave Hill Public Garden & Cultural Center', 'Gardens and woodlands overlooking the Hudson River', 2),
    ('Queens Botanical Garden', 'A community garden with seasonal beds and a wedding garden', 2),
    ('Snug Harbor Cultural Center & Botanical Garden', 'Themed gardens on a historic Staten Island campus', 2),
    ('Bailey Arboretum', 'A Long Island arboretum with mature specimen trees', 2),
    ('The High Line Gardens', 'Naturalistic plantings along an elevated former rail line', 2),
    ('Conservatory Garden, Central Park', 'Central Park''s formal garden, with Italian, French and English sections', 2),
    ('Heather Garden, Fort Tryon Park', 'A hillside garden with heath and heather plantings', 2),
    ('Carl Schurz Park Garden', 'A small riverside park garden on the Upper East Side', 2);

-- St. Louis area
INSERT INTO location (name, description, city_id) VALUES
    ('Missouri Botanical Garden', 'One of the oldest botanical gardens in the country, with a Japanese garden and Climatron', 3),
    ('Shaw Nature Reserve', 'Prairie, woodland and the Whitmire Wildflower Garden', 3),
    ('Bellefontaine Cemetery and Arboretum', 'A historic cemetery planted as an arboretum', 3),
    ('Tower Grove Park', 'A Victorian walking park with ornamental pavilions and gardens', 3),
    ('Sophia M. Sachs Butterfly House', 'A tropical conservatory filled with free-flying butterflies', 3),
    ('St. Charles County Master Gardeners Demonstration Gardens', 'Demonstration beds showing plants suited to the region', 3),
    ('Quail Ridge Park Wildflower Garden', 'A native wildflower planting within a county park', 3),
    ('Long Row Lavender', 'A working lavender farm open seasonally', 3),
    ('Citygarden', 'An urban sculpture park with native plantings downtown', 3);

-- San Diego area
INSERT INTO location (name, description, city_id) VALUES
    ('San Diego Botanic Garden', 'Formerly Quail Botanical Gardens, with bamboo and subtropical collections', 4),
    ('Balboa Park Botanical Building & Gardens', 'A historic lath house conservatory and surrounding gardens', 4),
    ('Japanese Friendship Garden', 'A Japanese garden in Balboa Park with a koi pond and bonsai', 4),
    ('Water Conservation Garden', 'Demonstration gardens showing water-wise planting', 4),
    ('The Flower Fields', 'Fifty acres of ranunculus that bloom each spring', 4),
    ('Alta Vista Botanical Gardens', 'A hillside garden combining art and subtropical plants', 4);

COMMIT;