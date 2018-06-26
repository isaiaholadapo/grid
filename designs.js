// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
})
function makeGrid(cols, rows) {
    $('tr').remove();
    for (var i = 1; i <= cols; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j<= rows; j++) {
            $('#table' + i).append('<td></td>');
        }
}
    $('td').click(function createColor() {
        color = $('#colorPicker').val();
        $(this).attr('style', 'background-color:' + color);
    })
}
