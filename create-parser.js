

export default (input) => {
  return parse(input, ['codeblock', 'code', 'headings', 'blockquote', 'list', 'spoiler', 'link', 'bold', 'underline', 'italic', 'del', 'buttons' ]);
};