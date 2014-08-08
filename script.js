$(document).ready(function() {

	// $(document).on("keyup", function(event) {
	// 	if(($("#input").hasFocus()) && event.which===13) {
	// 		$("#add").click();
	// 	};
	// });	


	// Header Effect

	$("h1").css({"transform": "rotateY(360deg)"});

	$("body").animate({"opacity": "1"});




	// Use the enter key to add items

	$(document).on("keyup", function(event) {
		if(($("#input").val() !== "") && (event.which === 13)) {
			$("#add").click();
		};
	});



	// Header Icons -- Assign a category class and add item to the list

	$("header").on("click", "i", function() {
			$(".cat-icons i").removeClass("cat-select");
			$(this).addClass("cat-select");
			$("#add").click();
		}
	)
	.on("mouseenter", "i", 
		function() {
			var x = $(this);
			function showTooltip(icon, span) {
				if(x.hasClass(icon)) {
				x.closest("#search-div").find(".tooltipDiv").find(span).slideDown();	
				}
			}
			showTooltip("i-fnv", ".s-fnv");
			showTooltip("i-dairy", ".s-dairy");
			showTooltip("i-meat", ".s-meat");
			showTooltip("i-bng", ".s-bng");
			showTooltip("i-snacks", ".s-snacks");
			showTooltip("i-canned", ".s-canned");
			showTooltip("i-spices", ".s-spices");
			showTooltip("i-hhg", ".s-hhg");
			showTooltip("i-other", ".s-other");
		}
	)
	.on("mouseleave", "i",
		function() {
			var x = $(this);
			function hideTooltip(icon, span) {
				if(x.hasClass(icon)) {
				x.closest("#search-div").find(".tooltipDiv").find(span).slideUp();	
				}
			}
			hideTooltip("i-fnv", ".s-fnv");
			hideTooltip("i-dairy", ".s-dairy");
			hideTooltip("i-meat", ".s-meat");
			hideTooltip("i-bng", ".s-bng");
			hideTooltip("i-snacks", ".s-snacks");
			hideTooltip("i-canned", ".s-canned");
			hideTooltip("i-spices", ".s-spices");
			hideTooltip("i-hhg", ".s-hhg");
			hideTooltip("i-other", ".s-other");
		}
	);



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



	// Add item 


	$("#add").on("click", function() {

		function addNewItem(catId) {

			var newItemName = $.trim($("#input").val());
			var newItem = '<li class="item clearfix"><div class="remove"><i class="i-remove"></i></div><div class="check-uncheck"><i class="i-check"></i><i class="i-uncheck hide"></i></div><div class="text">'+newItemName+'</div><div class="cat-icons"><i class="i-fnv"></i><i class="i-dairy"></i><i class="i-meat"></i><i class="i-bng"></i><i class="i-snacks"></i><i class="i-canned"></i><i class="i-spices"></i><i class="i-hhg"></i><i class="i-other"></i></div></li>'

			if(newItemName !== "") {
				$(catId).append(newItem); 
				$("header .cat-icons i").removeClass("cat-select");
				$("#input").val("");
			};

		}

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

	$("ul")
	.on("click", ".remove", 
		function() {
			$(this).closest(".item").remove();
		}
	)
	.on("mouseover", ".remove", 
		function() {
			$(this).closest(".item").addClass("removeHover");
		}
	)
	.on("mouseleave", ".remove", 
		function() {
			$(this).closest(".item").removeClass("removeHover");
		}
	);


	// Check or uncheck a list item

	$("ul")
	.on("click", ".check-uncheck",
		function() {
			var item = $(this).closest(".item");
			item.toggleClass("checked");
			$(this).children(".i-check").toggleClass("hide");
			$(this).children(".i-uncheck").toggleClass("hide");
		}
	)
	.on("mouseenter", ".check-uncheck", function() {
		var item = $(this).closest(".item");	
		if(item.hasClass("checked")) {
			item.addClass("uncheckHover");
		} else {
			item.removeClass("uncheckHover")
			item.addClass("checkHover");
		};
	})
	.on("mouseleave", ".check-uncheck", function() {
		var item = $(this).closest(".item");
		if(item.hasClass("checked")) {
			item.removeClass("uncheckHover");
		} else {
			item.removeClass("checkHover");
		};
	});

});