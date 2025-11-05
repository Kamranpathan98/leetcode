/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title
    .toLowerCase()
    .split(" ")
    .map(w => w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w)
    .join(" ");
};