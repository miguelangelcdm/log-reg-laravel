<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>
        this is a contact page from controller
    </h2>
    {{-- otra forma de redireccionar, con un
    url fijo, no es practico cuando las url son extensas --}}
    {{-- <a href="{{ url('/about') }}">about</a> --}}

    <a href="{{ route('about.page') }}">about</a>


</body>
</html>
