-- Seed Law Library Categories
INSERT INTO law_library_categories (name, slug, description, sort_order) VALUES
('Legal Tips', 'legal-tips', 'Essential legal guidance and tips for common legal situations', 1),
('Agreements', 'agreements', 'Collection of legal agreements and contracts', 2),
('Forms', 'forms', 'Central and state government legal forms', 3),
('Areas of Law', 'areas-of-law', 'Comprehensive guide to different legal practice areas', 4),
('Supreme Court Judgments', 'sc-judgments', 'Supreme Court of India judgments database', 5),
('Bare Acts', 'bare-acts', 'Complete collection of Indian parliamentary acts since 1834', 6),
('Rules', 'rules', 'Rules framed under various acts', 7),
('Law Commission Reports', 'law-commission-reports', 'Reports from the Law Commission of India', 8),
('Glossary', 'glossary', 'Legal terms and definitions', 9);

-- Seed some sample content
INSERT INTO law_library_content (category_id, title, slug, content_type, content) VALUES
(1, 'Why Do You Need a Lawyer?', 'why-need-lawyer', 'legal_tip', 'Legal representation is crucial in many situations. A qualified lawyer can help you navigate complex legal procedures, protect your rights, and ensure the best possible outcome for your case.'),
(1, 'Understanding Your Legal Rights', 'understanding-legal-rights', 'legal_tip', 'Every citizen has fundamental rights protected by the Constitution. Understanding these rights is the first step in protecting yourself legally.'),
(4, 'Criminal Law', 'criminal-law', 'area_of_law', 'Criminal law deals with crimes and their punishments. It includes offenses against the state and society.'),
(4, 'Civil Law', 'civil-law', 'area_of_law', 'Civil law governs disputes between individuals and organizations, including contracts, property, and family matters.'),
(9, 'Advocate', 'advocate', 'glossary', 'A person who is qualified to represent clients in legal proceedings and provide legal advice.'),
(9, 'Plaintiff', 'plaintiff', 'glossary', 'The person who brings a case against another in a court of law.');
