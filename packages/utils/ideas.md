Solution for working with transaction

-- Wrap DynamoDb calls
-- AWS SNS publisher wrapper
-- Error handler
  -- 200 when transaction saved successfully
  -- 40x when some of related resources where not found
  -- 50x when some of related resources were not created or not updated
-- input validator
-- logger 