import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';

import { declarations, imports } from 'src/stories/setup';
import { declarations as layoutDeclarations } from '../../../__fixtures__/layout';
import { HistoryDetailComponent as HistoryOrganismsDetailComponent } from '../../../organisms/histories/history-detail/history-detail.component';
import { HistoryDetailComponent } from './history-detail.component';
import { histories } from '../../../__fixtures__/histories';

const story = {
  title: 'pages/history-detail',
  decorators: [
    moduleMetadata({
      imports: [...imports, BrowserAnimationsModule],
      declarations: [
        ...declarations,
        HistoryOrganismsDetailComponent,
        HistoryDetailComponent,
        layoutDeclarations,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 94 }),
            },
          },
        },
      ],
    }),
  ],
};

export const component = () => ({
  component: HistoryDetailComponent,
  props: {
    item: histories[0],
    loading: false,
    fetchData: () => {},
  },
});

component.storyName = 'default';

export const loading = () => ({
  component: HistoryDetailComponent,
  props: {
    item: null,
    loading: true,
    fetchData: () => {},
  },
});
loading.storyName = 'loading';

export default story;
