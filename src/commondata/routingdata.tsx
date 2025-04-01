import { lazy } from "react";
import AddPricing from "../components/pricing/AddPricing";
import AddLocation from "../components/location/AddLocation";
import AddZoningAndCapacity from "../components/zoningAndCapacity/AddZoningAndCapacity";
import AddDynamicPricing from "../components/dynamicPricing/AddDynamicPricing";
import AddMarketingMaterial from "../components/marketingMaterial/AddMarketingMaterial";
import AddPolicies from "../components/listing/AddListing/Policies/AddPolicies";
import AddZones from "../components/listing/AddListing/AddZoningAndCapacity/AddZones/AddZones";
import AddMyProductAllocation from "../components/ProductAllocation/AddProductAllocation";
import Accounts from "../components/accounts";
import ProfileSettings from "../components/settings";
import AddProject from "../components/accounts/AddListing";
import Orders from "../components/orders";
import OrderDetails from "../components/orders/OrderDetails";
import Scanning from "../components/scanning";
import Tickets from "../components/Tickets";
import TicketsDesigner from "../components/Tickets/DesignTickets";
import ScanningDetails from "../components/scanning/ScanningDetails";
import Finance from "../components/finance";
import InvoiceDetail from "../components/finance/Invoice-Detail";
import AddRole from "../components/settings/AddRole";
import Legal from "../components/legal";
import AddContact from "../components/legal/AddContact";
import AddBankAccount from "../components/finance/AddBankAccount";
import AddInvoice from "../components/finance/AddInvoice";
import Email from "../components/email";

