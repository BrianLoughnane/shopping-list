$(document).ready(function() {

		// $("#input").on("keyup", function(event) {
	// 	if($(this).hasFocus() && event.which===13) {
	// 		$("#add").click();
	// 	};
	// });	



	// Use the enter key to add items

	$(document).on("keyup", function(event) {
		if(($("#input").val() !== "") && (event.which === 13)) {
			$("#add").click();
		};
	});



	// Header Effect

	$("h1").css({"transform": "rotateY(360deg)"});

	$("body").animate({"opacity": "1"});


	// Create a new Item and add it to specified category

	function addNewItem(catId) {
		var newItemName = $("#input").val();
		var newItem = '<li class="item"><div class="remove"><i class="i-remove"></i></div><div class="cat-icons"><i class="i-fnv"></i><i class="i-dairy"></i><i class="i-meat"></i><i class="i-bng"></i><i class="i-snacks"></i><i class="i-canned"></i><i class="i-spices"></i><i class="i-hhg"></i><i class="i-other"></i></div><div class="text">'+ newItemName +'</div><div class="check-uncheck"><i class="i-check"></i><i class="i-uncheck hide"></i></div></li>';
		$(catId).append(newItem); 

		$("header .cat-icons i").removeClass("cat-select");
		$("#input").val("");
	}



	// Header Icons -- Assign a category class and add item to the list

	$("header .cat-icons").on("click", "i", function(){
		$(".cat-icons i").removeClass("cat-select");
		$(this).addClass("cat-select");
		if($("#input").val() !== "") {
			$("#add").click();
		};
	});



	// Item Icons -- remove the parent list item and append it to a certain list

	$("ul").on("click", "i", function(){

		var lineItem = $(this).closest("li");

		function changeCat(catId) {
			lineItem.remove();
			$(catId).append(lineItem);
		}

		if($(this).hasClass("i-fnv")) {
			changeCat("#fnv-ul");
		} else if($(this).hasClass("i-dairy")) {
			changeCat("#dairy-ul");
		} else if($(this).hasClass("i-meat")) {
			changeCat("#meat-ul");
		} else if($(this).hasClass("i-bng")) {
			changeCat("#bng-ul");
		} else if($(this).hasClass("i-snacks")) {
			changeCat("#snacks-ul");
		} else if($(this).hasClass("i-canned")) {
			changeCat("#canned-ul");
		} else if($(this).hasClass("i-spices")) {
			changeCat("#spices-ul");
		} else if($(this).hasClass("i-hhg")) {
			changeCat("#hhg-ul");
		} else if($(this).hasClass("i-other")) {
			changeCat("#other-ul");
		};

	});



	// Add item to a list based on if the header icon is selected

	$("#add").on("click", function() {

		if($("header i").hasClass("cat-select") === false) {
			addNewItem("#uncategorized-ul");
		} else if($("header .cat-icons i:first-child").hasClass("cat-select")) {
			addNewItem("#fnv-ul");
		} else if($("header .cat-icons i:nth-child(2)").hasClass("cat-select")) {
			addNewItem("#dairy-ul");
		} else if($("header .cat-icons i:nth-child(3)").hasClass("cat-select")) {
			addNewItem("#meat-ul");
		} else if($("header .cat-icons i:nth-child(4)").hasClass("cat-select")) {
			addNewItem("#bng-ul");
		} else if($("header .cat-icons i:nth-child(5)").hasClass("cat-select")) {
			addNewItem("#snacks-ul");
		} else if($("header .cat-icons i:nth-child(6)").hasClass("cat-select")) {
			addNewItem("#canned-ul");
		} else if($("header .cat-icons i:nth-child(7)").hasClass("cat-select")) {
			addNewItem("#spices-ul");
		} else if($("header .cat-icons i:nth-child(8)").hasClass("cat-select")) {
			addNewItem("#hhg-ul");
		} else if($("header .cat-icons i:nth-child(9)").hasClass("cat-select")) {
			addNewItem("#other-ul");
		}; 
	});



	// Remove a list item

	$("ul").on("click", ".remove", 
		function() {
			console.log("remove triggered");
			$(this).closest(".item").remove();
		}
	);



	// Check or uncheck a list item

	$("ul").on("click", ".check-uncheck",
		function() {
			console.log("check-uncheck triggered");
			$(this).closest(".item").toggleClass("checked");
		}
	);



});