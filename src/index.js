function check(str, bracketsConfig) {
    const pairsRegExp = bracketsConfig
        .reduce((acc, [open, close]) => {
            const openBracket = ["(", "|", ")", "[", "]", "{", "}"].includes(
                open
            )
                ? `\\${open}`
                : open;
            const closeBracket = ["(", "|", ")", "[", "]", "{", "}"].includes(
                close
            )
                ? `\\${close}`
                : close;
            return acc.concat(`(${openBracket}${closeBracket})`);
        }, [])
        .join("|");

    const regExp = new RegExp(pairsRegExp, "g");

    function searchPair(str) {
        if (str && regExp.test(str)) return searchPair(str.replace(regExp, ""));
        return str.length === 0;
    }
    const isCheck = searchPair(str);

    return isCheck;
}

module.exports = check;
