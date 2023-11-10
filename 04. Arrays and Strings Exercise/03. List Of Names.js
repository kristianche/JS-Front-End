function solve (input) {
    input.sort((a, b) => {
        return a.localeCompare(b);
      });

    for (let i = 0; i <= input.length - 1; i++)
        console.log(`${i + 1}.${input[i]}`)
}

solve(["John", "Bob", "Christina", "Ema"])