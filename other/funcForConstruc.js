/*
Реализовать Foo.

function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function foo(Book, 'Учебник javascript', 'Петр Сергеев')

*/

function foo() {
	return arguments[0].apply(
                            Object.create(arguments[0].prototype),
                            [].slice.call(arguments,1)
                           );
}
foo(Book, 'Учебник javascript', 'Петр Сергеев');
