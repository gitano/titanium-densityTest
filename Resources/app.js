Titanium.UI.setBackgroundColor('#000');

var padding = 25;

var win = Titanium.UI.createWindow({  
    title:'Density Test',
    backgroundColor:'#fff',
    orientationModes: [Ti.UI.PORTRAIT]
});


//
//   Puoi organizzare:
//   - Resources/images: iphone standard e MDPI
//   - Resources/android/images/high: android HDPI
//   - Resources/iphone/images: iphone retina. NB: questa e' facoltativa, potresti mettere le @2x anche in Resources/images
//
var label = Ti.UI.createLabel({
	top: padding,
	left: padding,
	text: "Folders:\nResources/images\nResources/android/images/high\nResources/iphone/images",
	color: 'black',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

var image = Ti.UI.createImageView({
	left: 0,
	image: '/images/button.png'
});


// Interscambiabile con:  Resources/android/images/black/high

var image2 = Ti.UI.createImageView({
	right: 0,
	image: '/images/black/button.png'
});

var label2 = Ti.UI.createLabel({
	left: padding,
	bottom: padding,
	text: "Folders:\nResources/images/black\nResources/android/images/high/black\nResources/iphone/images/black",
	color: 'black',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
});

win.add(label);
win.add(image);
win.add(image2);
win.add(label2);
win.open();
