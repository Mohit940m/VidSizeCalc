function calculateSize(duration, bitrate) {
    var bitrateBps = bitrate * 1000 / 8;
    return duration * bitrateBps;
}
document.getElementById("calcForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var hours = parseFloat(document.getElementById("durationHours").value);
    var minutes = parseFloat(document.getElementById("durationMinutes").value);
    var duration = (hours * 3600) + (minutes * 60); // Convert hours and minutes to total seconds
    var bitrate = parseFloat(document.getElementById("bitrate").value);
    var sizeH264 = calculateSize(duration, bitrate);
    var sizeH265 = sizeH264 * 0.5; // Assuming H.265 is roughly 50% more efficient
    var result = "Estimated size for H.264: ".concat((sizeH264 / (1024 * 1024)).toFixed(2), " MB<br>\n                    Estimated size for H.265: ").concat((sizeH265 / (1024 * 1024)).toFixed(2), " MB");
    document.getElementById("result").innerHTML = result;
});
