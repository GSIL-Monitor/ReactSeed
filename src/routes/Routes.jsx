import React from 'react';
import {
    Dashboard,
    LibraryBooks,
    BubbleChart
} from '@material-ui/icons';

import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Card from "views/Card/Card.jsx";
import Anchor from "views/Anchor/Anchor.jsx";
import BackTop from "views/BackTop/BackTop.jsx";
import Breadcrumb from "views/Breadcrumb/Breadcrumb.jsx";
import Bubble from "views/Bubble/Bubble.jsx";
import Buttons from "views/Buttons/Buttons.jsx";
import Carousel from "views/Carousel/Carousel.jsx";
import Chat from "views/Chat/Chat.jsx";
import Codearea from "views/Codearea/Codearea.jsx";
import Form from "views/Form/Form.jsx";
import Tree from "views/tree/Basic.jsx";
import TreeDrawer from "views/drawers/TreeDrawer.jsx";
import Pagination from "views/Pagination/Pagination.jsx";
import MenuBar from "views/MenuBar/MenuBar.jsx";
import Message from "views/Message/Message.jsx";
import StarVote from "views/StarVote/StarVote.jsx";
import Transfer from "views/Transfer/Transfer.jsx";
import Progress from "views/Progress/Progress.jsx";
import StepperPane from "views/Steppers/StepperPane.jsx";
import Popconfirm from "views/Popconfirm/Popconfirm.jsx";
import Tag from "views/Tag/Tag.jsx";
import Mention from "views/Mention/SimpleMention.jsx";
import Modal from "../views/Modal/Modal";
import NavBar from "../views/NavBar/NavBar";
import Scrollbar from "../views/Scrollbar/DefaultScrollbar";
import Search from "../views/Search/Search";
import Selects from "../views/Selects/CascadeSelect.js";
import Pickers from "../views/Pickers/BasicDatePicker.js";
import Upload from "views/Upload/Upload.jsx";
import Video from "views/Video/Video.jsx";
import LocaleProvider from "views/LocaleProvider/LocaleProvider.jsx";
import Filters from "views/Filters/Filters.jsx";
// import Drawing from "views/Drawing/Drawing.jsx";
// import Dragbase from "views/Dragbase/Dragbase.jsx";
// import Orderdrag from "views/Orderdrag/Orderdrag.jsx";
// import Panel from "views/Panel/Panel.jsx";

