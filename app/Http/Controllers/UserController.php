<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Event;
use App\Models\EventBookingRequest;
use App\Models\TicketInfo;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{

    public function index()
    {
        $get_upcoming_event = Event::where('status', true)->limit(3)->orderBy('created_at', 'desc')->get();
        $get_latest_event = Event::where('status', true)->limit(10)->orderBy('created_at', 'desc')->get();
        $categories = Category::orderBy('created_at', 'desc')->get();
        return view('frontend.index', compact('categories', 'get_latest_event', 'get_upcoming_event'));
    }

    public function About()
    {
        return view('frontend.about');
    }

    public function Events(Request $request)
    {
        $query = Event::query();
        if ($request->filled('category')) {
            $query->where('category_id', $request->category);
        }
        if ($request->filled('search')) {
            $query->where('title', 'LIKE', "%{$request->search}%")
                ->orWhere('ticket_price', 'LIKE', "%{$request->search}%")
                ->orWhere('event_address', 'LIKE', "%{$request->search}%")
                ->orWhere('event_start_date', 'LIKE', "%{$request->search}%")
                ->orWhere('short_description', 'LIKE', "%{$request->search}%")
                ->orWhere('description', 'LIKE', "%{$request->search}%");
        }
        $all_events  = $query->where('status', true)->orderBy('created_at', 'desc')->get();
        $category_with_number = Category::has('events')->withCount('events')->get();
        return view('frontend.events', compact('all_events', 'category_with_number'));
    }

    public function Details($id)
    {
        $items = Event::find($id);
        return view('frontend.details', compact('items'));
    }

    public function Terms()
    {
        return view('frontend.terms');
    }

    public function Privacy()
    {
        return view('frontend.privacy');
    }


    // ticket request system started

    public function Request_ticket(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'participant' => 'required',
            'email' => 'required | email| unique:users',
            'phone' => 'required',

        ]);
        $user_info =  $user = new User();

        $user->email = $request->email;
        $user->name = $request->name;
        $user->password = $request->phone;
        $user->save();

        if ($user_info) {
            $event_info = Event::find($request->event_id);
           $ticket_request = new EventBookingRequest();
           $ticket_request->user_id = $user_info->id;
           $ticket_request->event_id = $request->event_id;
           $ticket_request->user_name = $user_info->name;
           $ticket_request->user_email = $user_info->email;
           $ticket_request->user_phone = $request->phone;
           $ticket_request->event_date = $event_info->event_start_date;
           $ticket_request->event_time = $event_info->event_start_time;
           $ticket_request->total_participants = $request->participant;
           $ticket_request->total_amount = $request->total_amount;
           $ticket_request->created_by = $user_info->id;

           $ticket_request->save();


     
            for ($i = 0; $i <$request->participant; $i++) {

                $randomNumber = random_int(100000000000, 999999999999);
                $create_info = new TicketInfo();
                $create_info->req_id =$ticket_request->id;
                $create_info->ticket_id = $randomNumber;
                $create_info->save();
            }
            
        }


        return Redirect::back()->with('success', 'Ticket request successfully!');
    }
}
