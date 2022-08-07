export const toolbarOptions = [
	['bold', 'italic', 'underline', 'strike', 'link', 'image'], // toggled buttons

	[{ header: 1 }, { header: 2 }], // custom button values
	[{ list: 'ordered' }, { list: 'bullet' }],
	[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
	[{ header: [1, 2, 3, 4, 5, 6, false] }],

	[{ color: [] }, { background: [] }], // dropdown with defaults from theme
	[{ font: [] }],
	[{ align: [] }],

	['clean'], // remove formatting button
];
