// Store state - Allows the player to purchase items with an intuitive GUI
class BaseStoreState extends ContinueState {
	constructor(description, nextState) {
		super()
		this.description = description
		this.nextState = nextState
	}

	onPush() {
		console.log("Skipping store")

		states.push(this.nextState)
	}
}

class StoreState extends BaseStoreState {
	// need to update to ask how many right under the choices instead of going to another page
	display(){
		this.root.append("<h3> How many would you like to buy?</h3> ")
	

		this.root.append('<div id="menu" class="menu"></div>')

		let button = $("<button/>")
			.text("Done")
			.click(() => {
				states.pop();
			})
			$("#menu").append(button);

	

}
