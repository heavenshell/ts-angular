import { declarations, imports } from '../../../../stories/setup';
import { declarations as layoutDeclarations } from '../../__fixtures__/layout';
import { HomeComponent } from './home.component';

const story = {
  title: 'pages/home',
};

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations: [...declarations, layoutDeclarations],
    providers: [],
  },
  component: HomeComponent,
  props: {},
});

component.story = {
  name: 'default',
};

export default story;
