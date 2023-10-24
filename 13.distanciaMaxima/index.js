function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function processData(input) {
    const lines = input.trim().split("\n");
    const n = parseInt(lines[0]);
    const coordinates = [];

    for (let i = 1; i <= n; i++) {
        const [x, y] = lines[i].split(" ").map(Number);
        coordinates.push({ x, y });
    }

    let maxDistance = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const distance = calculateDistance(coordinates[i].x, coordinates[i].y, coordinates[j].x, coordinates[j].y);
            maxDistance = Math.max(maxDistance, distance);
        }
    }

    console.log(maxDistance.toFixed(10));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
