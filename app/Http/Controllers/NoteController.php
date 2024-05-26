<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Note $note)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        //
    }

    /**
     * pin note
     */

    public function pinnote(Request $request, Note $note ) {
        // dd($request->noteId);
        // dd(Note::where('noteuid', $request->noteId)->first());
        $pined=Note::where('noteuid',$request->noteId)
                ->update([
                    'pined' => 1
                ]);
    }

    /**
     * unpin note
     */
    public function unpinnote(Request $request, Note $note ) {
        $pined=Note::where('noteuid',$request->noteId)
                ->update([
                    'pined' => 0
                ]);
    }
}
