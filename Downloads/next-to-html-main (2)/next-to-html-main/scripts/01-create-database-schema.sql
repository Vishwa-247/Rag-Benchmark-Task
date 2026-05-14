-- Law Website Database Schema
-- Creating all necessary tables for the comprehensive law platform

-- Users table for basic authentication info
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type ENUM('client', 'advocate', 'admin') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    salutation VARCHAR(10),
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL,
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100) DEFAULT 'India',
    pincode VARCHAR(10),
    primary_phone VARCHAR(20),
    secondary_phone VARCHAR(20),
    password_recovery_question VARCHAR(255),
    password_recovery_answer VARCHAR(255),
    oauth_provider VARCHAR(50),
    oauth_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Advocates table
CREATE TABLE IF NOT EXISTS advocates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(50),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address VARCHAR(500),
    pincode VARCHAR(10),
    primary_phone VARCHAR(20),
    secondary_phone VARCHAR(20),
    mobile VARCHAR(20),
    fax VARCHAR(20),
    alternate_email VARCHAR(255),
    website VARCHAR(255),
    bar_council_state VARCHAR(100),
    bar_council_id VARCHAR(50),
    enrollment_year YEAR,
    local_bar_member BOOLEAN DEFAULT FALSE,
    local_bar_details TEXT,
    practice_areas TEXT,
    languages VARCHAR(255),
    education TEXT,
    publications TEXT,
    awards TEXT,
    employment_history TEXT,
    affiliations TEXT,
    experience_years INT,
    profile_photo VARCHAR(255),
    membership_fee_paid BOOLEAN DEFAULT FALSE,
    membership_expiry DATE,
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_reviews INT DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    referral_advocate_id INT,
    additional_comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Cases table
CREATE TABLE IF NOT EXISTS cases (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    legal_category VARCHAR(100),
    legal_issue VARCHAR(100),
    help_for ENUM('myself', 'my_business', 'a_friend', 'friends_business') DEFAULT 'myself',
    required_country VARCHAR(100),
    required_state VARCHAR(100),
    required_city VARCHAR(100),
    required_locality VARCHAR(100),
    current_country VARCHAR(100),
    current_state VARCHAR(100),
    current_city VARCHAR(100),
    current_locality VARCHAR(100),
    primary_language VARCHAR(50),
    secondary_language VARCHAR(50),
    advocate_experience_preference ENUM('0-4_years', '5-10_years', 'over_10_years'),
    practice_location_country VARCHAR(100),
    practice_location_state VARCHAR(100),
    practice_location_city VARCHAR(100),
    practice_location_locality VARCHAR(100),
    is_anonymous BOOLEAN DEFAULT TRUE,
    status ENUM('draft', 'posted', 'in_progress', 'resolved', 'deleted') DEFAULT 'draft',
    posted_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- Case applications from advocates
CREATE TABLE IF NOT EXISTS case_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    case_id INT NOT NULL,
    advocate_id INT NOT NULL,
    message TEXT,
    proposed_fee DECIMAL(10,2),
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE,
    FOREIGN KEY (advocate_id) REFERENCES advocates(id) ON DELETE CASCADE,
    UNIQUE KEY unique_application (case_id, advocate_id)
);

-- Messages between clients and advocates
CREATE TABLE IF NOT EXISTS messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    sender_type ENUM('client', 'advocate') NOT NULL,
    receiver_type ENUM('client', 'advocate') NOT NULL,
    case_id INT,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE SET NULL
);

-- Law Library Categories
CREATE TABLE IF NOT EXISTS law_library_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id INT NULL,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES law_library_categories(id) ON DELETE SET NULL
);

-- Law Library Content
CREATE TABLE IF NOT EXISTS law_library_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content_type ENUM('legal_tip', 'agreement', 'form', 'area_of_law', 'sc_judgment', 'bare_act', 'rule', 'law_commission_report', 'glossary') NOT NULL,
    content TEXT,
    file_path VARCHAR(255),
    file_type VARCHAR(50),
    case_number VARCHAR(100),
    parties_name VARCHAR(255),
    judges_name VARCHAR(255),
    judgment_date DATE,
    act_number VARCHAR(100),
    enactment_date DATE,
    sections TEXT,
    schedules TEXT,
    report_number VARCHAR(50),
    commission_year YEAR,
    definition TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    download_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES law_library_categories(id) ON DELETE CASCADE
);

-- Law Colleges
CREATE TABLE IF NOT EXISTS law_colleges (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    established_year YEAR,
    affiliation VARCHAR(255),
    courses_offered TEXT,
    facilities TEXT,
    ranking INT,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- College Announcements
CREATE TABLE IF NOT EXISTS college_announcements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    college_id INT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    announcement_type ENUM('sponsored', 'seminar', 'workshop', 'call_for_papers', 'admission', 'internship', 'job', 'competition') NOT NULL,
    event_date DATE,
    deadline_date DATE,
    is_sponsored BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (college_id) REFERENCES law_colleges(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Sawal Jawab (Q&A) Questions
CREATE TABLE IF NOT EXISTS questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    question TEXT NOT NULL,
    category VARCHAR(100),
    tags VARCHAR(255),
    is_anonymous BOOLEAN DEFAULT FALSE,
    views_count INT DEFAULT 0,
    votes_count INT DEFAULT 0,
    answers_count INT DEFAULT 0,
    is_resolved BOOLEAN DEFAULT FALSE,
    status ENUM('active', 'closed', 'deleted') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Sawal Jawab Answers
CREATE TABLE IF NOT EXISTS answers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT NOT NULL,
    user_id INT,
    answer TEXT NOT NULL,
    is_anonymous BOOLEAN DEFAULT FALSE,
    votes_count INT DEFAULT 0,
    is_accepted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Advocate Reviews and Ratings
CREATE TABLE IF NOT EXISTS advocate_reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    advocate_id INT NOT NULL,
    client_id INT NOT NULL,
    case_id INT,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    is_anonymous BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (advocate_id) REFERENCES advocates(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE SET NULL,
    UNIQUE KEY unique_review (advocate_id, client_id, case_id)
);

-- Payment transactions for advocate membership
CREATE TABLE IF NOT EXISTS payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'INR',
    payment_method VARCHAR(50),
    transaction_id VARCHAR(255) UNIQUE,
    gateway_response TEXT,
    status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payment_type ENUM('membership_fee', 'case_fee', 'other') DEFAULT 'membership_fee',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Admin users
CREATE TABLE IF NOT EXISTS admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'content_admin', 'user_admin') DEFAULT 'content_admin',
    permissions TEXT,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_type ON users(user_type);
CREATE INDEX idx_cases_client ON cases(client_id);
CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_receiver ON messages(receiver_id);
CREATE INDEX idx_law_content_category ON law_library_content(category_id);
CREATE INDEX idx_law_content_type ON law_library_content(content_type);
CREATE INDEX idx_questions_category ON questions(category);
CREATE INDEX idx_advocate_reviews_advocate ON advocate_reviews(advocate_id);