const CardsDesign = lazy(
  () => import("../components/apps/cardsdesign/cardsdesign")
);
const Charts = lazy(() => import("../components/apps/charts/charts"));
const ContentScrollbar = lazy(
  () => import("../components/apps/contentscrollbar/contentscrollbar")
);
const Counters = lazy(() => import("../components/apps/counters/counters"));
const CryptoCurrencies = lazy(
  () => import("../components/apps/cryptocurrencies/cryptocurrencies")
);
const DefaultCalender = lazy(
  () => import("../components/apps/defaultcalender/defaultcalender")
);
const Footers = lazy(() => import("../components/apps/footers/footers"));
const FullCalender = lazy(
  () => import("../components/apps/fullcalender/fullcalender")
);
const Loaders = lazy(() => import("../components/apps/loaders/loaders"));
const Notifications = lazy(
  () => import("../components/apps/notifications/notifications")
);
const RangeSlider = lazy(
  () => import("../components/apps/rangeslider/rangeslider")
);
const Rating = lazy(() => import("../components/apps/rating/rating"));
const Search = lazy(() => import("../components/apps/search/search"));
const Sweet = lazy(() => import("../components/apps/sweet/sweet"));
const Timeline = lazy(() => import("../components/apps/timeline/timeline"));
const TreeView = lazy(() => import("../components/apps/treeview/treeview"));
const Userlist = lazy(() => import("../components/apps/userlist/userlist"));
const Accordians = lazy(
  () => import("../components/bootstrap/accordians/accordians")
);
const BootstrapAlerts = lazy(
  () => import("../components/bootstrap/bootstrapalerts/bootstrapalerts")
);
const AvatarRadius = lazy(
  () => import("../components/bootstrap/avatarradius/avatarradius")
);
const AvatarSquare = lazy(
  () => import("../components/bootstrap/avatarsquare/avatarsquare")
);
const AvatarRounded = lazy(
  () => import("../components/bootstrap/avatarrounded/avatarrounded")
);
const BadgesPills = lazy(
  () => import("../components/bootstrap/badgespills/badgespills")
);
const Breadcrumbs = lazy(
  () => import("../components/bootstrap/breadcrumbs/breadcrumbs")
);
const Buttons = lazy(() => import("../components/bootstrap/buttons/buttons"));
const Carousels = lazy(
  () => import("../components/bootstrap/carousels/carousels")
);
const Colors = lazy(() => import("../components/bootstrap/colors/colors"));
const DropDowns = lazy(
  () => import("../components/bootstrap/dropdowns/dropdowns")
);
const ListGroups = lazy(
  () => import("../components/bootstrap/listgroup/listgroups")
);
const MediaObject = lazy(
  () => import("../components/bootstrap/mediaobject/mediaobject")
);
const Modals = lazy(() => import("../components/bootstrap/modal/modal"));
const Navigation = lazy(
  () => import("../components/bootstrap/navigation/navigation")
);
const OffCanvas = lazy(
  () => import("../components/bootstrap/offcanvas/offcanvas")
);
const Pagination = lazy(
  () => import("../components/bootstrap/pagination/pagination")
);
const Panels = lazy(() => import("../components/bootstrap/panels/panels"));
const Progress = lazy(
  () => import("../components/bootstrap/progress/progress")
);
const Tabs = lazy(() => import("../components/bootstrap/tabs/tabs"));
const Tags = lazy(() => import("../components/bootstrap/tags/tags"));
const Thumbnails = lazy(
  () => import("../components/bootstrap/thumbnails/thumbnails")
);
const Toast = lazy(() => import("../components/bootstrap/toast/toast"));
const TooltipPopover = lazy(
  () => import("../components/bootstrap/tooltippopover/tooltippopover")
);
const Typography = lazy(
  () => import("../components/bootstrap/typography/typography")
);
const Ribbons = lazy(() => import("../components/bootstrap/ribbons/ribbons"));
const Chartjs = lazy(() => import("../components/charts/chart js/chartjs"));
const Dashboard = lazy(() => import("../components/dashboard"));
const Listing = lazy(() => import("../components/listing"));
const GuestList = lazy(() => import("../components/guestList"));
const SingleInvitation = lazy(
  () => import("../components/guestList/SingleInvitation")
);
const Promotions = lazy(() => import("../components/promotions"));
const GenerateBarcode = lazy(
  () => import("../components/promotions/GenerateBarcode")
);
const GenerateDiscountCode = lazy(
  () => import("../components/promotions/GenerateDiscountCode")
);
const PromotionsImport = lazy(
  () => import("../components/promotions/PromotionsImport")
);
const BulkGuestInvitation = lazy(
  () => import("../components/guestList/BulkGuestInvitation")
);
const AddListing = lazy(() => import("../components/listing/AddListing"));
const AddRules = lazy(() => import("../components/rules/AddRules"));
const Policies = lazy(
  () => import("../components/listing/AddListing/Policies")
);
const Shops = lazy(() => import("../components/shops"));
const Info = lazy(() => import("../components/info"));
const AddInfo = lazy(() => import("../components/info/AddInfo"));
const Location = lazy(() => import("../components/location"));
const Zoning = lazy(() => import("../components/zoningAndCapacity"));
const ProductAllocation = lazy(() => import("../components/ProductAllocation"));
const MarketingMaterial = lazy(() => import("../components/marketingMaterial"));
const DynamicPricing = lazy(() => import("../components/dynamicPricing"));
const Rules = lazy(() => import("../components/rules"));
const Shows = lazy(() => import("../components/listing/AddListing/Shows"));
const AddShow = lazy(
  () => import("../components/listing/AddListing/Shows/AddShow")
);
const Pricing = lazy(() => import("../components/pricing"));
const AddShops = lazy(() => import("../components/shops/AddShops"));
const SeatsIoDesigner = lazy(
  () => import("../components/SeatPlanner/SeatsIoDesigner")
);
// const SignIn = lazy(() => import("../components/authentication/login/SignIn"));
// const SignInOptions = lazy(
//   () => import("../components/authentication/signInOptions")
// );
// const SignUp = lazy(
//   () => import("../components/authentication/register/signUp")
// );

