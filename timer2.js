const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('.\n');
  } else if (!isNaN(key)) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('.\n');
    }, 1000 * Number(key));
  } else if (key === '\u0003') {
    process.exit();
  }
});