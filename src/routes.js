import React from 'react'



// Main routes
const Index = React.lazy(() => import('./Home/views/index/Index'))
const Contact = React.lazy(() => import('./Home/views/contact/Contact'))
const Demo = React.lazy(() => import('./Home/views/demo/Demo'))
const About = React.lazy(() => import('./Home/views/about/About'))
//routes
const Colors = React.lazy(() => import('./Dash/views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./Dash/views/theme/typography/Typography'))
const Accordion = React.lazy(() => import('./Dash/views/components/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./Dash/views/components/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./Dash/views/components/base/cards/Cards'))
const Carousels = React.lazy(() => import('./Dash/views/components/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./Dash/views/components/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./Dash/views/components/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./Dash/views/components/base/navs/Navs'))
const Paginations = React.lazy(() => import('./Dash/views/components/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./Dash/views/components/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./Dash/views/components/base/progress/Progress'))
const Spinners = React.lazy(() => import('./Dash/views/components/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./Dash/views/components/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./Dash/views/components/base/tooltips/Tooltips'))

const Buttons = React.lazy(() => import('./Dash/views/components/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./Dash/views/components/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(() => import('./Dash/views/components/buttons/dropdowns/Dropdowns'))

const ChecksRadios = React.lazy(() => import('./Dash/views/components/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
  import('./Dash/views/components/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() => import('./Dash/views/components/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./Dash/views/components/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./Dash/views/components/forms/layout/Layout'))
const Range = React.lazy(() => import('./Dash/views/components/forms/range/Range'))
const Select = React.lazy(() => import('./Dash/views/components/forms/select/Select'))
const Validation = React.lazy(() => import('./Dash/views/components/forms/validation/Validation'))

const CoreUIIcons = React.lazy(() => import('./Dash/views/components/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./Dash/views/components/icons/flags/Flags'))
const Brands = React.lazy(() => import('./Dash/views/components/icons/brands/Brands'))

const Alerts = React.lazy(() => import('./Dash/views/components/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./Dash/views/components/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./Dash/views/components/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./Dash/views/components/notifications/toasts/Toasts'))

// const Login = React.lazy(() => import('./Dash/views/examples/pages/login/Login'))
// const Register = React.lazy(() => import('./Dash/views/examples/pages/register/Register'))
// const Page404 = React.lazy(() => import('./Dash/views/examples/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./Dash/views/examples/pages/page500/Page500'))

const Widgets = React.lazy(() => import('./Dash/views/components/widgets/Widgets'))

const Charts = React.lazy(() => import('./Dash/views/components/charts/Charts'))
const Dashboard = React.lazy(() => import('./Dash/views/dashboard/Dashboard'))

const routes = [
  { path: '/dash', exact: true, name: 'DashboardHome' },
  { path: '/dash/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dash/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/dash/theme/colors', name: 'Colors', component: Colors },
  { path: '/dash/theme/typography', name: 'Typography', component: Typography },
  { path: '/dash/base', name: 'Base', component: Cards, exact: true },
  { path: '/dash/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/dash/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/dash/base/cards', name: 'Cards', component: Cards },
  { path: '/dash/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/dash/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/dash/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/dash/base/navs', name: 'Navs', component: Navs },
  { path: '/dash/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/dash/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/dash/base/progress', name: 'Progress', component: Progress },
  { path: '/dash/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/dash/base/tables', name: 'Tables', component: Tables },
  { path: '/dash/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/dash/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/dash/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/dash/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/dash/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/dash/charts', name: 'Charts', component: Charts },
  { path: '/dash/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/dash/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/dash/forms/select', name: 'Select', component: Select },
  { path: '/dash/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/dash/forms/range', name: 'Range', component: Range },
  { path: '/dash/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/dash/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/dash/forms/layout', name: 'Layout', component: Layout },
  { path: '/dash/forms/validation', name: 'Validation', component: Validation },
  { path: '/dash/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/dash/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/dash/icons/flags', name: 'Flags', component: Flags },
  { path: '/dash/icons/brands', name: 'Brands', component: Brands },
  { path: '/dash/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/dash/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/dash/notifications/badges', name: 'Badges', component: Badges },
  { path: '/dash/notifications/modals', name: 'Modals', component: Modals },
  { path: '/dash/notifications/toasts', name: 'Toasts', component: Toasts },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
  { path: '/widgets', name: 'Widgets', component: Widgets },
]
const mainRoutes=[
  { path: '/dash', exact: true, name: 'DashboardHome' },
  { path: '/main/About', name: 'About', component: About },
  { path: '/main/contact', name: 'Contact', component: Contact },
  { path: '/main/demo', name: 'Demo', component: Demo },
  { path: '/main/index', name: 'Index', component: Index }
]
export {routes, mainRoutes};
