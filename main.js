const toggleDialog = () => {
	// Get the dialog element
	const dialog = document.getElementById("dialog");
	// Figure out what the 'open' attribute is set to
	const open = dialog.getAttribute("open");
	// Set the dialog's 'open' value accordingly
	if (open) {
		dialog.removeAttribute("open");
	} else {
		dialog.setAttribute("open", "true");
	}
};

const openModal = () => {
	// Get the modal element
	const modal = document.getElementById("modal");
	// Call the built-in 'showModal' method to display the modal
	modal.showModal();
};

const closeModal = () => {
	// Get the modal element
	const modal = document.getElementById("modal");
	// Call the built-in 'close' method to close the modal
	modal.close();
};
