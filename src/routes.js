// Main routes
import Index from './Home/views/index/Index'
import Contact from './Home/views/contact/Contact'
import Demo from './Home/views/demo/Demo'
import About from './Home/views/about/About'

//assessor
import CustList from './Dash/assessor/ExpertViewCustList'
import Assess from './Dash/assessor/ExpertViewAssess'
import Recommendations from './Dash/assessor/Recommendations'
import Report from './Dash/assessor/Report'
import Assign from './Dash/assessor/Assign'
import {Team} from './Dash/views/assess/Team'
import Chat from './Dash/views/assess/Chat'

//routes
import Colors from './Dash/views/theme/colors/Colors'
import Schedule from './Dash/views/theme/colors/Schedule'
import Profile from './Dash/views/Profile'
import QuestionsComp from './Dash/views/assessment/questcomp'
import Typography from './Dash/views/theme/typography/Typography'
import Accordion from './Dash/views/components/base/accordion/Accordion'
import Breadcrumbs from './Dash/views/components/base/breadcrumbs/Breadcrumbs'
import Cards from './Dash/views/components/base/cards/Cards'
import Carousels from './Dash/views/components/base/carousels/Carousels'
import Collapses from './Dash/views/components/base/collapses/Collapses'
import ListGroups from './Dash/views/components/base/list-groups/ListGroups'
import Navs from './Dash/views/components/base/navs/Navs'
import Paginations from './Dash/views/components/base/paginations/Paginations'
import Popovers from './Dash/views/components/base/popovers/Popovers'
import Progress from './Dash/views/components/base/progress/Progress'
import Spinners from './Dash/views/components/base/spinners/Spinners'
import Tables from './Dash/views/components/base/tables/Tables'
import Tooltips from './Dash/views/components/base/tooltips/Tooltips'
import CalendarEvents from './Dash/views/assess/Calendar'
import Employees from './Dash/views/assess/Employees'
import Update from './Dash/views/assess/Update'
import Buttons from './Dash/views/components/buttons/buttons/Buttons'
import ButtonGroups from './Dash/views/components/buttons/button-groups/ButtonGroups'
import Dropdowns from './Dash/views/components/buttons/dropdowns/Dropdowns'

import ChecksRadios from './Dash/views/components/forms/checks-radios/ChecksRadios'
import FloatingLabels from './Dash/views/components/forms/floating-labels/FloatingLabels'
import FormControl from './Dash/views/components/forms/form-control/FormControl'
import InputGroup from './Dash/views/components/forms/input-group/InputGroup'
import Layout from './Dash/views/components/forms/layout/Layout'
import Range from './Dash/views/components/forms/range/Range'
import Select from './Dash/views/components/forms/select/Select'
import Validation from './Dash/views/components/forms/validation/Validation'

import CoreUIIcons from './Dash/views/components/icons/coreui-icons/CoreUIIcons'
import Flags from './Dash/views/components/icons/flags/Flags'
import Brands from './Dash/views/components/icons/brands/Brands'

import ScoreLegend from './Dash/views/dashboard/ScoreLegend'

import Alerts from './Dash/views/components/notifications/alerts/Alerts'
import Badges from './Dash/views/components/notifications/badges/Badges'
import Modals from './Dash/views/components/notifications/modals/Modals'
import Toasts from './Dash/views/components/notifications/toasts/Toasts'

//import Login from './Dash/views/examples/pages/login/Login'
// import Register from './Dash/views/examples/pages/register/Register'
// import Page404 from './Dash/views/examples/pages/page404/Page404'
// import Page500 from './Dash/views/examples/pages/page500/Page500'

import Widgets from './Dash/views/components/widgets/Widgets'

import Charts from './Dash/views/components/charts/Charts'
import Dashboard from './Dash/views/dashboard/Dashboard'

