import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

type Value = string | number | boolean;

export type QueryParams = {
  [param: string]: Value | ReadonlyArray<string>;
};

export const buildQueryString = (router: Router, queryParams: QueryParams) => {
  const urlTree = router.createUrlTree([], {
    queryParams,
    queryParamsHandling: 'merge',
  });

  const httpParams = new HttpParams({ fromObject: urlTree.queryParams });
  return httpParams.toString();
};
