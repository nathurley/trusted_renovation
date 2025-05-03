-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  customer_id UUID NOT NULL REFERENCES customers(id),
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT,
  source TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  google_event_id TEXT,
  
  -- Add index for faster queries
  CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
);

-- Create RLS policies
-- Enable row level security
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin can do anything with customers" ON customers
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can do anything with appointments" ON appointments
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can do anything with contact_submissions" ON contact_submissions
  FOR ALL USING (auth.role() = 'authenticated');
