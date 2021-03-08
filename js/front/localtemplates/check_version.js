let hasWebRTC = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

if (hasWebRTC = false) {
    alert('Используйте другой браузер или обновите текущий, чтобы продолжать в полной мере пользоваться возможностями платформы');
}

