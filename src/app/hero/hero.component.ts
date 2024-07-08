import { Component, inject, OnInit } from '@angular/core';
import { Fruit } from '../shared/services/entites';
import { mockfruits } from '../shared/mockfruits';
import { NgFor, NgIf } from '@angular/common';
import { FruitservicesService } from '../shared/services/fruitservices.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {


  fruits: Fruit[] = mockfruits;
  panier: Fruit[] = [];
  tauxTVA = 0.2;
  service = inject(FruitservicesService);


  ngOnInit(): void {

  }

  getFruit() {
    this.fruits = this.service.fetchAll();

  }


  retirerFruit(fruit: Fruit): void {
    if (fruit.quantite > 0) {
      fruit.quantite--;

    }

  }

  ajouterFruit(fruit: Fruit): void {
    fruit.quantite++;

  }

  ajouterAuPanier(fruit: Fruit): void {
    const index = this.panier.findIndex(p => p.nom === fruit.nom);
    if (index === -1) {
      this.panier.push({ ...fruit }); // Cloner l'objet fruit pour éviter la référence
    } else {
      this.panier[index].quantite++;
    }
  }

  retirerDuPanier(fruit: Fruit): void {
    const index = this.panier.findIndex(p => p.nom === fruit.nom);
    if (index !== -1 && this.panier[index].quantite > 0) {
      this.panier[index].quantite--;
      if (this.panier[index].quantite === 0) {
        this.panier.splice(index, 1);
      }
    }
  }

  viderPanier(): void {
    this.panier = [];
  }



  totalQuantite(): number {
    return this.panier.reduce((total, fruit) => total + fruit.quantite, 0);
  }

  totalPrix(): number {
    return this.panier.reduce((total, fruit) => total + (fruit.prixHT * fruit.quantite), 0);
  }

  prixTtc(): number {
    const totalTTC = this.panier.reduce((total, fruit) => total + (fruit.prixHT * (1 + this.tauxTVA) * fruit.quantite), 0);
    return parseFloat(totalTTC.toFixed(2));
  }

}




