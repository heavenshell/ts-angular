import { ClarityModule } from '@clr/angular';
import { number } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';

import { HeaderComponent } from './header.component';

const story = {
  title: 'organisms/header',
};

export const component = () => ({
  moduleMetadata: {
    imports: [ClarityModule],
    providers: [],
  },
  component: HeaderComponent,
  props: {},
});

component.story = {
  name: 'default',
};

export default story;
