// illustratorScript.jsx
var designPrompt = "circle"; // This would be replaced by the design prompt from your server

var doc = app.documents.add();
var artboard = doc.artboards[0];

if (designPrompt === "circle") {
  var circle = doc.pathItems.ellipse(300, 300, 200, 200);
  circle.fillColor = new RGBColor(255, 0, 0); // Red
}

// Save as .ai file
var aiFile = new File("~/Desktop/designPromptResult.ai");
doc.saveAs(aiFile);

// Export as PNG
var pngFile = new File("~/Desktop/designPromptResult.png");
var options = new ExportOptionsPNG24();
options.antiAliasing = true;
options.transparency = true;
options.artBoardClipping = true;
doc.exportFile(pngFile, ExportType.PNG24, options);

// Close the document
doc.close(SaveOptions.DONOTSAVECHANGES);

// Return the path to the PNG file
"~/Desktop/designPromptResult.png";
