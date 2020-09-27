import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';

import { declarations, imports } from 'src/stories/setup';
import { PastsComponent } from './pasts.component';
import { TabsComponent } from '../../../molecules/tabs/tabs.component';
import { declarations as layoutDeclarations } from '../../../__fixtures__/layout';
import { TimelineComponent } from '../../../organisms/timeline/timeline.component';

import { launches } from '../../../__fixtures__/launches';

const story = {
  title: 'pages/timelines/pasts',
  decorators: [
    moduleMetadata({
      imports: [...imports, BrowserAnimationsModule],
      declarations: [
        ...declarations,
        TabsComponent,
        TimelineComponent,
        PastsComponent,
        layoutDeclarations,
      ],
      providers: [],
    }),
  ],
};

export const component = () => ({
  component: PastsComponent,
  props: {
    items: launches,
    loading: false,
    fetchData: () => {},
    onOldLinkClick: () => action('onOldLinkClick')('click'),
    onNewLinkClick: () => action('onNewLinkClick')('click'),
  },
});

component.storyName = 'default';

export const loading = () => ({
  component: PastsComponent,
  props: {
    items: [],
    loading: true,
    fetchData: () => {},
  },
});
loading.storyName = 'loading';

export default story;
