import { declarations, imports } from '../../../../stories/setup';
import { declarations as layoutDeclarations } from '../../__fixtures__/layout';
import { HeaderComponent } from '../../organisms/header/header.component';
import { FooterComponent } from '../../organisms/footer/footer.component';
import { LayoutComponent } from '../../templates/layout/layout.component';
import { CategoriesComponent } from './categories.component';

const story = {
  title: 'pages/categories',
};

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations: [...declarations, ...layoutDeclarations],
    providers: [],
  },
  component: CategoriesComponent,
  props: {},
});

component.story = {
  name: 'default',
};

export default story;
