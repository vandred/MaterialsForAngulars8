import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChekUserGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate> {

  /**
   *
   */
  constructor(private router: Router) {

  }
  canActivate() {
    // if (confirm('Are you sure? ')) {
    //   console.log('Implement delete functionality here');
    //   return true;
    // }
    // console.log('CanActivare', true);
    this.router.navigate(['/book']);
    return false;
  }

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }

}

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}
