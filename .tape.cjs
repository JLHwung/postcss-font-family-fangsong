module.exports = {
	basic: {
		message: "supports basic usage",
	},
	"basic:family": {
		message: "supports { family: string } usage",
		options: {
			family: "fangsong, FangSong, FZFangSong-Z02, FandolFang",
		},
	},
	"basic:family_array": {
		message: "supports { family: array } usage",
		options: {
			family: ["fangsong", "FangSong", "FZFangSong-Z02", "FandolFang"],
		},
	},
	"basic:family_array_preserve_false": {
		message: "{ family: array } can override { preserve: false }",
		options: {
			family: ["fangsong", "FangSong", "FZFangSong-Z02", "FandolFang"],
			preserve: false
		},
	},
	"basic:preserve_false": {
		message: "supports { preserve } usage",
		options: {
			preserve: false
		},
	},
	"custom-properties": {
		message: "supports custom-properties usage",
	},
};
