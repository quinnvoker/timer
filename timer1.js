const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (isNaN(args[i]) || args[i] < 0) {
    continue;
  }
  setTimeout((index) => {
    process.stdout.write('.');
    if (index === args.length - 1) {
      process.stdout.write('\n');
    }
  }, 1000 * args[i], i);
}