import { ClarityModule } from '@clr/angular';
import { number } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';

import { declarations } from '../../__fixtures__/layout';
import { FooterComponent } from './footer.component';

const story = {
  title: 'organisms/footer',
};

export const component = () => ({
  moduleMetadata: {
    imports: [ClarityModule],
    declarations,
    providers: [],
  },
  component: FooterComponent,
  props: {
    year: number('year', new Date().getFullYear()),
    onGitHubIconClick: (e: MouseEvent) => {
      e.preventDefault();
      action('onGitHubIconClick')(e);
    },
    onTwitterIconClick: (e: MouseEvent) => {
      e.preventDefault();
      action('onTwitterIconClick')(e);
    },
  },
});

component.story = {
  name: 'default',
};

export default story;
