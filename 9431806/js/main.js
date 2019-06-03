
//						ajax by reciving xml
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = processXML;
xmlhttp.open("GET", "http://demo2469824.mockable.io/foods", true);
xmlhttp.send();

function processXML(){
	
	if(this.readyState == 4){
		if(this.status == 200){
			var xmlDoc = this.responseXML.documentElement;
			
			var res = ["", "", "", ""];
			var num = ["", "", "", ""];
			
			//for showing type of the food
			for(i=0; i< 4; i++){
				switch (xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue){
					case "sandwich":
						res[i] += "ساندویچ";
						break;
					case "burger":
						res[i] += "برگر";
						break;
					case "pizza":
						res[i] += "پیتزا";
						break;
					case "kebab":
						res[i] += "کباب";
						break;
					case "salad":
						res[i] += "سالاد";
						break;
					case "iranian":
						res[i] += "غذای ایرانی";
						break;
					case "pasta":
						res[i] += "پاستا";
						break;
					case "fish":
						res[i] += "ماهی";
						break;
					case "breakfast":
						res[i] += "صبحانه";
						break;
					case "juice":
						res[i] += "آبمیوه";
						break;
					case "steak":
						res[i] += "استیک";
						break;
					case "soup":
						res[i] += "سوپ";
						break;
					default:
						res[i] += xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + "<br />";
				}
			}
			document.getElementById('ajaxNamesOfOnePhotosOfKindsOfFood').innerHTML = res[0];
			document.getElementById('ajaxNamesOfTwoPhotosOfKindsOfFood').innerHTML = res[1];
			document.getElementById('ajaxNamesOfThreePhotosOfKindsOfFood').innerHTML = res[2];
			document.getElementById('ajaxNamesOfFourPhotosOfKindsOfFood').innerHTML = res[3];
			
			// for showing number of activities of resturant
			
			document.getElementById('ajaxNumberOfOnePhotosOfKindsOfFood').innerHTML= xmlDoc.getElementsByTagName("count")[0].childNodes[0].nodeValue;
			document.getElementById('ajaxNumberOfTwoPhotosOfKindsOfFood').innerHTML= xmlDoc.getElementsByTagName("count")[1].childNodes[0].nodeValue;
			document.getElementById('ajaxNumberOfThreePhotosOfKindsOfFood').innerHTML= xmlDoc.getElementsByTagName("count")[2].childNodes[0].nodeValue;
			document.getElementById('ajaxNumberOfFourPhotosOfKindsOfFood').innerHTML= xmlDoc.getElementsByTagName("count")[3].childNodes[0].nodeValue;
			
		}else{
			window.alert("Error: " + this.statusText);
		}
	}	
}


