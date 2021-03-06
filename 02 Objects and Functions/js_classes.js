
function Coffee(roast, ounces) {
	this.roast = roast
	this.ounces = ounces
	this.getSize = function() {
		if (this.ounces === 8) {
			return "small"
		} else if (this.ounces === 12) {
			return "medium"
		} else if (this.ounces === 16) {
			return "large"
		}
	};
	this.order = function() {
		var msg;
		switch (this.getSize()) {
			case "small":
			case "medium":
			case "large":
				msg = "You've ordered a " + this.getSize() + " " + this.roast + " coffee."
				break
			default:
				msg = "We don't have a " + this.roast + " in that size!"
				break
		}
		return msg;
	};
}

var coffee = new Coffee("House Blend", 12);
console.log(coffee.order())

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.order())

var specialBlend = new Coffee("Special Blend", 200)
console.log(specialBlend.order())
