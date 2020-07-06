// tooling
import postcss from "postcss";

// plugin
export default postcss.plugin("postcss-font-family-fangsong", (opts) => {
	return (root) => {
		const { family, preserve = true } = Object(opts);
		let fangsongFamily = family;
		if (typeof family === "string") {
			fangsongFamily = family.trim().split(/\s*,\s*/);
		} else {
			fangsongFamily = [
				"STFangsong", // macOS, Office
				"FangSong", // Windows NT 6.0+
				"FangSong_GB2312" // Windows 95/98 4.0 - 5.2
			];
			if (preserve) {
				fangsongFamily.unshift("fangsong");
			}
		}

		// fangsong and fallbacks match
		const whitespace = "[\\f\\n\\r\\x09\\x20]";
		const fangsongMatch = new RegExp(
			`(^|,|${whitespace}+)(?:fangsong${whitespace}*)(?:,${whitespace}*(?:${fangsongFamily.join(
				"|"
			)})${whitespace}*)?(,|$)`,
			"i"
		);

		// system-ui fallback replacement
		const fangsongReplace = `$1${fangsongFamily.join(", ")}$2`;

		// update font declarations to polyfill fangsong usage
		root.walkDecls(fontPropertyMatch, (decl) => {
			decl.value = decl.value.replace(fangsongMatch, fangsongReplace);
		});
	};
});

/* match the following properties:
 * - font
 * - font-family
 * - custom properties (see https://www.w3.org/TR/css-variables-1/#custom-property)
 */
const fontPropertyMatch = /(?:^(?:-|\\002d){2})|(?:^font(?:-family)?$)/i;
