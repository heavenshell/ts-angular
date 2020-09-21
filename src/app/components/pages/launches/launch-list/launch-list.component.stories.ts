import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ClarityModule } from '@clr/angular';

import { declarations, imports } from '../../../../../stories/setup';
import { declarations as layoutDeclarations } from '../../../__fixtures__/layout';
import { LaunchListComponent } from './launch-list.component';
import { LaunchDatagridDetailComponent } from './../../../organisms/launches/launch-datagrid-detail/launch-datagrid-detail.component';

import { launch } from '../../../__fixtures__/launch';

const story = {
  title: 'pages/launches',
};

export const component = () => ({
  moduleMetadata: {
    imports: [...imports, BrowserAnimationsModule, YouTubePlayerModule],
    declarations: [
      ...declarations,
      LaunchDatagridDetailComponent,
      layoutDeclarations,
    ],
    providers: [],
  },
  component: LaunchListComponent,
  props: {
    items: [launch],
    loading: false,
    refresh: () => {},
  },
});

component.storyName = 'default';

export default story;
