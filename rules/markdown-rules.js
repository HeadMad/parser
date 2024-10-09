


const rules = new Map();

export default rules;

rules.set('codeblock', {
  start: /^```(\w+)?/m,
  end: /^```/m,
  replace: (content, lang) => `<pre><code${lang ? ` class="language-${lang}"` : ''}>${escape(content)}</code></pre>`,
  parse: false
});

rules.set('code', {
  start: /`/,
  end: /`/,
  test: /^\w+$/,
  replace: (content) => `<code>${escape(content)}</code>`,
  parse: false
});

rules.set('headings', {
  start: /#(#)?(#)? /,
  replace: (content, h2, h3) => {
    var n = h3 ? '3' : h2 ? '2' : '1';
    return `<h${n}>${content}</h${n}>`;
  },
  parse: false
});

rules.set('headings', {
  start: /#(#)?(#)? /,
  replace: (content, h2, h3) => {
    return h3 ? '<b>' + content + '</b>'
    : '<b>' + content.toUpperCase() + '</b>'
  },
  parse: false
});

rules.set('bold', {
  start: /\*\*/,
  end: /\*\*/,
  replace: (content) => `<b>${content}</b>`,
  parse: ['underline', 'italic', 'del', 'spoiler', 'link']
});

// ◦ Овощи (огурцы, перец, помидоры)
//  ◦ Сладкое к чаю
//  ◦ Чай

rules.set('underline', {
  start: /__/,
  end: /__/,
  replace: (content) => `<u>${content}</u>`,
  parse: ['bold', 'italic', 'del', 'spoiler', 'link']
});

rules.set('italic', {
  start: /_/,
  end: /_/,
  replace: (content) => `<i>${content}</i>`,
  parse: ['underline', 'bold', 'del', 'spoiler', 'link']
});

rules.set('del', {
  start: /~~/,
  end: /~~/,
  test: /^\w+$/,
  replace: (content) => `<s>${content}</s>`,
  parse: ['underline', 'italic', 'bold', 'spoiler', 'link']
});

rules.set('spoiler', {
  start: /\|\|/,
  end: /\|\|/,
  replace: (content) => `<tg-spoiler>${content}</tg-spoiler>`,
  parse: ['underline', 'italic', 'del', 'bold', 'link']
});

rules.set('link', {
  start: /\[(.+?)\]\(/,
  end: /\)/,
  replace: (href, content) => `<a href="${href}">${content}</a>`,
  parse: false
});

rules.set('quote', {
  start: /^> /m,
  replace: (content) => '<blockquote>' + content + '</blockquote>',
  parse: ['underline', 'italic', 'del', 'code', 'spoiler', 'bold', 'link']
});

rules.set('blockquote', {
  start: /^> (.+$)((\r\n^> .+$)*)/m,
  // replace: (content, lines) => 'BLOCKUOTE',
  replace: (content, firstLine, lines) => {
    console.log({lines})
    return '<blockquote>' + firstLine + (lines && lines.split('\n> ').join('\n')) + '</blockquote>';
  },
  parse: ['underline', 'italic', 'del', 'code', 'spoiler', 'bold', 'link']
});

rules.set('list', {
  start: /^( +)?\* /m,
  replace: (content, sub) => sub ? sub + '• ' + content : '◦ ' + content,
  parse: ['underline', 'italic', 'del', 'code', 'spoiler', 'bold', 'link']
});

rules.set('buttons', {
  start: /\[\[/,
  end: /]]/,
  replace: (content) => content,
  parse: false
});