export const defaultRoute = [
  {
    path: 'layoutPart',
    component: '布局组件',
    icon: <LibraryBooks />,
    childRoutes: [
      {
        path: "/navbar",
        icon: <LibraryBooks />,
        component: 'NavBar',
      },
      {
        path: "/menubar",
        component: 'MenuBar',
        icon: <LibraryBooks />,
      },
      {
        path: "/drawer",
        component: 'TreeDrawer',
        icon: <LibraryBooks />,
      },
      {
        path: "/breadcrumb",
        component: 'Breadcrumb',
        icon: <LibraryBooks />,
      },
      {
        path: "/backtop",
        component: 'BackTop',
        icon: <LibraryBooks />,
      },
      {
        path: "/locale-provider",
        component: 'LocaleProvider',
        icon: <LibraryBooks />,
      }
    ]
  },
  {
    path: 'basicPart',
    component: '基础组件',
    icon: <LibraryBooks />,
    childRoutes: [
      {
        path: "/card",
        icon: <LibraryBooks />,
        component: 'Card',
      },
      {
        path: "/form",
        component: 'Form',
        icon: <LibraryBooks />,
      },
      {
        path: "/buttons",
        component: 'Buttons',
        icon: <LibraryBooks />,
      },
      {
        path: "/pagination",
        component: 'Pagination',
        icon: <LibraryBooks />,
      },
      {
        path: "/message",
        component: 'Message',
        icon: <LibraryBooks />,
      },
      {
        path: "/progress",
        component: 'Progress',
        icon: <LibraryBooks />,
      },
      {
        path: "/modal",
        component: 'Modal',
        icon: <LibraryBooks />,
      },
      {
        path: "/popconfirm",
        component: 'Popconfirm',
        icon: <LibraryBooks />,
      },
      {
        path: "/upload",
        component: 'Upload',
        icon: <LibraryBooks />,
      },
      {
        path: "/video",
        component: 'Video',
        icon: <LibraryBooks />,
      },
      {
        path: "/mention",
        component: 'Mention',
        icon: <LibraryBooks />,
      },
      {
        path: "/scrollbar",
        component: 'Scrollbar',
        icon: <LibraryBooks />,
      },
      {
        path: "/search",
        component: 'Search',
        icon: <LibraryBooks />,
      },
      {
        path: "/filters",
        component: 'Filters',
        icon: <LibraryBooks />,
      },
      {
        path: "/pickers",
        component: 'Pickers',
        icon: <LibraryBooks />,
      },
      {
        path: "/selects",
        component: 'Selects',
        icon: <LibraryBooks />,
      }
    ]
  },
  {
    path: 'functionPart',
    component: '功能组件',
    icon: <LibraryBooks />,
    childRoutes: [
      {
        path: "/anchor",
        icon: <LibraryBooks />,
        component: 'Anchor',
      },
      {
        path: "/tree",
        component: 'Tree',
        icon: <LibraryBooks />,
      },
      {
        path: "/chat",
        component: 'Chat',
        icon: <LibraryBooks />,
      },
      {
        path: "/bubble",
        component: 'Bubble',
        icon: <LibraryBooks />,
      },
      {
        path: "/carousel",
        component: 'Carousel',
        icon: <LibraryBooks />,
      },
      {
        path: "/codearea",
        component: 'Codearea',
        icon: <LibraryBooks />,
      },
      {
        path: "/starvote",
        component: 'StarVote',
        icon: <LibraryBooks />,
      },
      {
        path: "/transfer",
        component: 'Transfer',
        icon: <LibraryBooks />,
      },
      {
        path: "/stepper",
        component: 'StepperPane',
        icon: <LibraryBooks />,
      },
      {
        path: "/tag",
        component: 'Tag',
        icon: <LibraryBooks />,
      }
    ]
  }
];

