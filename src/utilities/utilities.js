export function isInArray(_needle, _haystack) {
    let found     = false;
    this.needle   = _needle;
    this.haystack = _haystack;

    for (var i = this.haystack.length - 1; i >= 0; i--) {
        if (this.haystack[i] == this.needle) {
            found = true;
        }
    };
    return found;
}