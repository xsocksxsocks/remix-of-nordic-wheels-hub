-- Create a server-side RPC function to verify admin status securely
-- This ensures role verification happens server-side with proper security context
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT has_role(auth.uid(), 'admin'::app_role);
$$;

-- Add database constraints to validate numeric inputs server-side
-- This prevents invalid data even if client-side validation is bypassed

-- Price must be positive and reasonable (max 100 million)
ALTER TABLE public.cars
ADD CONSTRAINT cars_price_positive CHECK (price > 0 AND price <= 100000000);

-- Year must be reasonable (between 1900 and next year)
-- Using a trigger instead of CHECK constraint since CHECK must be immutable
CREATE OR REPLACE FUNCTION public.validate_car_year()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.year IS NOT NULL AND (NEW.year < 1900 OR NEW.year > EXTRACT(YEAR FROM CURRENT_DATE) + 1) THEN
    RAISE EXCEPTION 'Year must be between 1900 and next year';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_car_year_trigger
BEFORE INSERT OR UPDATE ON public.cars
FOR EACH ROW
EXECUTE FUNCTION public.validate_car_year();

-- Mileage must be non-negative and reasonable (max 10 million km)
ALTER TABLE public.cars
ADD CONSTRAINT cars_mileage_positive CHECK (mileage IS NULL OR (mileage >= 0 AND mileage <= 10000000));