function firstWord(s) {
  // your code here
	let cleanStr = s.trimStart();

	let findFirstSpace = cleanStr.indexOf(' ');

	if(findFirstSpace === -1){
		return cleanStr;
	}

	return cleanStr.slice(0, findFirstSpace)
	 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

