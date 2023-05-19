const withImages = require("next-images");
const removeImports = require("next-remove-imports")();
module.exports = removeImports(
	withImages({
		images: {
			disableStaticImages: true,
			domains: ["localhost"]
		},
	})
);
