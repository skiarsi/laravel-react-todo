<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Welcome',[
            'storage' => URL::asset('storage'),
            'allNotes'=> Note::
                            where('pined',0)->
                            where('user_id',auth()->user()->id)->
                            orderby('id','DESC')->get(),
            'allPinedNotes'=> Note::
                            where('user_id',auth()->user()->id)->
                            where('pined',1)->
                            orderby('id','DESC')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            //code...
            $notes = new Note();
            $notes->user_id = Auth::user()->id;
            $notes->noteuid = Str::orderedUuid()->getHex()->toString();
            $notes->title = $request->title;
            $notes->text = $request->text;
            $notes->color = $request->color;
            $notes->save();
        } catch (\Throwable $th) {
            dd($th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
