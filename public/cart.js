$(document).ready(function() {
	var fadeTime = 300;

	recalculateCart();

	$(".checkout").fadeOut(10);

	/* Assign actions */
	$(".product-quantity input").change(function() {
		updateQuantity(this);
	});

	$(".product-removal button").click(function() {
		removeItem(this);
	});

	/* Recalculate cart */
	function recalculateCart() {
		var subtotal = 0;

		/* Sum up row totals */
		$(".product").each(function() {
			subtotal += parseFloat(
				$(this)
					.children(".product-line-price")
					.text()
			);
		});

		var total = subtotal;

		/* Update totals display */
		$(".totals-value").fadeOut(fadeTime, function() {
			$("#cart-subtotal").html(subtotal.toFixed(2));
			$("#cart-total").html(total.toFixed(2));
			if (total == 0) {
				$(".checkout").fadeOut(fadeTime);
			} else {
				$(".checkout").fadeIn(fadeTime);
			}
			$(".totals-value").fadeIn(fadeTime);
		});

		$.ajax({
			type: "POST",
			url: "cart-total",
			data: { total: total },
			success: function(html) {
				console.log("cart total updated");
			}
		});
	}

	/* Update quantity */
	function updateQuantity(quantityInput) {
		/* Calculate line price */

		var productRow = $(quantityInput)
			.parent()
			.parent();
		var price = parseFloat(productRow.children(".product-price").text());
		var quantity = $(quantityInput).val();
		var linePrice = price * quantity;

		/* Update line price display and recalc cart totals */
		productRow.children(".product-line-price").each(function() {
			$(this).fadeOut(fadeTime, function() {
				$(this).text(linePrice.toFixed(2));
				recalculateCart();
				$(this).fadeIn(fadeTime);
			});
		});

		var itemId = parseFloat(productRow.children(".product-id").text());

		$.ajax({
			type: "POST",
			url: "update-quantity",
			data: { id: itemId, quantity: quantity },
			success: function(html) {
				console.log("success");
			}
		});
	}

	/* Remove item from cart */
	function removeItem(removeButton) {
		/* Remove row from DOM and recalc cart total */
		var productRow = $(removeButton)
			.parent()
			.parent();
		productRow.slideUp(fadeTime, function() {
			productRow.remove();
			recalculateCart();
		});

		var itemId = parseFloat(productRow.children(".product-id").text());

		$.ajax({
			type: "POST",
			url: "remove-item",
			data: { id: itemId },
			success: function(html) {
				console.log("success");
			}
		});
	}

	$("#billingCheckBox").change(function() {
		if (this.checked) $("#billing").fadeOut("slow");
		else $("#billing").fadeIn("slow");
	});
});