
// function addCard(){
// 	let card = document.createElement("div");
// 	card.className = "card";
// 	card.innerHTML = "<p>This is the added <b>text</b></p>";
// 	document.querySelector(".container").append(card);
// }

let viewCountConvertor = views => {
	if(views > Math.pow(10, 12)){
		let newCount = views/Math.pow(10, 12);
		newCount = Math.trunc(newCount);
		return `${newCount}T`
	}
	else if(views > Math.pow(10, 9)){
		let newCount = views/Math.pow(10, 9);
		newCount = Math.trunc(newCount);
		return `${newCount}B`
	}
	else if(views > Math.pow(10, 6)){
		let newCount = views/Math.pow(10, 6);
		newCount = Math.trunc(newCount);
		return `${newCount}M`
	}
	else if(views > Math.pow(10, 3)){
		let newCount = views/Math.pow(10, 3);
		newCount = Math.trunc(newCount);
		return `${newCount}K`
	}
	else{
		return views;
	}
}


function createCard(title, cName, views, monthsOld, duration, thumbnail){

	// This div is for card
	let card = document.createElement("div");
	card.className = "card";

	// This div is for thumbnail and the video duration
	let thumbnailDiv = document.createElement("div");
	thumbnailDiv.className = "thumbnail";

	let cardThumbnail = document.createElement("img");
	cardThumbnail.src = thumbnail;

	let cardDuration = document.createElement("p");
	cardDuration.innerHTML = duration;

	thumbnailDiv.append(cardThumbnail);
	thumbnailDiv.append(cardDuration);

	// This div is for video title and a div that has channel name, view counts and when it was posted
	let cardContent = document.createElement("div");
	cardContent.className = "description";

	let cardTitle = document.createElement("h2");
	cardTitle.innerHTML = title;

	cardContent.append(cardTitle);

	// This div is for only channel name, view counts and when it was posted
	let videoDescription = document.createElement("div");
	videoDescription.className = "counts";

	let cardCName = document.createElement("p");
	cardCName.innerHTML = cName;

	let cardViewCout = document.createElement("p");
	cardViewCout.innerHTML = viewCountConvertor(views);

	let cardMonthsOld = document.createElement("p");
	cardMonthsOld.innerHTML = monthsOld;

	videoDescription.append(cardCName);
	videoDescription.append(cardViewCout);
	videoDescription.append(cardMonthsOld);

	cardContent.append(videoDescription);


	card.append(thumbnailDiv);
	card.append(cardContent);

	document.querySelector(".container").append(card);
}

	for(let i = 0; i < 10; i++){
		createCard("Hello this is the title", "CodeAndEat", 2555555, 345, "13:40", "./asset/cat.jpg");
}
