<?php

namespace App\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TicketConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;
    public $ticketDetails;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($ticketDetails)
    {
        $this->ticketDetails = $ticketDetails;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Your PDF Document')
        ->view('frontend.Email.sentpdf')
        ->attach($this->ticketDetails, [
            'as' => 'Ticket.pdf',
            'mime' => 'application/pdf',
        ]);
    }
}
