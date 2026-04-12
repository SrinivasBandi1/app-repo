document.getElementById('greet-button').addEventListener('click', function() {
    var name = document.getElementById('name-input').value;
    document.getElementById('greet-message').textContent = 'Hello ' + name + '!';
});
