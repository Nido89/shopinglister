var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click',removeItem);

// Filter Event
filter.addEventListener('keyup',filterItems);



// Add items function
function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));
    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('x'));

    li.appendChild(deleteBtn);


    itemList.appendChild(li);
    
}

//Remove Item Function

function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Why would you delete but sure ?')){
           var li = e.target.parentElement;
           itemList.removeChild(li);

       }
        
    }

}

//filter items function for searchbar
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get all the items in the list
    var items = itemList.getElementsByTagName('li');
    // Converting to an array console.log(items);

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
        
    });
    
    

}