// Write your solutionee in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }

  
let Employee = {
  name: "John",
  age: 30,
  title: "Manager"
};

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedProp, ...rest } = employee;
    return rest;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
