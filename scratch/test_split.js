// KaTeX auto-render regex logic (splitAtDelimiters)
// KaTeX auto-render finds delimiters by searching for left delimiter and right delimiter
function splitAtDelimiters(startData, leftDelim, rightDelim, display) {
  let finalData = [];
  for (let i = 0; i < startData.length; i++) {
    if (startData[i].type === "text") {
      let text = startData[i].data;
      let lookingForLeft = true;
      let currIndex = 0;
      let nextIndex;
      while ((nextIndex = text.indexOf(lookingForLeft ? leftDelim : rightDelim, currIndex)) !== -1) {
        if (lookingForLeft) {
          finalData.push({ type: "text", data: text.slice(currIndex, nextIndex) });
          currIndex = nextIndex + leftDelim.length;
        } else {
          finalData.push({ type: "math", data: text.slice(currIndex, nextIndex), rawData: text.slice(currIndex - leftDelim.length, nextIndex + rightDelim.length), display: display });
          currIndex = nextIndex + rightDelim.length;
        }
        lookingForLeft = !lookingForLeft;
      }
      finalData.push({ type: "text", data: text.slice(currIndex) });
    } else {
      finalData.push(startData[i]);
    }
  }
  return finalData;
}

const htmlSnippet = `  $$
A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}
$$`;

const res = splitAtDelimiters([{type: 'text', data: htmlSnippet}], '$$', '$$', true);
console.log(JSON.stringify(res, null, 2));
