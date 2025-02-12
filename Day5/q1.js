// Create a validation class similar to ‘yup’ and add validations for required, min and max
// for strings. Expose an isValid method that returns true or false based on the argument
// passed

class Validator {
    constructor(value) {
      this.value = value;
      this.errors = [];
    }
  
    required() {
      if (this.value === undefined || this.value === null || this.value === '') {
        this.errors.push('This field is required.');
      }
      return this;
    }
  
    min(length) {
      if (this.value.length < length) {
        this.errors.push(`Minimum length is ${length}.`);
      }
      return this;
    }
  
    max(length) {
      if (this.value.length > length) {
        this.errors.push(`Maximum length is ${length}.`);
      }
      return this;
    }
  
    isValid() {
      return this.errors.length === 0;
    }
  
    getErrors() {
      return this.errors;
    }
  }
  
  const validator = new Validator('abc');
  validator.required().min(5).max(10);
  console.log(validator.isValid()); 
  console.log(validator.getErrors()); 
  