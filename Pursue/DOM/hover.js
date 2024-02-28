var myElement = document.getElementById('myElement');

myElement.addEventListener('mouseover', function(event)
{
    myElement.style.backgroundColor = 'Yellow';
}
);
  myElement.addEventListener('mouseout', function(event)
{
    myElement.style.backgroundColor = 'red';
}
);

