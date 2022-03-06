<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Starter extends Component
{
    public function render()
    {
        return view('livewire.starter')->layout('layouts.admin');
    }
}
