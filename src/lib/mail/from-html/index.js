import cheerio from 'cheerio';

/**
 * Converts HTML to readable command line content
 */

function isWhitespace(txt) {
  return txt.trim().length === 0;
}

function fromHtml(html) {
  html = html.trim();

  const $ = cheerio.load(html);

  const txt = $('body').text();

  return txt
    .split('\n')
    .filter(n => !isWhitespace(n)) // Remove whitespace
    .map(n => n.trim()) // Trim each line
    .join('\n');
}

export default fromHtml;
