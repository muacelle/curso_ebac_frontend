$(document).ready(function() {
    // Adicionar nova tarefa
    $('#add-button').click(() => {
        let task = $('#task-input').val();

        $('#task-list').append('<li>' + task + '</li>');
        $('#task-input').val('');
    });

    // Riscar uma tarefa
    $('#task-list').on('click', 'li', (event) => {
        $(event.target).css('text-decoration', 'line-through');
    });
});