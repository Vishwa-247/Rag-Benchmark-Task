-- Create sample admin user
INSERT INTO users (email, password_hash, user_type, email_verified) VALUES
('admin@lawwebsite.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', TRUE);

INSERT INTO admins (user_id, name, role) VALUES
(1, 'System Administrator', 'super_admin');

-- Create sample law colleges
INSERT INTO law_colleges (name, address, city, state, established_year, courses_offered) VALUES
('National Law School of India University', 'Nagarbhavi, Bangalore', 'Bangalore', 'Karnataka', 1987, 'BA LLB, LLM, PhD in Law'),
('National Law University, Delhi', 'Sector 14, Dwarka', 'New Delhi', 'Delhi', 2008, 'BA LLB, BBA LLB, LLM'),
('Rajiv Gandhi School of Intellectual Property Law', 'Kharghar', 'Navi Mumbai', 'Maharashtra', 2009, 'BA LLB, LLM in IP Law');

-- Create sample announcements
INSERT INTO college_announcements (college_id, title, content, announcement_type, status) VALUES
(1, 'Admissions Open for BA LLB 2025', 'Applications are now open for the 5-year integrated BA LLB program. Last date for application is March 31, 2025.', 'admission', 'published'),
(2, 'International Conference on Constitutional Law', 'Join us for a two-day conference on contemporary issues in constitutional law. Registration is free for students.', 'seminar', 'published'),
(3, 'Call for Papers: IP Law Review', 'Submit your research papers on intellectual property law for our annual law review publication.', 'call_for_papers', 'published');
