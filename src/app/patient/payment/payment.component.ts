import { OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  stripe: any;
  elements: any;
  card: any;

  async ngOnInit() {
    this.stripe = await loadStripe('YOUR_PUBLIC_KEY');
    this.elements = this.stripe.elements();
    
    // Create an instance of the card Element
    this.card = this.elements.create('card');
    this.card.mount('#card-element');
  }

  async handlePayment() {
    const { token, error } = await this.stripe.createToken(this.card);

    if (error) {
      console.error(error);
    } else {
      // Send the token to your backend for processing the charge
      // Use HttpClient or your preferred method to send the token to your backend
    }
  }
}
