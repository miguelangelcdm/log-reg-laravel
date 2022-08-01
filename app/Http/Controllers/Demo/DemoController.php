<?php

namespace App\Http\Controllers\Demo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class DemoController extends Controller
{
    public function Index()
    {
        return view('about');
    }
    public function ContactMethod()
    {
        return view('contact');
    }
}
