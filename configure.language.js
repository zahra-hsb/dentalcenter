import { ClassicEditor } from 'ckeditor5';
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        language: {

            // But the content will be edited in Arabic.
            content: 'ar'
        }
    } )
    .then( editor => {
        window.CKEDITOR = editor;
    } )
    .catch( err => {
        console.error( err.stack );
    } );
