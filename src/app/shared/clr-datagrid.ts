import { ClrDatagridStateInterface } from '@clr/angular';

export const convertDatagrState = ({
  page,
  sort,
}: ClrDatagridStateInterface) => {
  const order = sort.reverse ? 'desc' : 'asc';

  const current = (page && page.current) || 1;
  const size = (page && page.size) || 20;

  const sortby = sort.by;

  return {
    page: {
      ...page,
      current,
      size,
    },
    order,
    sortby,
  };
};
