function pressingEnter()
{
    if(event.keyCode == 13)
    {
        addItems();
    }
}

function addItems()
{
    var items = [0];
    var newHtml;
    var html = '<div class="list" id="item-%id%"><div class="listText" id="text-%id%">%data%</div><button class="listBtn" id="btn-%id%">X</button></div>';
    var val = document.querySelector('#inputField').value;
    if(val === '')
    {
        console.log('Add something');
    }
    else
    {
        var newItem = items[items.length - 1] + 1;
        items.push(newItem);
        console.log(items);

        newHtml = html.replace('%data%' , val);
        newHtml = newHtml.replace('%id%' , items.length-1);
        newHtml = newHtml.replace('%id%' , items.length-1);
        newHtml = newHtml.replace('%id%' , items.length-1);

        document.querySelector('#listItems').insertAdjacentHTML('beforeend' , newHtml);
        document.querySelector('#inputField').value = '';
    }
}

function removeItem(event)
{
    var btnId , evArr;
    btnId = event.target.id;
    evArr = btnId.split('-');
    console.log(evArr);
    if(evArr[0] === 'btn')
    {
        document.querySelector('#listItems').removeChild(document.querySelector('#item-'+evArr[1]));
    }
}
document.querySelector('#submit').addEventListener('click' , addItems);
document.addEventListener('keyup' , pressingEnter);
document.querySelector('#listItems').addEventListener('click' , removeItem);