const routes = [
  { path: '/dash', exact: true, name: 'DashboardHome' },
  { path: '/dash/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/dash/assessment', name: 'Assessment', component: QuestionsComp, exact: true },
  { path: '/dash/dashboard', name: 'Dashboard', component: Dashboard, exact: true  },
  { path: '/dash/score', name: 'Legend', component: ScoreLegend, exact: true  },
  { path: '/dash/theme/colors', name: 'Colors', component: Colors, exact: true },
  { path: '/dash/schedule', name: 'Schedule', component: Schedule, exact: true },
  { path: '/dash/theme/typography', name: 'Typography', component: Typography, exact: true },
  { path: '/dash/cust', name: 'Customer List', component: CustList, exact: true },
  { path: '/dash/assignRec', name:'Assign Recommendations', component: Assign, exact: true},
  { path: '/dash/calendar', name: 'Calendar', component: CalendarEvents, exact: true },
  { path: '/dash/chat', name: 'Chat', component: Chat, exact: true },
  { path: '/dash/employees', name: 'Employees', component: Employees, exact: true },
  { path: '/dash/update', name: 'Update', component: Update, exact: true },
  { path: '/dash/profile', name: 'Profile', component: Profile, exact: true },
  { path: '/dash/team', name: 'Team', component: Team, exact: true },
  { path: '/dash/assess', name: 'Assess', component: Assess, exact: true },
  { path: '/dash/recommendations', name: 'Recommendations', component: Recommendations, exact: true },
  { path: '/dash/report', name: 'Report', component: Report, exact: true },
  { path: '/dash/base/accordion', name: 'Accordion', component: Accordion, exact: true },
  { path: '/dash/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs, exact: true },
  { path: '/dash/base/cards', name: 'Cards', component: Cards, exact: true},
  { path: '/dash/base/carousels', name: 'Carousel', component: Carousels , exact: true},
  { path: '/dash/base/collapses', name: 'Collapse', component: Collapses, exact: true },
  { path: '/dash/base/list-groups', name: 'List Groups', component: ListGroups, exact: true },
  { path: '/dash/base/navs', name: 'Navs', component: Navs, exact: true },
  { path: '/dash/base/paginations', name: 'Paginations', component: Paginations, exact: true },
  { path: '/dash/base/popovers', name: 'Popovers', component: Popovers, exact: true },
  { path: '/dash/base/progress', name: 'Progress', component: Progress, exact: true },
  { path: '/dash/base/spinners', name: 'Spinners', component: Spinners, exact: true },
  { path: '/dash/base/tables', name: 'Tables', component: Tables, exact: true },
  { path: '/dash/base/tooltips', name: 'Tooltips', component: Tooltips, exact: true },
  { path: '/dash/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/dash/buttons/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/dash/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns, exact: true },
  { path: '/dash/buttons/button-groups', name: 'Button Groups', component: ButtonGroups, exact: true },
  { path: '/dash/charts', name: 'Charts', component: Charts, exact: true },
  { path: '/dash/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/dash/forms/form-control', name: 'Form Control', component: FormControl, exact: true },
  { path: '/dash/forms/select', name: 'Select', component: Select, exact: true },
  { path: '/dash/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios, exact: true },
  { path: '/dash/forms/range', name: 'Range', component: Range, exact: true },
  { path: '/dash/forms/input-group', name: 'Input Group', component: InputGroup, exact: true },
  { path: '/dash/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels, exact: true },
  { path: '/dash/forms/layout', name: 'Layout', component: Layout, exact: true },
  { path: '/dash/forms/validation', name: 'Validation', component: Validation, exact: true },
  { path: '/dash/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/dash/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/dash/icons/flags', name: 'Flags', component: Flags, exact: true },
  { path: '/dash/icons/brands', name: 'Brands', component: Brands, exact: true },
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
  { path: '/main/About', name: 'About', component: About, exact: true },
  { path: '/main/contact', name: 'Contact', component: Contact, exact: true },
  { path: '/main/demo', name: 'Demo', component: Demo, exact: true },
  //{ path: '/login', name: 'Login', component: Login },  
  { path: '/main/index', name: 'Index', component: Index, exact: true }
]
export {routes, mainRoutes};
