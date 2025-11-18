function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: "GET request works!" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents || "{}");

  return ContentService
    .createTextOutput(JSON.stringify({ received: body }))
    .setMimeType(ContentService.MimeType.JSON);
}
