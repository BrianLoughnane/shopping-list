$(document).ready(function() {


	// function addNewItem() {
	// 	newItem.text()
	// 	$(this).append(newItem);
	// }

	$("#add").on("click", function() {
		var newItemName = $("#input").val();
		var newItem = '<li class="item"><div class="remove"><i class="i-remove"></i></div><div class="cat-icons"><i class="i-fnv"></i><i class="i-dairy"></i><i class="i-meat"></i><i class="i-bng"></i><i class="i-snacks"></i><i class="i-canned"></i><i class="i-spices"></i><i class="i-hhg"></i><i class="i-other"></i></div><div class="text">Uncat item li</div><div class="check-uncheck"><i class="i-check"></i><i class="i-uncheck hide"></i></div>';

		$("#uncategorized-ul").append(newItem);

		var lastItem = $("#uncategorized-ul").last();

		lastItem.find(".text").text(newItemName);
		console.log( lastItem );

		$("#input").val("");
	});


	$(".remove").on("click", 
		function() {
		$(this).closest(".item").remove();
		}
	);


});