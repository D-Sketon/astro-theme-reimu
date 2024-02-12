// https://github.com/hexojs/hexo-util/blob/master/lib/strip_html.ts
/**
 * 
 * Copyright (c) 2014 Tommy Chen
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
 * IN THE SOFTWARE.
 */
const STATE_PLAINTEXT = Symbol("plaintext");
const STATE_HTML = Symbol("html");
const STATE_COMMENT = Symbol("comment");

export default (html: string = "") => {
  // if not string, then safely return an empty string
  if (typeof html !== "string") {
    return "";
  }

  let state = STATE_PLAINTEXT;
  let tag_buffer = "";
  let depth = 0;
  let in_quote_char = "";
  let output = "";

  const { length } = html;

  for (let idx = 0; idx < length; idx++) {
    const char = html[idx];

    if (state === STATE_PLAINTEXT) {
      switch (char) {
        case "<":
          state = STATE_HTML;
          tag_buffer = tag_buffer + char;
          break;

        default:
          output += char;
          break;
      }
    } else if (state === STATE_HTML) {
      switch (char) {
        case "<":
          // ignore '<' if inside a quote
          if (in_quote_char) break;

          // we're seeing a nested '<'
          depth++;
          break;

        case ">":
          // ignore '>' if inside a quote
          if (in_quote_char) {
            break;
          }

          // something like this is happening: '<<>>'
          if (depth) {
            depth--;

            break;
          }

          // this is closing the tag in tag_buffer
          in_quote_char = "";
          state = STATE_PLAINTEXT;
          // tag_buffer += '>';

          tag_buffer = "";
          break;

        case '"':
        case "'":
          // catch both single and double quotes

          if (char === in_quote_char) {
            in_quote_char = "";
          } else {
            in_quote_char = in_quote_char || char;
          }

          tag_buffer = tag_buffer + char;
          break;

        case "-":
          if (tag_buffer === "<!-") {
            state = STATE_COMMENT;
          }

          tag_buffer = tag_buffer + char;
          break;

        case " ":
        case "\n":
          if (tag_buffer === "<") {
            state = STATE_PLAINTEXT;
            output += "< ";
            tag_buffer = "";

            break;
          }

          tag_buffer = tag_buffer + char;
          break;

        default:
          tag_buffer = tag_buffer + char;
          break;
      }
    } else if (state === STATE_COMMENT) {
      switch (char) {
        case ">":
          if (tag_buffer.slice(-2) === "--") {
            // close the comment
            state = STATE_PLAINTEXT;
          }

          tag_buffer = "";
          break;

        default:
          tag_buffer = tag_buffer + char;
          break;
      }
    }
  }

  return output;
};
