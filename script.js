$(document).ready(function() {

	alert("hello world");

	function addNewItem(catId) {
		var newItem = '<li class="item"><div class="remove"><i class="i-remove"></i></div><div class="cat-icons"><i class="i-fnv"></i><i class="i-dairy"></i><i class="i-meat"></i><i class="i-bng"></i><i class="i-snacks"></i><i class="i-canned"></i><i class="i-spices"></i><i class="i-hhg"></i><i class="i-other"></i></div><div class="text">newItemName goes here</div><div class="check-uncheck"><i class="i-check"></i><i class="i-uncheck hide"></i></div>';
		$(catId).append(newItem); 

		var newItemName = $("#input").val();
		var lastItem = $(catId).children().last();
		lastItem.find(".text").text(newItemName);

		$("header .cat-icons i").removeClass("cat-select");
		$("#input").val("");
	}

	$("header .cat-icons").on("click", "i", function(){
		$(".cat-icons i").removeClass("cat-select");
		$(this).addClass("cat-select");
		if($("#input").val() !== "") {
			$("#add").click();
		};
	});

	$("li .cat-icons").on("click", "i", function(){
		// Pseudo Code
		// if this has class of i-fnv, remove the line and 
		// append it to the fnv ul

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

	$("#add").on("click", function() {

		if($("header i").hasClass("cat-select") === false) {
			addNewItem("#uncategorized-ul");
			addText("#uncategorized-ul");
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

	// $("#input").on("keyup", function(event) {
	// 	if($(this).hasFocus() && event.which===13) {
	// 		$("#add").click();
	// 	};
	// });	

	$(document).on("keyup", function(event) {
		if(($("#input").val() !== "") && (event.which === 13)) {
			$("#add").click();
		};
	});


	$(".remove").on("click", 
		function() {
			console.log("remove triggered");
			$(this).closest(".item").remove();
		}
	);

	$(".check-uncheck").on("click", 
		function() {
			console.log("check-uncheck triggered");
			$(this).closest(".item").toggleClass("checked");
		}
	);

});