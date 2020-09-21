import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ClarityModule } from '@clr/angular';
import { moduleMetadata } from '@storybook/angular';

import { declarations, imports } from '../../../../../stories/setup';
import { declarations as layoutDeclarations } from '../../../__fixtures__/layout';
import { LaunchDetailComponent } from './launch-detail.component';
import { LaunchDetailComponent as LaunchOrganismsDetailComponent } from './../../../organisms/launches/launch-detail/launch-detail.component';

import { launch } from '../../../__fixtures__/launch';

const story = {
  title: 'pages/launch-detail',
  decorators: [
    moduleMetadata({
      imports: [...imports, BrowserAnimationsModule, YouTubePlayerModule],
      declarations: [
        ...declarations,
        LaunchOrganismsDetailComponent,
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
  component: LaunchDetailComponent,
  props: {
    item: launch,
    loading: false,
    fetchData: () => {},
  },
});
component.storyName = 'default';

export const loading = () => ({
  component: LaunchDetailComponent,
  props: {
    item: null,
    loading: true,
    fetchData: () => {},
  },
});
loading.storyName = 'loading';

export default story;
