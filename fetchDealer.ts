import fetch from "node-fetch";

async function fetchCode(code: string) {
  try {
    const res = await fetch(`https://www.toyota.com/dealers/dealer/${code}`);

    if (res.status === 200) {
      const f = await res.json();
      console.log(f);

      return f;
    } else if (res.status !== 404) {
      console.log(res);
      console.log("received status: ", res.status);
    }
  } catch (e) {
    console.log(e);
  }
}

async function run(code: string) {
  const res = await fetchCode(code);
  console.log(res);
}

run(process.argv[2]);

// https://www.reddit.com/r/rav4prime/comments/j4k0v9/rav4_prime_spreadsheet/ggxu3zc/?utm_source=reddit&utm_medium=web2x&context=3
