const clone = require("./array");

test("Testar array", () => {
    const arr = ["Johannes", "Folkesson"]
    expect(clone(arr)).toEqual(arr)
})