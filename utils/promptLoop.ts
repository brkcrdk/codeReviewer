import readline from 'readline';

async function* promptLoop(query: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    for (;;) {
      yield new Promise((resolve) => rl.question(query, resolve));
    }
  } finally {
    rl.close();
  }
}

export default promptLoop;
