import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';


@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  constructor(private sellerService: SellerService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   // throw new Error('Method not implemented.');


   if(localStorage.getItem('seller')){
    return true;
  }

    return this.sellerService.isSellerLoggedIn;
  }


}
