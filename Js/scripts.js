$('#button').on('click', newItem)

function newItem() {
  let input = $('#input');
  let inputVal = input.val();
  let li = $('<li></li>');  // create the li elements of the ol
  let xButton = $('<crossOutButton>X</crossOutButton>')  // created the crossOutButton
  li.append(inputVal);
  li.append(xButton);

  if (inputVal === '') {
    alert('Error');
  }else {
    $('#list').append(li);
    input.val(''); // empty the input after the text inside is added to the ol
  }
  
  // cut out / uncut a li element
  li.on('dblclick', function() {
    $(this).toggleClass('strike');
  })
  
  // removing a li element by clicking on the X
  xButton.on('click', function() {
    li.addClass('delete');
  })
  
  // make the elements sortable by dragging
  $('#list').sortable();
}
