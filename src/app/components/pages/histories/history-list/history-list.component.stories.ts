import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';

import { declarations, imports } from 'src/stories/setup';
import { declarations as layoutDeclarations } from '../../../__fixtures__/layout';
import { HistoryListComponent } from './history-list.component';
import { HistoryDatagridDetailComponent } from '../../../organisms/histories/history-datagrid-detail/history-datagrid-detail.component';
import { HistoryDetailComponent } from '../../../organisms/histories/history-detail/history-detail.component';
import { histories } from '../../../__fixtures__/histories';

const story = {
  title: 'pages/history-list',
  decorators: [
    moduleMetadata({
      imports: [...imports, BrowserAnimationsModule],
      declarations: [
        ...declarations,
        HistoryDetailComponent,
        HistoryDatagridDetailComponent,
        layoutDeclarations,
      ],
      providers: [],
    }),
  ],
};

export const component = () => ({
  component: HistoryListComponent,
  props: {
    items: histories,
    loading: false,
    refresh: () => {},
  },
});

component.storyName = 'default';

export const loading = () => ({
  component: HistoryListComponent,
  props: {
    items: [],
    loading: true,
    refresh: () => {},
  },
});
loading.storyName = 'loading';

export default story;
