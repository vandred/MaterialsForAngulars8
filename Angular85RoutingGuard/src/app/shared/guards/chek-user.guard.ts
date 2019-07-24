import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChekUserGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate> {

  canActivate() {
    if (confirm('Are you sure? ')) {
      console.log('Implement delete functionality here');
      return true;
    }
    console.log('CanActivare', true);
    return false;
  }

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }

}

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}
