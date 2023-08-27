import { CanActivateFn, Router } from '@angular/router';
import { map, Observable } from "rxjs";
import { AccountService } from "../../account/account.service";
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = (route, state): Observable<boolean> => {

  const router: Router = inject(Router);
  const accountService: AccountService = inject(AccountService);

  return accountService.currentUser$.pipe(
    map(auth => {
      if (auth) {
        return true;
      }
      router.navigate(['account/login'], {queryParams: {returnUrl: state.url}});
    }),
  );
};
