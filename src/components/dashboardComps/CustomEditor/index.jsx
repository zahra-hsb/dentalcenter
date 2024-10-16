'use client'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, List, Alignment, Heading, Font, FontFamily, FontBackgroundColor, Strikethrough, Subscript, Code, Link,  BlockQuote, CodeBlock, TodoList, OutdentCodeBlockCommand, Indent, ImageInsertViaUrl, Image, ImageUpload } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';


const CustomEditor = () => {
    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                toolbar: {
                    items: ['undo', 'redo',
                        '|',
                        'heading',
                        '|',
                        'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                        '|',
                        'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                        '|',
                        'link', 'blockQuote', 'codeBlock',
                        '|',
                        'alignment',
                        '|',
                        'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent', 'imageInsert'],
                },
                plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, Undo, List, Alignment, Heading, Font, FontFamily, FontBackgroundColor, Strikethrough, Subscript, Code, Link,   BlockQuote, CodeBlock, TodoList, Indent, ImageInsertViaUrl, Image, ImageUpload
                ],
                mention: {
                    // Mention configuration
                },
                initialData: '<p class=`text-end`>متن وبلاگ خود را در این مکان وارد کنید..</p>'
            }}
        />
    );
}

export default CustomEditor;
