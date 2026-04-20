function longestPalindromicSubstring(s) {
    let n = s.length;
    let longest = "";

    for (let i = 0; i < n; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);

        longest = longest.length > odd.length ? longest : odd;
        longest = longest.length > even.length ? longest : even;
    }

    return longest;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.slice(left + 1, right);
}

let s = "babad";
console.log(longestPalindromicSubstring(s)); // "bab"

s = "cbbd";
console.log(longestPalindromicSubstring(s)); // "bb"
