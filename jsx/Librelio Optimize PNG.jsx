﻿ function main(){     // declare local variables      var doc = app.activeDocument;      var docName = app.activeDocument.name.slice(0,-4);   var sfw = new ExportOptionsSaveForWeb();sfw.format = SaveDocumentType.PNG;sfw.PNG8 = false; // use PNG-24sfw.transparency = true;        var saveFile = new File("~/Desktop/" + docName + "zz.png");  doc.exportDocument(saveFile, ExportType.SAVEFORWEB, sfw)}main()