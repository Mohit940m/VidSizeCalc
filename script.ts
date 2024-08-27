function calculateSize(duration: number, bitrate: number): number {
    const bitrateBps = bitrate * 1000 / 8;
    return duration * bitrateBps;
}

document.getElementById("calcForm")!.addEventListener("submit", function (event) {
    event.preventDefault();

    const hours = parseFloat((<HTMLInputElement>document.getElementById("durationHours")).value);
    const minutes = parseFloat((<HTMLInputElement>document.getElementById("durationMinutes")).value);
    const duration = (hours * 3600) + (minutes * 60); // Convert hours and minutes to total seconds
    const bitrate = parseFloat((<HTMLInputElement>document.getElementById("bitrate")).value);

    const sizeH264 = calculateSize(duration, bitrate);
    const sizeH265 = sizeH264 * 0.5; // Assuming H.265 is roughly 50% more efficient

    const result = `Estimated size for H.264: ${(sizeH264 / (1024 * 1024)).toFixed(2)} MB<br>
                    Estimated size for H.265: ${(sizeH265 / (1024 * 1024)).toFixed(2)} MB`;

    document.getElementById("result")!.innerHTML = result;
});
