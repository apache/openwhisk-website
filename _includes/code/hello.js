function main(args) {
    const name = args && args.name || "stranger";
    return { greeting: `Hello ${name}!` };
}