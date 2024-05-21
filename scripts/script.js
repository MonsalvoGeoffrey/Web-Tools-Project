function count(string, regex) {
    const matches = string.match(regex);
    // console.log(matches)
    return matches ? matches.length : 0;
}
