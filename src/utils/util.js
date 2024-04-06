const validateSchema = (schema) => {
    return (req, res, next) => {
      const body = req.body;
      console.log(body)
      const validation = schema.safeParse(body);
  
      if (!validation.success) {
        const errors = [];
  
        for (const err of validation.error.errors ) {
          if (err.message) {
            errors.push(err.message);
          }
        }
        return res.status(400).json(buildErrorResponse(errors));
      }
  
      return next();
    };
  };

const buildSuccessResponse = (data) => {
    return data;
  };
  
const buildErrorResponse = (errors) => {
    return {
      status: 'ERROR',
      errors,
    };
  };

module.exports = {
    buildErrorResponse,
    buildSuccessResponse,
    validateSchema
  }