//						ajax by receving json 

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4) {
		if(xmlhttp.status == 200){
			console.log('responseText:' + xmlhttp.responseText);
			try {
				var data = JSON.parse(xmlhttp.responseText);
			} catch(err) {
				console.log(err.message + " in " + xmlhttp.responseText);
				return;
			}
			
			var name = ["", "", ""];
			var numOfRates = ["", "", ""];
			var rate = ["", "", ""];
			var address = ["", "", ""];
			var imgUrl = ["", "", ""];
			
			var nameTweleve = ["", "", "","", "", "","", "", "","", "", ""];
			var photoTweleve = ["", "", "","", "", "","", "", "","", "", ""];
			
			// three best resturants in Reyhoon
			for(var i=0; i < 3; i++){	
				name[i] = data["restaurants"][i]["name"];
				numOfRates[i] = data["restaurants"][i]["numOfRates"];
				rate[i] = data["restaurants"][i]["rate"];
				address[i] = data["restaurants"][i]["address"];
				imgUrl[i] = data["restaurants"][i]["imgUrl"];
			}
			
			document.getElementById("JsonNameOfBestResturantsFromCustomerOne").innerHTML = name[0];
			document.getElementById("JsonNameOfBestResturantsFromCustomerTwo").innerHTML = name[1];
			document.getElementById("JsonNameOfBestResturantsFromCustomerThree").innerHTML = name[2];
			
			document.getElementById("JsonNumOfRatesOfBestResturantsFromCustomerOne").innerHTML = "(" + numOfRates[0] + ")";
			document.getElementById("JsonNumOfRatesOfBestResturantsFromCustomerTwo").innerHTML = "(" + numOfRates[1]+ ")";
			document.getElementById("JsonNumOfRatesOfBestResturantsFromCustomerThree").innerHTML = "(" + numOfRates[2]+ ")";
			
			document.getElementById("JsonRateOfBestResturantsFromCustomerOne").innerHTML = rate[0];
			document.getElementById("JsonRateOfBestResturantsFromCustomerTwo").innerHTML = rate[1];
			document.getElementById("JsonRateOfBestResturantsFromCustomerThree").innerHTML = rate[2];
			
			document.getElementById("JsonAddressOfBestResturantsFromCustomerOne").innerHTML = address[0];
			document.getElementById("JsonAddressOfBestResturantsFromCustomerTwo").innerHTML = address[1];
			document.getElementById("JsonAddressOfBestResturantsFromCustomerThree").innerHTML = address[2];
			
			
			document.getElementById("JsonImgUrlOfBestResturantsFromCustomerOne").innerHTML = '<img src="' + imgUrl[0] + '" >';
			document.getElementById("JsonImgUrlOfBestResturantsFromCustomerTwo").innerHTML = '<img src="' + imgUrl[1] + '" >';
			document.getElementById("JsonImgUrlOfBestResturantsFromCustomerThree").innerHTML = '<img src="' + imgUrl[2] + '" >';
			//document.getElementById("JsonImgUrlOfBestResturantsFromCustomerOne").style.backgroundImage = "url('" + imgUrl[0] + "')";
			
			// 16 best resturants in Reyhoon
			
			for(var i=3; i < data["restaurants"].length; i++){	
				nameTweleve[i] = data["restaurants"][i]["name"];
				photoTweleve[i] = data["restaurants"][i]["imgUrl"];
			}
			//   name of twelve 
			document.getElementById("JsonName1").innerHTML = nameTweleve[3];
			document.getElementById("JsonName2").innerHTML = nameTweleve[4];
			document.getElementById("JsonName3").innerHTML = nameTweleve[5];
			document.getElementById("JsonName4").innerHTML = nameTweleve[6];
			
			document.getElementById("JsonName5").innerHTML = nameTweleve[7];
			document.getElementById("JsonName6").innerHTML = nameTweleve[8];
			document.getElementById("JsonName7").innerHTML = nameTweleve[9];
			document.getElementById("JsonName8").innerHTML = nameTweleve[10];
			
			document.getElementById("JsonName9").innerHTML = nameTweleve[11];
			document.getElementById("JsonName10").innerHTML = nameTweleve[12];
			document.getElementById("JsonName11").innerHTML = nameTweleve[13];
			document.getElementById("JsonName12").innerHTML = nameTweleve[14];
			
			// 	photo of twelve 
			
			document.getElementById("JsonPhoto1").innerHTML = '<img src="' + photoTweleve[3] + '" >';
			document.getElementById("JsonPhoto2").innerHTML = '<img src="' + photoTweleve[4] + '" >';
			document.getElementById("JsonPhoto3").innerHTML = '<img src="' + photoTweleve[5] + '" >';
			document.getElementById("JsonPhoto4").innerHTML = '<img src="' + photoTweleve[6] + '" >';
			
			document.getElementById("JsonPhoto5").innerHTML = '<img src="' + photoTweleve[7] + '" >';
			document.getElementById("JsonPhoto6").innerHTML = '<img src="' + photoTweleve[8] + '" >';
			document.getElementById("JsonPhoto7").innerHTML = '<img src="' + photoTweleve[9] + '" >';
			document.getElementById("JsonPhoto8").innerHTML = '<img src="' + photoTweleve[10] + '" >';
			
			document.getElementById("JsonPhoto9").innerHTML = '<img src="' + photoTweleve[11] + '" >';
			document.getElementById("JsonPhoto10").innerHTML = '<img src="' + photoTweleve[12] + '" >';
			document.getElementById("JsonPhoto11").innerHTML = '<img src="' + photoTweleve[13] + '" >';
			document.getElementById("JsonPhoto12").innerHTML = '<img src="' + photoTweleve[14] + '" >';
			
		}else{
			window.alert("Error: " + this.statusText);
		}
	}
};
 
xmlhttp.open("GET", 'http://demo2469824.mockable.io/best-restaurants', true);
xmlhttp.send();

