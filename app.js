const bookForm =  document.querySelector('#book-form');
const title =  document.querySelector('#title');
const author =  document.querySelector('#author');
const isbn =  document.querySelector('#isbn');
const bookList =  document.querySelector('#book-list');


const addBook = (e) =>{
    e.preventDefault();

    if(title.value != '' && author.value !='' && isbn.value !='')
    {
    const html = `<tr>
            <td>${title.value}</td>
            <td>${author.value}</td>
            <td>${isbn.value}</td>
            <td><a href="#" class="delete">X<a></td>
          </tr>`;

        //  console.log(html);
          bookList.insertAdjacentHTML('afterbegin', html);
          setError('Book Added Successfullly','success');
          clearFields();
    }
    else{
        setError('Please fill out all the fileds to add the book','error');
    }
}

const clearFields = () =>{
    title.value = '';
    author.value = '';
    isbn.value = '';
}


const setError = (msg,className) =>{
    const html = `<p class="${className}">${msg}</p>`;
    bookForm.insertAdjacentHTML('afterend',html);
    setTimeout(() => {
        document.querySelector(`.${className}`).remove();
    }, 3000);
}

const deleteBook = (e) =>{
    console.log(e.target.classList);

    if(e.target.classList.contains('delete')){
       // console.log('delete this');
        confirm("Are you sure?")
        e.target.parentElement.parentElement.remove();
    }
}


/****Event Listners */
bookForm.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteBook);