const AddProduct = lazy(
  () => import("../components/e-commerce/addproduct/addproduct")
);
const Checkout = lazy(
  () => import("../components/e-commerce/checkout/checkout")
);
const ProductDetails = lazy(
  () => import("../components/e-commerce/productdetails/productdetails")
);
const Shop = lazy(() => import("../components/e-commerce/shop/shop"));
const ShoppingCart = lazy(
  () => import("../components/e-commerce/shoppingcart/shoppingcart")
);
const Wishlist = lazy(
  () => import("../components/e-commerce/wishlist/wishlist")
);
const FileAttachments = lazy(
  () => import("../components/fileManager/fileattachments/fileattachments")
);
const FileDetails = lazy(
  () => import("../components/fileManager/filedetails/filedetails")
);
const FileManager = lazy(
  () => import("../components/fileManager/filemanager/filemanager")
);
const FileManagerList = lazy(
  () => import("../components/fileManager/filemanagerlist/filemanagerlist")
);
const BootstrapIcons = lazy(
  () => import("../components/icons/bootstrapicons/bootstrapicons")
);
const FeatherIcons = lazy(
  () => import("../components/icons/feathericons/feathericons")
);
const FlagIcons = lazy(() => import("../components/icons/flagicons/flagicons"));
const FontAwesome = lazy(
  () => import("../components/icons/fontawesome/fontawesome")
);
const IonicIcons = lazy(
  () => import("../components/icons/ionicicons/ionicicons")
);
const MaterialDesignIcons = lazy(
  () => import("../components/icons/materialdesignicons/materialdesignicons")
);
const Pe7Icons = lazy(() => import("../components/icons/pe7icons/pe7icons"));
const SimpleLineIcons = lazy(
  () => import("../components/icons/simplelineicons/simplelineicons")
);
const ThemifyIcons = lazy(
  () => import("../components/icons/themifyicons/themifyicons")
);
const TypiconsIcons = lazy(
  () => import("../components/icons/typiconsicons/typiconsicons")
);
const WeatherIcons = lazy(
  () => import("../components/icons/weathericons/weathericons")
);
const LeafletMaps = lazy(
  () => import("../components/maps/leafletmaps/leafletmaps")
);
const SimpleMaps = lazy(
  () => import("../components/maps/simplemaps/simplemaps")
);
const Editprofile = lazy(
  () => import("../components/pages/editprofile/editprofile")
);
const AboutCompany = lazy(
  () => import("../components/pages/extension/aboutcompany/aboutcompany")
);
const BlogDetails = lazy(
  () => import("../components/pages/extension/blogdetails/blogdetails")
);
const BlogPost = lazy(
  () => import("../components/pages/extension/blogpost/blogpost")
);
const Blogs = lazy(() => import("../components/pages/extension/blogs/blogs"));
const EmptyPage = lazy(
  () => import("../components/pages/extension/emptypage/emptypage")
);
const FAQS = lazy(() => import("../components/pages/extension/faqs/faqs"));
const Invoice = lazy(
  () => import("../components/pages/extension/invoice/invoice")
);
const ExtensionPricing = lazy(
  () => import("../components/pages/extension/pricing/pricing")
);
const Services = lazy(
  () => import("../components/pages/extension/services/services")
);
const Settings = lazy(
  () => import("../components/pages/extension/settings/settings")
);
const Terms = lazy(() => import("../components/pages/extension/terms/terms"));
const FormAdvanced = lazy(
  () => import("../components/pages/forms/formadvanced/formadvanced")
);
const FormEditor = lazy(
  () => import("../components/pages/forms/formeditor/formeditor")
);
const FormElements = lazy(
  () => import("../components/pages/forms/formelements/formelements")
);
const FormLayouts = lazy(
  () => import("../components/pages/forms/formlayouts/formlayouts")
);
const FormValidation = lazy(
  () => import("../components/pages/forms/formvalidation/formvalidation")
);
const FormWizard = lazy(
  () => import("../components/pages/forms/formwizard/formwizard")
);
const Gallery = lazy(() => import("../components/pages/gallery/gallery"));
const MailCompose = lazy(
  () => import("../components/pages/mailcompose/mailcompose")
);
const MailInbox = lazy(() => import("../components/pages/mailinbox/mailinbox"));
const MailRead = lazy(() => import("../components/pages/mailread/mailread"));
const NotificationList = lazy(() => import("../components/notification"));
const Profile = lazy(() => import("../components/pages/profile/profile"));
const DataTable = lazy(
  () => import("../components/pages/tables/datatable/datatable")
);
const DefaultTable = lazy(
  () => import("../components/pages/tables/defaulttable/defaulttable")
);
const EditTable = lazy(
  () => import("../components/pages/tables/edittable/edittable")
);

