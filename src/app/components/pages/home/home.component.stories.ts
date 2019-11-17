import { declarations, imports } from '../../../../stories/setup';
import { HomeComponent } from './home.component';

const story = {
  title: 'pages/home',
};

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations,
    providers: [],
  },
  component: HomeComponent,
  props: {},
});

component.story = {
  name: 'default',
};

export default story;