const Routes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
     {
        path: "/card",
        sidebarName: "Card",
        navbarName: "Card",
        icon: BubbleChart,
        component: Card
    },
    {
        path: "/anchor",
        sidebarName: "Anchor",
        navbarName: "Anchor",
        icon: BubbleChart,
        component: Anchor
    },
    {
        path: "/backtop",
        sidebarName: "BackTop",
        navbarName: "BackTop",
        icon: BubbleChart,
        component: BackTop
    },
    {
        path: "/breadcrumb",
        sidebarName: "Breadcrumb",
        navbarName: "Breadcrumb",
        icon: BubbleChart,
        component: Breadcrumb
    },
    {
        path: "/bubble",
        sidebarName: "Bubble",
        navbarName: "Bubble",
        icon: BubbleChart,
        component: Bubble
    },
    {
        path: "/buttons",
        sidebarName: "Buttons",
        navbarName: "Buttons",
        icon: BubbleChart,
        component: Buttons
    },
    {
        path: "/carousel",
        sidebarName: "Carousel",
        navbarName: "Carousel",
        icon: BubbleChart,
        component: Carousel
    },
    {
        path: "/chat",
        sidebarName: "Chat",
        navbarName: "Chat",
        icon: BubbleChart,
        component: Chat
    },
    {
        path: "/codearea",
        sidebarName: "Codearea",
        navbarName: "Codearea",
        icon: BubbleChart,
        component: Codearea
    },
    {
        path: "/form",
        sidebarName: "Form",
        navbarName: "Form",
        icon: BubbleChart,
        component: Form
    },
    {
        path: "/drawer",
        sidebarName: "TreeDrawer",
        navbarName: "TreeDrawer",
        icon: BubbleChart,
        component: TreeDrawer
    },
    {
        path: "/tree",
        sidebarName: "Tree",
        navbarName: "Tree",
        icon: BubbleChart,
        component: Tree
    },
    {
        path: "/pagination",
        sidebarName: "Pagination",
        navbarName: "Pagination",
        icon: BubbleChart,
        component: Pagination
    },
    {
        path: "/menubar",
        sidebarName: "MenuBar",
        navbarName: "MenuBar",
        icon: BubbleChart,
        component: MenuBar
    },
    {
        path: "/message",
        sidebarName: "Message",
        navbarName: "Message",
        icon: BubbleChart,
        component: Message
    },{
        path: "/starvote",
        sidebarName: "StarVote",
        navbarName: "StarVote",
        icon: BubbleChart,
        component: StarVote
    },{
        path: "/transfer",
        sidebarName: "Transfer",
        navbarName: "Transfer",
        icon: BubbleChart,
        component: Transfer
    },{
        path: "/progress",
        sidebarName: "Progress",
        navbarName: "Progress",
        icon: BubbleChart,
        component: Progress
    },{
        path: "/steppers",
        sidebarName: "Steppers",
        navbarName: "Steppers",
        icon: BubbleChart,
        component: StepperPane
    },{
        path: "/popconfirm",
        sidebarName: "Popconfirm",
        navbarName: "Popconfirm",
        icon: BubbleChart,
        component: Popconfirm
    },{
        path: "/Upload",
        sidebarName: "Upload",
        navbarName: "Upload",
        icon: BubbleChart,
        component: Upload
    },{
        path: "/Video",
        sidebarName: "Video",
        navbarName: "Video",
        icon: BubbleChart,
        component: Video
    },
    {
        path: "/tag",
        sidebarName: "Tag",
        navbarName: "Tag",
        icon: BubbleChart,
        component: Tag
    },
    {
        path: "/mention",
        sidebarName: "Mention",
        navbarName: "Mention",
        icon: BubbleChart,
        component: Mention
    },
    {
        path: "/Modal",
        sidebarName: "Modal",
        navbarName: "Modal",
        icon: BubbleChart,
        component: Modal
    },
    {
        path: "/navbar",
        sidebarName: "NavBar",
        navbarName: "NavBar",
        icon: BubbleChart,
        component: NavBar
    },
    {
        path: "/Scrollbar",
        sidebarName: "Scrollbar",
        navbarName: "Scrollbar",
        icon: BubbleChart,
        component: Scrollbar
    },
    {
        path: "/search",
        sidebarName: "Search",
        navbarName: "Search",
        icon: BubbleChart,
        component: Search
    },
    {
        path: "/Selects",
        sidebarName: "Selects",
        navbarName: "Selects",
        icon: BubbleChart,
        component: Selects
    },
    {
        path: "/pickers",
        sidebarName: "Pickers",
        navbarName: "Pickers",
        icon: BubbleChart,
        component: Pickers
    },
    {
        path: "/locale-provider",
        sidebarName: "LocaleProvider",
        navbarName: "LocaleProvider",
        icon: BubbleChart,
        component: LocaleProvider
    },
    {
        path: "/filters",
        sidebarName: "Filters",
        navbarName: "Filters",
        icon: BubbleChart,
        component: Filters
    },
    // {
    //     path: "/drawing",
    //     sidebarName: "Drawing",
    //     navbarName: "Drawing",
    //     icon: BubbleChart,
    //     component: Drawing
    // },
    // {
    //     path: "/dragbase",
    //     sidebarName: "Dragbase",
    //     navbarName: "Dragbase",
    //     icon: BubbleChart,
    //     component: Dragbase
    // },
    // {
    //     path: "/order-drag",
    //     sidebarName: "Orderdrag",
    //     navbarName: "Orderdrag",
    //     icon: BubbleChart,
    //     component: Orderdrag
    // },

    // {
    //     path: "/panel",
    //     sidebarName: "Panel",
    //     navbarName: "Panel",
    //     icon: BubbleChart,
    //     component: Panel
    // },
    {
        redirect: true,
        path: "/",
        to: "/dashboard",
        navbarName: "Redirect"
    }
];

export default Routes;