const Line = lazy(() => import("../components/charts/apexchart/line/line"));
const Area = lazy(() => import("../components/charts/apexchart/area/area"));
const Column = lazy(
  () => import("../components/charts/apexchart/column/column")
);
const Bar = lazy(() => import("../components/charts/apexchart/bar/bar"));
const Mixed = lazy(() => import("../components/charts/apexchart/mixed/mixed"));
const CandleStick = lazy(
  () => import("../components/charts/apexchart/candlestick/candlestick")
);
const Boxplot = lazy(
  () => import("../components/charts/apexchart/boxplot/boxplot")
);
const Treemap = lazy(
  () => import("../components/charts/apexchart/treemap/treemap")
);
const Pie = lazy(() => import("../components/charts/apexchart/pie/pie"));
const Radialbar = lazy(
  () => import("../components/charts/apexchart/radialbar/radialbar")
);
const Radar = lazy(() => import("../components/charts/apexchart/radar/radar"));
const Polararea = lazy(
  () => import("../components/charts/apexchart/polararea/polararea")
);

const Lines = lazy(() => import("../components/charts/echarts/line/lines"));
const Trees = lazy(() => import("../components/charts/echarts/tree/trees"));
const Scatters = lazy(
  () => import("../components/charts/echarts/scatter/scatters")
);
const Timelines = lazy(
  () => import("../components/charts/apexchart/timeline/timelines")
);
const CandleSticks = lazy(
  () => import("../components/charts/echarts/candlesticks/candlesticks")
);
const Bars = lazy(() => import("../components/charts/echarts/bars/bars"));
const Widgets = lazy(() => import("../components/apps/widgets/widgets"));
const FormInputSpinners = lazy(
  () => import("../components/pages/forms/forminputspinners/forminputspinners")
);

const Chat = lazy(() => import("../components/chat/chat"));
const ChatCon = lazy(() => import("../components/chat/index"));

