import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { moduleMetadata } from '@storybook/angular';

import { declarations, imports } from '../../../../../stories/setup';
import { declarations as layoutDeclarations } from '../../../__fixtures__/layout';
import { LaunchListComponent } from './launch-list.component';
import { LaunchDatagridDetailComponent } from './../../../organisms/launches/launch-datagrid-detail/launch-datagrid-detail.component';
import { LaunchDetailComponent } from './../../../organisms/launches/launch-detail/launch-detail.component';
import { launches } from '../../../__fixtures__/launches';

const story = {
  title: 'pages/launch-list',
  decorators: [
    moduleMetadata({
      imports: [...imports, BrowserAnimationsModule, YouTubePlayerModule],
      declarations: [
        ...declarations,
        LaunchDetailComponent,
        LaunchDatagridDetailComponent,
        layoutDeclarations,
      ],
      providers: [],
    }),
  ],
};

export const component = () => ({
  component: LaunchListComponent,
  props: {
    items: launches,
    loading: false,
    refresh: () => {},
  },
});

component.storyName = 'default';

export const loading = () => ({
  component: LaunchListComponent,
  props: {
    items: [],
    loading: true,
    refresh: () => {},
  },
});
loading.storyName = 'loading';

export default story;
