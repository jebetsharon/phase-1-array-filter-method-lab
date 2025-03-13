// Function to find matching driver names (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the given letters (case-insensitive)
  function fuzzyMatch(drivers, partialName) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(partialName.toLowerCase()));
  }
  
  // Function to find drivers whose name property matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }  