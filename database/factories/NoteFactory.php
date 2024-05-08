<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Note>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'   => DB::table('users')->inRandomOrder()->value('id'),
            'noteuid'   => Str::orderedUuid()->getHex()->toString(),
            'title'     => fake()->paragraphs(1, true),
            'text'      => fake()->paragraphs(2, true),
            'pined'     => 0
        ];
    }
}