export const RouterData = [
  { path: `${import.meta.env.BASE_URL}dashboard`, element: <Dashboard /> },
  { path: `${import.meta.env.BASE_URL}listings`, element: <Listing /> },
  { path: `${import.meta.env.BASE_URL}guest-list`, element: <GuestList /> },
  {
    path: `${import.meta.env.BASE_URL}single-invitation`,
    element: <SingleInvitation />,
  },
  {
    path: `${import.meta.env.BASE_URL}promotions`,
    element: <Promotions />,
  },
  {
    path: `${import.meta.env.BASE_URL}generate-barcode`,
    element: <GenerateBarcode />,
  },
  {
    path: `${import.meta.env.BASE_URL}generate-discountcode`,
    element: <GenerateDiscountCode />,
  },
  {
    path: `${import.meta.env.BASE_URL}promotions-import`,
    element: <PromotionsImport />,
  },
  {
    path: `${import.meta.env.BASE_URL}bulk-invitation`,
    element: <BulkGuestInvitation />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/info`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/location`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/date-show-time`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/products`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/zoning-and-capacity`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/product-allocation`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/shops`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/dynamic-pricing`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/marketing-material`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/rules`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/add-policies`,
    element: <AddListing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-listing/edit-policies/:id`,
    element: <AddListing />,
  },
  { path: `${import.meta.env.BASE_URL}my-info`, element: <Info /> },
  { path: `${import.meta.env.BASE_URL}add-info`, element: <AddInfo /> },
  { path: `${import.meta.env.BASE_URL}edit-info/:id`, element: <AddInfo /> },
  { path: `${import.meta.env.BASE_URL}my-locations`, element: <Location /> },
  { path: `${import.meta.env.BASE_URL}add-location`, element: <AddLocation /> },
  {
    path: `${import.meta.env.BASE_URL}edit-location/:id`,
    element: <AddLocation />,
  },
  { path: `${import.meta.env.BASE_URL}my-shops`, element: <Shops /> },
  { path: `${import.meta.env.BASE_URL}add-shops`, element: <AddShops /> },
  { path: `${import.meta.env.BASE_URL}edit-shops/:id`, element: <AddShops /> },
  { path: `${import.meta.env.BASE_URL}my-shows`, element: <Shows /> },
  { path: `${import.meta.env.BASE_URL}add-show`, element: <AddShow /> },
  { path: `${import.meta.env.BASE_URL}edit-show/:id`, element: <AddShow /> },
  {
    path: `${import.meta.env.BASE_URL}my-zoning-and-capacity`,
    element: <Zoning />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-zoning-and-capacity`,
    element: <AddZones />,
  },
  {
    path: `${import.meta.env.BASE_URL}my-product-allocation`,
    element: <ProductAllocation />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-product-allocation`,
    element: <AddMyProductAllocation />,
  },
  {
    path: `${import.meta.env.BASE_URL}edit-zoning-and-capacity/:id`,
    element: <AddZoningAndCapacity />,
  },
  {
    path: `${import.meta.env.BASE_URL}my-dynamic-pricing`,
    element: <DynamicPricing />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-dynamic-pricing`,
    element: <AddDynamicPricing />,
  },
  {
    path: `${import.meta.env.BASE_URL}edit-dynamic-pricing/:id`,
    element: <AddDynamicPricing />,
  },
  {
    path: `${import.meta.env.BASE_URL}my-marketing-material`,
    element: <MarketingMaterial />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-marketing-material`,
    element: <AddMarketingMaterial />,
  },
  {
    path: `${import.meta.env.BASE_URL}edit-marketing-material/:id`,
    element: <AddMarketingMaterial />,
  },
  {
    path: `${import.meta.env.BASE_URL}my-rules`,
    element: <Rules />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-rule`,
    element: <AddRules />,
  },
  {
    path: `${import.meta.env.BASE_URL}edit-rule/:id`,
    element: <AddRules />,
  },
  {
    path: `${import.meta.env.BASE_URL}my-policies`,
    element: <Policies />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-policy`,
    element: <AddPolicies />,
  },
  {
    path: `${import.meta.env.BASE_URL}edit-policy/:id`,
    element: <AddPolicies />,
  },
  { path: `${import.meta.env.BASE_URL}my-products`, element: <Pricing /> },
  { path: `${import.meta.env.BASE_URL}add-shop`, element: <AddShops /> },
  { path: `${import.meta.env.BASE_URL}edit-shop/:id`, element: <AddShops /> },
  { path: `${import.meta.env.BASE_URL}add-product`, element: <AddPricing /> },
  {
    path: `${import.meta.env.BASE_URL}edit-product/:id`,
    element: <AddPricing />,
  },
  {
    path: `${import.meta.env.BASE_URL}seating-plan`,
    element: <SeatsIoDesigner />,
  },
  {
    path: `${import.meta.env.BASE_URL}orders`,
    element: <Orders />,
  },
  {
    path: `${import.meta.env.BASE_URL}view-order/:id`,
    element: <OrderDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}accounts`,
    element: <Accounts />,
  },
  {
    path: `${import.meta.env.BASE_URL}settings`,
    element: <ProfileSettings />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-role`,
    element: <AddRole />,
  },
  {
    path: `${import.meta.env.BASE_URL}accounts/add-listing`,
    element: <AddProject />,
  },
  {
    path: `${import.meta.env.BASE_URL}scanning`,
    element: <Scanning />,
  },
  {
    path: `${import.meta.env.BASE_URL}finance`,
    element: <Finance />,
  },
  {
    path: `${import.meta.env.BASE_URL}email`,
    element: <Email />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-bank`,
    element: <AddBankAccount />,
  },
  {
    path: `${import.meta.env.BASE_URL}add-invoice`,
    element: <AddInvoice />,
  },
  {
    path: `${import.meta.env.BASE_URL}view-scanning/:id`,
    element: <ScanningDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}invoice-detail/:id`,
    element: <InvoiceDetail />,
  },
  {
    path: `${import.meta.env.BASE_URL}tickets`,
    element: <Tickets />,
  },
  {
    path: `${import.meta.env.BASE_URL}/design-ticket`,
    element: <TicketsDesigner />,
  },
  {
    path: `${import.meta.env.BASE_URL}/legal`,
    element: <Legal />,
  },
  {
    path: `${import.meta.env.BASE_URL}/add-contact`,
    element: <AddContact />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/carddesigns`,
    element: <CardsDesign />,
  },
  { path: `${import.meta.env.BASE_URL}apps/chat`, element: <Chat /> },
  { path: `${import.meta.env.BASE_URL}apps/charts`, element: <Charts /> },
  {
    path: `${import.meta.env.BASE_URL}apps/scrollbar`,
    element: <ContentScrollbar />,
  },
  { path: `${import.meta.env.BASE_URL}apps/counter`, element: <Counters /> },
  {
    path: `${import.meta.env.BASE_URL}apps/cryptocurrencies`,
    element: <CryptoCurrencies />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/defaultcalender`,
    element: <DefaultCalender />,
  },
  { path: `${import.meta.env.BASE_URL}apps/footer`, element: <Footers /> },
  {
    path: `${import.meta.env.BASE_URL}apps/fullcalender`,
    element: <FullCalender />,
  },
  { path: `${import.meta.env.BASE_URL}apps/loader`, element: <Loaders /> },
  {
    path: `${import.meta.env.BASE_URL}apps/notification`,
    element: <Notifications />,
  },
  {
    path: `${import.meta.env.BASE_URL}apps/rangeslider`,
    element: <RangeSlider />,
  },
  { path: `${import.meta.env.BASE_URL}apps/rating`, element: <Rating /> },
  { path: `${import.meta.env.BASE_URL}apps/search`, element: <Search /> },
  { path: `${import.meta.env.BASE_URL}apps/sweet`, element: <Sweet /> },
  { path: `${import.meta.env.BASE_URL}apps/timeline`, element: <Timeline /> },
  { path: `${import.meta.env.BASE_URL}apps/treeview`, element: <TreeView /> },
  { path: `${import.meta.env.BASE_URL}apps/userlist`, element: <Userlist /> },
  { path: `${import.meta.env.BASE_URL}apps/widgets`, element: <Widgets /> },

  {
    path: `${import.meta.env.BASE_URL}bootstrap/accordian`,
    element: <Accordians />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/bootstrapalerts`,
    element: <BootstrapAlerts />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/avatarradius`,
    element: <AvatarRadius />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/avatarsquare`,
    element: <AvatarSquare />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/avatarrounded`,
    element: <AvatarRounded />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/badgespills`,
    element: <BadgesPills />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/breadcrumbs`,
    element: <Breadcrumbs />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/buttons`,
    element: <Buttons />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/carousels`,
    element: <Carousels />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/colors`, element: <Colors /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/dropdowns`,
    element: <DropDowns />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/listgroups`,
    element: <ListGroups />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/mediaobject`,
    element: <MediaObject />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/modal`, element: <Modals /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/navigation`,
    element: <Navigation />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/offcanvas`,
    element: <OffCanvas />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/pagination`,
    element: <Pagination />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/panels`, element: <Panels /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/progress`,
    element: <Progress />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/tabs`, element: <Tabs /> },
  { path: `${import.meta.env.BASE_URL}bootstrap/tags`, element: <Tags /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/thumbnails`,
    element: <Thumbnails />,
  },
  { path: `${import.meta.env.BASE_URL}bootstrap/toast`, element: <Toast /> },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/tooltippopover`,
    element: <TooltipPopover />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/typography`,
    element: <Typography />,
  },
  {
    path: `${import.meta.env.BASE_URL}bootstrap/ribbons`,
    element: <Ribbons />,
  },

  { path: `${import.meta.env.BASE_URL}charts/chartjs`, element: <Chartjs /> },

  {
    path: `${import.meta.env.BASE_URL}charts/echart/lines`,
    element: <Lines />,
  },
  { path: `${import.meta.env.BASE_URL}charts/echart/bar`, element: <Bars /> },
  {
    path: `${import.meta.env.BASE_URL}charts/echart/candlestick`,
    element: <CandleSticks />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/echart/scatter`,
    element: <Scatters />,
  },
  { path: `${import.meta.env.BASE_URL}charts/echart/tree`, element: <Trees /> },

  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/line`,
    element: <Line />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/area`,
    element: <Area />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/column`,
    element: <Column />,
  },
  { path: `${import.meta.env.BASE_URL}charts/apexchart/bar`, element: <Bar /> },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/mixed`,
    element: <Mixed />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/timeline`,
    element: <Timelines />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/candlestick`,
    element: <CandleStick />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/boxplot`,
    element: <Boxplot />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/treemap`,
    element: <Treemap />,
  },
  { path: `${import.meta.env.BASE_URL}charts/apexchart/pie`, element: <Pie /> },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/radialbar`,
    element: <Radialbar />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/radar`,
    element: <Radar />,
  },
  {
    path: `${import.meta.env.BASE_URL}charts/apexchart/polararea`,
    element: <Polararea />,
  },

  {
    path: `${import.meta.env.BASE_URL}ecommerce/addproduct`,
    element: <AddProduct />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/checkout`,
    element: <Checkout />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/productdetails`,
    element: <ProductDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/productdetails/:id`,
    element: <ProductDetails />,
  },
  { path: `${import.meta.env.BASE_URL}ecommerce/shop`, element: <Shop /> },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/shoppingcart`,
    element: <ShoppingCart />,
  },
  {
    path: `${import.meta.env.BASE_URL}ecommerce/wishlist`,
    element: <Wishlist />,
  },

  {
    path: `${import.meta.env.BASE_URL}filemanager/fileattachments`,
    element: <FileAttachments />,
  },
  {
    path: `${import.meta.env.BASE_URL}filemanager/filedetails`,
    element: <FileDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}filemanager/filemanager`,
    element: <FileManager />,
  },
  {
    path: `${import.meta.env.BASE_URL}filemanager/filemanagerlist`,
    element: <FileManagerList />,
  },

  {
    path: `${import.meta.env.BASE_URL}icons/bootstrapicons`,
    element: <BootstrapIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/feathericons`,
    element: <FeatherIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/flagicons`,
    element: <FlagIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/fontawesome`,
    element: <FontAwesome />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/ionicicons`,
    element: <IonicIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/materialdesignicons`,
    element: <MaterialDesignIcons />,
  },
  { path: `${import.meta.env.BASE_URL}icons/pe7icons`, element: <Pe7Icons /> },
  {
    path: `${import.meta.env.BASE_URL}icons/simplelineicons`,
    element: <SimpleLineIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/themifyicons`,
    element: <ThemifyIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/typiconsicons`,
    element: <TypiconsIcons />,
  },
  {
    path: `${import.meta.env.BASE_URL}icons/weathericons`,
    element: <WeatherIcons />,
  },

  {
    path: `${import.meta.env.BASE_URL}maps/leafletmaps`,
    element: <LeafletMaps />,
  },
  {
    path: `${import.meta.env.BASE_URL}maps/simplemaps`,
    element: <SimpleMaps />,
  },

  {
    path: `${import.meta.env.BASE_URL}pages/editprofile`,
    element: <Editprofile />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/aboutcompany`,
    element: <AboutCompany />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/blogdetails`,
    element: <BlogDetails />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/blogpost`,
    element: <BlogPost />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/blogs`,
    element: <Blogs />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/emptypage`,
    element: <EmptyPage />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/faqs`,
    element: <FAQS />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/invoice`,
    element: <Invoice />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/pricing`,
    element: <ExtensionPricing />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/services`,
    element: <Services />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/setting`,
    element: <Settings />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/extension/term`,
    element: <Terms />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/forms/formadvanced`,
    element: <FormAdvanced />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/forms/formeditor`,
    element: <FormEditor />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/forms/formelements`,
    element: <FormElements />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/forms/formlayouts`,
    element: <FormLayouts />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/forms/formvalidation`,
    element: <FormValidation />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/forms/forminputspinner`,
    element: <FormInputSpinners />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/forms/formwizard`,
    element: <FormWizard />,
  },
  { path: `${import.meta.env.BASE_URL}pages/gallery`, element: <Gallery /> },
  {
    path: `${import.meta.env.BASE_URL}pages/mailcompose`,
    element: <MailCompose />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/mailinbox`,
    element: <MailInbox />,
  },
  { path: `${import.meta.env.BASE_URL}pages/mailread`, element: <MailRead /> },
  {
    path: `${import.meta.env.BASE_URL}/notificationlist`,
    element: <NotificationList />,
  },
  { path: `${import.meta.env.BASE_URL}pages/profile`, element: <Profile /> },

  {
    path: `${import.meta.env.BASE_URL}pages/tables/datatables`,
    element: <DataTable />,
  },

  {
    path: `${import.meta.env.BASE_URL}pages/tables/edittables`,
    element: <EditTable />,
  },
  {
    path: `${import.meta.env.BASE_URL}pages/tables/defaulttables`,
    element: <DefaultTable />,
  },
  {
    path: `${import.meta.env.BASE_URL}/chats`,
    element: <Chat />,
  },
  {
    path: `${import.meta.env.BASE_URL}/chat`,
    element: <ChatCon />,
  },
];
