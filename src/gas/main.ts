function doGet(e) {
    return ContentService.createTextOutput("Hello from Google Apps Script!");
  }
  
  function gasAddExample() {
    const result = add(3, 4); 
    return result;
  }
  