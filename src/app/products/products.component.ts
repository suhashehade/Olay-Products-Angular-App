import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  prods = [
    {
      img : "assets/images/product1.jpg",
      name:"White",
      description:"This facial wash contains special lemon extracts and vitamin C, helps you gently cleans dirt, oil and make up residue, balances skin water and oil, hydrates and noutishes skin. Leaves you smooth and bright skin.",
      price: 20,
    },
    {
      img : "assets/images/product2.png",
      name:"Olay Natural White Cleansing Face Wash For All Skin Types 100 ml",
      description:"Olay Natural White Cleansing Face Wash thoroughly cleanses your skin to bring it one step closer to a beautiful glow . Its rich and complex formula with only natural ingredients works to inhibit melanin production and help restore your natural radiance. This gentle foam cleanser removes all impurities from your skin, including traces of make-up, and prepares your skin for the next steps of daily your beauty routine.",
      price: 25,
    },
    {
      img : "assets/images/product3.jpg",
      name:"Olay Total Effects 7inOne Age-Defying Face Wash 150 ml",
      description:"Developed to revitalise the skin for a rejuvenated look, Olay Total Effects 7inOne Age-Defying Face Wash removes dirt, traces of make-up and other impurities to reveal fresher, radiant and younger-looking skin. Specially formulated with exfoliating micro-beads to deeply yet gently cleanse the skin, Olay Total Effects 7inOne Face Wash also helps fight 7 signs of ageing. Suitable for everyday use, Olay Total Effects 7inOne Face Wash is a perfect addition to your daily skin care routine, leaving you skin noticeably softer and smoother with every wash.",
      price: 23,
    }
  ];
}
