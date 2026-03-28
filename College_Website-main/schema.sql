-- Create tables for the College Website

-- 1. Admins
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  name TEXT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Insert Default Superadmin
INSERT INTO admins (name, username, password, role) 
VALUES ('Super Admin', 'superadmin', 'superadmin123', 'superadmin');

-- 2. Admin Requests
CREATE TABLE admin_requests (
  id SERIAL PRIMARY KEY,
  name TEXT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  date TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Faculty
CREATE TABLE faculty (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image TEXT NOT NULL,
  qualification TEXT NOT NULL,
  experience TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Notices
CREATE TABLE notices (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  isnew BOOLEAN DEFAULT false,
  link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. Events
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT,
  location TEXT,
  description TEXT,
  image TEXT,
  longdescription TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5.1 Event Highlights (related to Events)
CREATE TABLE event_highlights (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  text TEXT NOT NULL
);

-- 6. Toppers
CREATE TABLE toppers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  batch TEXT NOT NULL,
  percentage TEXT NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 7. Placements
CREATE TABLE placements (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  studentscount TEXT NOT NULL,
  year TEXT NOT NULL,
  package TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 8. Timetable
CREATE TABLE timetable (
  id SERIAL PRIMARY KEY,
  year TEXT NOT NULL,
  semester TEXT NOT NULL,
  link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 9. Syllabus
CREATE TABLE syllabus (
  id SERIAL PRIMARY KEY,
  year TEXT NOT NULL,
  semester TEXT NOT NULL,
  link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 10. Books
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 11. Skills
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  duration TEXT,
  certification TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Set permissions so anyone can read/write directly (For Development ONLY)
-- In a real production app, you would add Row Level Security (RLS) policies.
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE toppers ENABLE ROW LEVEL SECURITY;
ALTER TABLE placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE timetable ENABLE ROW LEVEL SECURITY;
ALTER TABLE syllabus ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Allow all access for now to make migrating easy
CREATE POLICY "Allow all" ON admins FOR ALL USING (true);
CREATE POLICY "Allow all" ON admin_requests FOR ALL USING (true);
CREATE POLICY "Allow all" ON faculty FOR ALL USING (true);
CREATE POLICY "Allow all" ON notices FOR ALL USING (true);
CREATE POLICY "Allow all" ON events FOR ALL USING (true);
CREATE POLICY "Allow all" ON event_highlights FOR ALL USING (true);
CREATE POLICY "Allow all" ON toppers FOR ALL USING (true);
CREATE POLICY "Allow all" ON placements FOR ALL USING (true);
CREATE POLICY "Allow all" ON timetable FOR ALL USING (true);
CREATE POLICY "Allow all" ON syllabus FOR ALL USING (true);
CREATE POLICY "Allow all" ON books FOR ALL USING (true);
CREATE POLICY "Allow all" ON skills FOR ALL USING (true);
