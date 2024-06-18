import { Link } from "react-router-dom";
import quickMeds from "./assets/quickMeds.png";
import "@fontsource/plus-jakarta-sans";

const SideBar = () => {
  return (
    <>
      <div className="w-[297px] flex flex-col bg-white shadow-lg p-4 pb-[120px]">
        <div className="py-[56px]">
          <img src={quickMeds} alt="Logo" className="h-16 mx-auto" />
        </div>
        <div className="pl-7 pb-10 text-[20px]">
          <p className="text-gray-400 font-jakarta">Menu</p>
        </div>
        <nav className="sidebar space-y-4 pl-12 text-[20px] font-normal font-jakarta pb-24">
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4.68V8.56C10.9992 9.04324 10.8555 9.51544 10.587 9.91722C10.3185 10.319 9.9372 10.6324 9.49103 10.818C9.19583 10.9398 8.87936 11.0016 8.56003 11H4.68003C4.03463 10.9974 3.41658 10.7391 2.96115 10.2818C2.50572 9.82451 2.25002 9.2054 2.25003 8.56V4.69C2.25002 4.0446 2.50572 3.42549 2.96115 2.96819C3.41658 2.51088 4.03463 2.25265 4.68003 2.25H8.56003C9.20543 2.24999 9.82454 2.50569 10.2818 2.96112C10.7391 3.41655 10.9974 4.03461 11 4.68ZM21.75 4.69V8.56C21.7516 8.87944 21.6896 9.19601 21.5677 9.49129C21.4458 9.78657 21.2665 10.0547 21.04 10.28C20.8166 10.5097 20.5491 10.6919 20.2535 10.8156C19.958 10.9393 19.6404 11.0021 19.32 11H15.44C14.9579 10.9994 14.4867 10.8565 14.0854 10.5894C13.6841 10.3222 13.3706 9.94255 13.184 9.498C13.0604 9.20083 12.9978 8.88184 13 8.56V4.69C12.9987 4.36969 13.0618 4.05239 13.1855 3.75692C13.3091 3.46146 13.4909 3.19385 13.72 2.97C13.9449 2.74221 14.2127 2.56128 14.5079 2.43769C14.8031 2.3141 15.12 2.25031 15.44 2.25H19.32C19.9654 2.25265 20.5835 2.51088 21.0389 2.96819C21.4943 3.42549 21.75 4.0446 21.75 4.69ZM11 15.45V19.32C10.9974 19.9654 10.7391 20.5835 10.2818 21.0389C9.82454 21.4943 9.20543 21.75 8.56003 21.75H4.68003C4.03563 21.7487 3.41768 21.4937 2.96003 21.04C2.7336 20.8147 2.55422 20.5466 2.43233 20.2513C2.31044 19.956 2.24847 19.6394 2.25003 19.32V15.45C2.24847 15.1306 2.31044 14.814 2.43233 14.5187C2.55422 14.2234 2.7336 13.9553 2.96003 13.73C3.41565 13.2708 4.03322 13.0087 4.68003 13H8.56003C9.20726 13.0053 9.82634 13.2654 10.2831 13.724C10.7398 14.1826 10.9974 14.8028 11 15.45ZM21.75 17.38C21.7481 18.2434 21.4903 19.087 21.0094 19.8041C20.5284 20.5212 19.8458 21.0797 19.0477 21.4093C18.2496 21.7388 17.3718 21.8245 16.525 21.6555C15.6783 21.4866 14.9005 21.0706 14.29 20.46C13.6794 19.8495 13.2634 19.0718 13.0945 18.225C12.9256 17.3782 13.0113 16.5004 13.3408 15.7023C13.6703 14.9042 14.2288 14.2216 14.946 13.7406C15.6631 13.2597 16.5066 13.002 17.37 13C18.2365 13.0024 19.0829 13.2606 19.8032 13.7422C20.5236 14.2237 21.0856 14.9072 21.419 15.707C21.639 16.237 21.751 16.806 21.75 17.38Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Dashboard</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 21C9.07843 21 9.75 20.3284 9.75 19.5C9.75 18.6716 9.07843 18 8.25 18C7.42157 18 6.75 18.6716 6.75 19.5C6.75 20.3284 7.42157 21 8.25 21Z"
                  fill="black"
                />
                <path
                  d="M18.75 21C19.5784 21 20.25 20.3284 20.25 19.5C20.25 18.6716 19.5784 18 18.75 18C17.9216 18 17.25 18.6716 17.25 19.5C17.25 20.3284 17.9216 21 18.75 21Z"
                  fill="black"
                />
                <path
                  d="M21.4125 5.66156C21.3071 5.53268 21.1744 5.42888 21.0239 5.35769C20.8734 5.2865 20.709 5.24971 20.5425 5.25H6.27609L5.98875 3.61969C5.95811 3.44603 5.86726 3.28872 5.73216 3.17539C5.59706 3.06206 5.42634 2.99996 5.25 3H2.25C2.05109 3 1.86032 3.07902 1.71967 3.21967C1.57902 3.36032 1.5 3.55109 1.5 3.75C1.5 3.94891 1.57902 4.13968 1.71967 4.28033C1.86032 4.42098 2.05109 4.5 2.25 4.5H4.62094L6.76125 16.6303C6.79189 16.804 6.88274 16.9613 7.01784 17.0746C7.15294 17.1879 7.32366 17.25 7.5 17.25H19.5C19.6989 17.25 19.8897 17.171 20.0303 17.0303C20.171 16.8897 20.25 16.6989 20.25 16.5C20.25 16.3011 20.171 16.1103 20.0303 15.9697C19.8897 15.829 19.6989 15.75 19.5 15.75H8.12906L7.86469 14.25H19.1925C19.4526 14.2497 19.7046 14.1595 19.9058 13.9947C20.1071 13.8299 20.2452 13.6007 20.2969 13.3458L21.6469 6.59578C21.6794 6.43242 21.6753 6.26388 21.6347 6.10232C21.5942 5.94076 21.5183 5.79022 21.4125 5.66156Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Orders</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1230_9529)">
                  <path
                    d="M8.00006 10.7601H7.42006C6.62856 10.7315 5.83963 10.8659 5.10223 11.1549C4.36482 11.4439 3.69468 11.8813 3.13339 12.4401L2.97339 12.6268V18.1468H5.69339V15.0135L6.06006 14.6001L6.22672 14.4068C7.09467 13.5151 8.17524 12.859 9.36672 12.5001C8.77019 12.0462 8.29971 11.4472 8.00006 10.7601Z"
                    fill="black"
                  />
                  <path
                    d="M20.8933 12.4201C20.332 11.8613 19.6619 11.4239 18.9245 11.1349C18.1871 10.8459 17.3981 10.7115 16.6066 10.7401C16.3639 10.7408 16.1213 10.7541 15.88 10.7801C15.5747 11.4247 15.1171 11.9853 14.5466 12.4134C15.8186 12.7653 16.9709 13.4567 17.88 14.4134L18.0466 14.6001L18.4066 15.0134V18.1534H21.0333V12.6068L20.8933 12.4201Z"
                    fill="black"
                  />
                  <path
                    d="M7.40004 9.46011H7.6067C7.51068 8.63561 7.65535 7.80093 8.02326 7.05684C8.39116 6.31275 8.96658 5.69105 9.68004 5.26678C9.42141 4.87168 9.06461 4.55052 8.64458 4.33474C8.22454 4.11897 7.75566 4.01598 7.28386 4.03587C6.81206 4.05575 6.35351 4.19782 5.95312 4.44817C5.55272 4.69851 5.22421 5.04856 4.99974 5.46401C4.77527 5.87947 4.66255 6.3461 4.67262 6.81821C4.68268 7.29033 4.81518 7.75173 5.05714 8.15725C5.29911 8.56277 5.64224 8.89849 6.05293 9.13155C6.46363 9.36461 6.92782 9.48702 7.40004 9.48678V9.46011Z"
                    fill="black"
                  />
                  <path
                    d="M16.2867 8.96004C16.2948 9.11326 16.2948 9.26681 16.2867 9.42004C16.4146 9.44032 16.5438 9.45146 16.6734 9.45337H16.8C17.2702 9.4283 17.7258 9.28193 18.1226 9.02849C18.5194 8.77506 18.8438 8.4232 19.0642 8.00718C19.2846 7.59116 19.3936 7.12515 19.3804 6.65453C19.3673 6.1839 19.2325 5.72469 18.9893 5.32161C18.746 4.91853 18.4025 4.58531 17.9922 4.35439C17.5819 4.12347 17.1188 4.00273 16.648 4.00391C16.1772 4.0051 15.7147 4.12817 15.3056 4.36115C14.8964 4.59413 14.5546 4.92907 14.3134 5.33337C14.9167 5.72733 15.4129 6.26491 15.7573 6.89788C16.1017 7.53086 16.2836 8.23943 16.2867 8.96004Z"
                    fill="black"
                  />
                  <path
                    d="M11.9134 11.9466C13.5592 11.9466 14.8934 10.6124 14.8934 8.96657C14.8934 7.32076 13.5592 5.98657 11.9134 5.98657C10.2675 5.98657 8.93335 7.32076 8.93335 8.96657C8.93335 10.6124 10.2675 11.9466 11.9134 11.9466Z"
                    fill="black"
                  />
                  <path
                    d="M12.0733 13.5333C11.2027 13.4982 10.3339 13.6395 9.51932 13.9489C8.70473 14.2582 7.96114 14.7291 7.33329 15.3333L7.16663 15.52V19.74C7.16923 19.8774 7.19888 20.013 7.2539 20.139C7.30892 20.265 7.38822 20.379 7.48727 20.4743C7.58633 20.5696 7.7032 20.6445 7.8312 20.6947C7.9592 20.7449 8.09584 20.7693 8.23329 20.7667H15.8933C16.0308 20.7693 16.1674 20.7449 16.2954 20.6947C16.4234 20.6445 16.5403 20.5696 16.6393 20.4743C16.7384 20.379 16.8177 20.265 16.8727 20.139C16.9277 20.013 16.9574 19.8774 16.96 19.74V15.5333L16.8 15.3333C16.1762 14.7273 15.4352 14.255 14.6224 13.9455C13.8096 13.636 12.9422 13.4957 12.0733 13.5333Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1230_9529">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <span>Users</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2551 0.5H3.38217C2.10622 0.5 1.33675 1.55495 1.05435 2.69472L0.0802298 6.62308C-0.544954 9.14618 2.62497 9.90477 4.6826 9.33091C5.82146 9.01352 6.82421 8.21208 6.81805 7.05534C6.81396 6.25988 8.06229 6.25391 8.06229 7.05534C8.06229 10.6434 15.5738 10.6434 15.5738 7.05534H15.5759C15.5759 6.28385 16.7853 6.22894 16.816 7.05534H16.8181C16.8058 8.2061 17.8157 9.01454 18.9535 9.33091C21.0112 9.9038 24.1822 9.14626 23.5559 6.62308L22.5818 2.69472C22.2994 1.55495 21.53 0.5 20.2551 0.5ZM14.1987 20.499L14.1895 14.9658L9.44694 14.9668L9.43978 20.498L14.1987 20.499ZM8.19541 20.499H3.97365C2.88904 20.499 2.01008 19.6347 2.01008 18.5797V10.6004C3.87235 10.9776 6.24101 10.5195 7.39619 9.00049C9.16534 11.6094 14.4708 11.6094 16.24 9.00049C17.3952 10.5195 19.765 10.9786 21.6261 10.6004V18.5797C21.6261 19.6357 20.7471 20.499 19.6625 20.499L15.4428 20.5V14.9888C15.4428 14.6465 15.2986 14.3361 15.0673 14.1105L15.0683 14.1095C14.8371 13.8839 14.5178 13.7442 14.1669 13.7442H9.47127C8.77138 13.7442 8.19531 14.3061 8.19531 14.9888L8.19541 20.499Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Vendors</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.75 1.37496H7.875C8.08212 1.37496 8.25 1.54284 8.25 1.74996V8.87496C8.25 9.08207 8.08212 9.24996 7.875 9.24996H0.75C0.542883 9.24996 0.375 9.08207 0.375 8.87496V1.74996C0.375 1.54284 0.542883 1.37496 0.75 1.37496ZM13.9761 0.781215L18.2187 5.02387C18.3652 5.17031 18.3652 5.40773 18.2187 5.55419L13.9761 9.79682C13.8296 9.94326 13.5922 9.94326 13.4458 9.79682L9.20313 5.55417C9.05669 5.40773 9.05669 5.17031 9.20313 5.02385L13.4458 0.781215C13.5922 0.634777 13.8296 0.634777 13.9761 0.781215ZM0.75 10.75H7.875C8.08212 10.75 8.25 10.9178 8.25 11.125V18.25C8.25 18.4571 8.08212 18.625 7.875 18.625H0.75C0.542883 18.625 0.375 18.4571 0.375 18.25V11.125C0.375 10.9178 0.542883 10.75 0.75 10.75ZM10.125 10.75H17.25C17.4571 10.75 17.625 10.9178 17.625 11.125V18.25C17.625 18.4571 17.4571 18.625 17.25 18.625H10.125C9.91788 18.625 9.75 18.4571 9.75 18.25V11.125C9.75 10.9178 9.91788 10.75 10.125 10.75Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Products</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 18C11.7775 18 11.56 17.934 11.375 17.8104C11.19 17.6868 11.0458 17.5111 10.9606 17.3055C10.8755 17.1 10.8532 16.8738 10.8966 16.6555C10.94 16.4373 11.0472 16.2368 11.2045 16.0795C11.3618 15.9222 11.5623 15.815 11.7805 15.7716C11.9988 15.7282 12.225 15.7505 12.4305 15.8356C12.6361 15.9208 12.8118 16.065 12.9354 16.25C13.059 16.435 13.125 16.6525 13.125 16.875C13.125 17.1734 13.0065 17.4595 12.7955 17.6705C12.5845 17.8815 12.2984 18 12 18ZM12.75 13.4325V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V12.75C11.25 12.5511 11.329 12.3603 11.4697 12.2197C11.6103 12.079 11.8011 12 12 12C13.2403 12 14.25 11.1562 14.25 10.125C14.25 9.09375 13.2403 8.25 12 8.25C10.7597 8.25 9.75 9.09375 9.75 10.125V10.5C9.75 10.6989 9.67099 10.8897 9.53033 11.0303C9.38968 11.171 9.19892 11.25 9 11.25C8.80109 11.25 8.61033 11.171 8.46967 11.0303C8.32902 10.8897 8.25 10.6989 8.25 10.5V10.125C8.25 8.26406 9.93188 6.75 12 6.75C14.0681 6.75 15.75 8.26406 15.75 10.125C15.75 11.7544 14.46 13.1184 12.75 13.4325Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Questions</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i></i>
            <span>Requests</span>
          </Link>
          <Link
            to={"/adminorders"}
            className="text-gray-400 flex items-center space-x-2"
          >
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.50006 20.0001C5.89788 20.0001 6.27941 20.1581 6.56072 20.4394C6.84202 20.7207 7.00006 21.1023 7.00006 21.5001C7.00006 21.8979 6.84202 22.2794 6.56072 22.5607C6.27941 22.842 5.89788 23.0001 5.50006 23.0001C5.10223 23.0001 4.7207 22.842 4.4394 22.5607C4.15809 22.2794 4.00006 21.8979 4.00006 21.5001C4.00006 21.1023 4.15809 20.7207 4.4394 20.4394C4.7207 20.1581 5.10223 20.0001 5.50006 20.0001ZM18.5001 20.0001C18.8979 20.0001 19.2794 20.1581 19.5607 20.4394C19.842 20.7207 20.0001 21.1023 20.0001 21.5001C20.0001 21.8979 19.842 22.2794 19.5607 22.5607C19.2794 22.842 18.8979 23.0001 18.5001 23.0001C18.1022 23.0001 17.7207 22.842 17.4394 22.5607C17.1581 22.2794 17.0001 21.8979 17.0001 21.5001C17.0001 21.1023 17.1581 20.7207 17.4394 20.4394C17.7207 20.1581 18.1022 20.0001 18.5001 20.0001ZM2.17206 1.75708L6.00006 5.58508V17.0001H20.0001V19.0001H5.00006C4.73484 19.0001 4.48049 18.8947 4.29295 18.7072C4.10541 18.5197 4.00006 18.2653 4.00006 18.0001V6.41308L0.758057 3.17208L2.17206 1.75708ZM16.0001 3.00008C16.2653 3.00008 16.5196 3.10544 16.7072 3.29297C16.8947 3.48051 17.0001 3.73486 17.0001 4.00008V6.00008H19.9941C20.5501 6.00008 21.0001 6.45608 21.0001 6.99508V15.0051C20.9994 15.1365 20.9729 15.2665 20.9219 15.3876C20.871 15.5088 20.7967 15.6187 20.7033 15.7111C20.6098 15.8035 20.4991 15.8766 20.3774 15.9262C20.2557 15.9758 20.1255 16.0009 19.9941 16.0001H8.00706C7.74213 15.9998 7.48795 15.8953 7.29949 15.7091C7.11104 15.5229 7.00347 15.27 7.00006 15.0051V6.99508C7.00071 6.86359 7.02729 6.73352 7.07828 6.61231C7.12926 6.4911 7.20365 6.38114 7.29719 6.28872C7.39072 6.1963 7.50157 6.12324 7.62338 6.07371C7.74519 6.02418 7.87557 5.99916 8.00706 6.00008H11.0001V4.00008C11.0001 3.73486 11.1054 3.48051 11.2929 3.29297C11.4805 3.10544 11.7348 3.00008 12.0001 3.00008H16.0001ZM11.0001 8.00008H10.0001V14.0001H11.0001V8.00008ZM18.0001 8.00008H17.0001V14.0001H18.0001V8.00008ZM15.0001 5.00008H13.0001V6.00008H15.0001V5.00008Z"
                  fill="#15A8A0"
                />
              </svg>
            </i>
            <span>Admin Orders</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.425 7.47506L8.15 1.40006C8.25 1.23339 8.375 1.11239 8.525 1.03706C8.675 0.961724 8.83333 0.924391 9 0.925058C9.16667 0.925058 9.325 0.962724 9.475 1.03806C9.625 1.11339 9.75 1.23406 9.85 1.40006L13.575 7.47506C13.675 7.64172 13.725 7.81672 13.725 8.00006C13.725 8.18339 13.6833 8.35006 13.6 8.50006C13.5167 8.65006 13.4 8.77106 13.25 8.86306C13.1 8.95506 12.925 9.00072 12.725 9.00006H5.275C5.075 9.00006 4.9 8.95439 4.75 8.86306C4.6 8.77172 4.48333 8.65072 4.4 8.50006C4.31667 8.35006 4.275 8.18339 4.275 8.00006C4.275 7.81672 4.325 7.64172 4.425 7.47506ZM14.5 20.0001C13.25 20.0001 12.1877 19.5627 11.313 18.6881C10.4383 17.8134 10.0007 16.7507 10 15.5001C10 14.2501 10.4377 13.1877 11.313 12.3131C12.1883 11.4384 13.2507 11.0007 14.5 11.0001C15.75 11.0001 16.8127 11.4377 17.688 12.3131C18.5633 13.1884 19.0007 14.2507 19 15.5001C19 16.7501 18.5627 17.8127 17.688 18.6881C16.8133 19.5634 15.7507 20.0007 14.5 20.0001ZM0 18.5001V12.5001C0 12.2167 0.0960001 11.9794 0.288 11.7881C0.48 11.5967 0.717333 11.5007 1 11.5001H7C7.28333 11.5001 7.521 11.5961 7.713 11.7881C7.905 11.9801 8.00067 12.2174 8 12.5001V18.5001C8 18.7834 7.904 19.0211 7.712 19.2131C7.52 19.4051 7.28267 19.5007 7 19.5001H1C0.716667 19.5001 0.479333 19.4041 0.288 19.2121C0.0966668 19.0201 0.000666667 18.7827 0 18.5001Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Category</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.317 0.697664L8.50899 2.50406C8.36299 2.65011 8.16509 2.73238 7.95859 2.73286H5.11379C3.79859 2.73286 2.73299 3.79846 2.73299 5.11366V7.95846C2.73258 8.16545 2.65033 8.36388 2.50419 8.51046L0.696186 10.3169C0.249871 10.7633 -0.000854492 11.3688 -0.000854492 12.0001C-0.000854492 12.6314 0.249871 13.2368 0.696186 13.6833L2.50419 15.4913C2.65024 15.6373 2.7325 15.8352 2.73299 16.0417V18.8865C2.73299 20.2017 3.79859 21.2673 5.11379 21.2673H7.95859C8.16558 21.2677 8.364 21.3499 8.51059 21.4961L10.317 23.3041C10.7634 23.7504 11.3689 24.0011 12.0002 24.0011C12.6315 24.0011 13.2369 23.7504 13.6834 23.3041L15.4914 21.4961C15.6374 21.35 15.8353 21.2677 16.0418 21.2673H18.8866C20.2018 21.2673 21.2674 20.2017 21.2674 18.8865V16.0417C21.2678 15.8347 21.35 15.6362 21.4962 15.4897L23.3042 13.6833C23.7505 13.2368 24.0012 12.6314 24.0012 12.0001C24.0012 11.3688 23.7505 10.7633 23.3042 10.3169L21.4962 8.50886C21.3501 8.36287 21.2679 8.16497 21.2674 7.95846V5.11366C21.2674 3.79846 20.2018 2.73286 18.8866 2.73286H16.0418C15.8347 2.73281 15.6362 2.65051 15.4898 2.50406L13.6834 0.696064C13.2369 0.249748 12.6315 -0.000976563 12.0002 -0.000976562C11.3689 -0.000976563 10.7634 0.251348 10.317 0.697664ZM7.43379 15.4321L15.4338 7.43206L16.5666 8.56486L8.56659 16.5649L7.43379 15.4321ZM8.00019 8.00006V9.60006H9.60019V8.00006H8.00019ZM14.4002 16.0001H16.0002V14.4001H14.4002V16.0001Z"
                  fill="black"
                />
              </svg>
            </i>{" "}
            <span>Discounts</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.375 0H1.625C1.32663 0 1.04048 0.118526 0.829505 0.329505C0.618526 0.540483 0.5 0.826631 0.5 1.125V16.875C0.5 17.1734 0.618526 17.4595 0.829505 17.6705C1.04048 17.8815 1.32663 18 1.625 18H20.375C20.6734 18 20.9595 17.8815 21.1705 17.6705C21.3815 17.4595 21.5 17.1734 21.5 16.875V1.125C21.5 0.826631 21.3815 0.540483 21.1705 0.329505C20.9595 0.118526 20.6734 0 20.375 0ZM14.5447 3.00937C15.0053 2.96717 15.4677 3.06795 15.869 3.29798C16.2703 3.52801 16.5909 3.87612 16.7872 4.29491C16.9836 4.71371 17.0461 5.18284 16.9662 5.63842C16.8864 6.09401 16.668 6.51392 16.341 6.84098C16.0139 7.16804 15.594 7.38636 15.1384 7.46621C14.6828 7.54606 14.2137 7.48356 13.7949 7.28722C13.3761 7.09089 13.028 6.77026 12.798 6.36898C12.5679 5.96771 12.4672 5.50529 12.5094 5.04469C12.5574 4.52107 12.7872 4.0308 13.159 3.659C13.5308 3.2872 14.0211 3.05735 14.5447 3.00937ZM2.5625 16.5C2.41332 16.5 2.27024 16.4407 2.16475 16.3352C2.05926 16.2298 2 16.0867 2 15.9375V11.8298L8.03 6.46875L12.5745 11.0039L7.07984 16.5H2.5625ZM20 15.9375C20 16.0867 19.9407 16.2298 19.8352 16.3352C19.7298 16.4407 19.5867 16.5 19.4375 16.5H9.20141L16.2106 9.49078L20 12.6488V15.9375Z"
                  fill="black"
                />
              </svg>
            </i>{" "}
            <span>Banners</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8597 16.4223C11.7155 17.6862 9.06697 17.7383 6.87471 16.5598C4.89081 15.4756 4.16008 15.1848 3.32722 15.1416C3.19939 15.1409 3.07921 15.2025 3.00509 15.3066L2.08973 16.5716C1.48464 17.4086 1.40008 18.5143 1.87093 19.4335C2.34174 20.3528 3.28834 20.9302 4.32117 20.9284H12.1704C13.1416 20.937 14.0422 20.4221 14.5275 19.5809V16.7641C14.4832 16.6881 14.4347 16.6147 14.3822 16.5441C14.2672 16.3724 14.0388 16.3192 13.8597 16.4223Z"
                  fill="black"
                />
                <path
                  d="M5.49203 2.07141H10.992C11.426 2.07141 11.7778 1.71962 11.7778 1.28568C11.7778 0.851742 11.426 0.5 10.992 0.5H5.49203C5.05808 0.5 4.7063 0.851785 4.7063 1.28573C4.7063 1.71967 5.05808 2.07141 5.49203 2.07141Z"
                  fill="black"
                />
                <path
                  d="M18.4561 10.3215C18.8901 10.3215 19.2419 9.96967 19.2419 9.53573C19.2419 9.10178 18.8901 8.75 18.4561 8.75C18.0222 8.75 17.6704 9.10178 17.6704 9.53573C17.6704 9.96967 18.0222 10.3215 18.4561 10.3215Z"
                  fill="black"
                />
                <path
                  d="M9.81319 14.6427C10.2471 14.6427 10.5989 14.291 10.5989 13.857C10.5989 13.4231 10.2471 13.0713 9.81319 13.0713C9.37925 13.0713 9.02747 13.4231 9.02747 13.857C9.02747 14.291 9.37925 14.6427 9.81319 14.6427Z"
                  fill="black"
                />
                <path
                  d="M7.84916 10.7142C8.06613 10.7142 8.24203 10.5383 8.24203 10.3213C8.24203 10.1044 8.06613 9.92847 7.84916 9.92847C7.63219 9.92847 7.4563 10.1044 7.4563 10.3213C7.4563 10.5383 7.63219 10.7142 7.84916 10.7142Z"
                  fill="black"
                />
                <path
                  d="M12.1704 21.7142H4.32117C2.99306 21.7149 1.77662 20.9712 1.17175 19.7888C0.566879 18.6065 0.675633 17.1848 1.45332 16.1082L2.36868 14.8432C2.59891 14.5221 2.9757 14.3389 3.37045 14.3561C4.41154 14.4111 5.29153 14.8 7.25185 15.8686C9.20619 16.916 11.5656 16.8668 13.4747 15.7389C13.7978 15.5571 14.1873 15.5368 14.5275 15.6839V14.1243L11.3454 9.91292C10.8627 9.24063 10.6018 8.4345 10.599 7.60684V2.85718H5.88471V7.6068C5.88265 8.43149 5.62308 9.235 5.14222 9.90501L0.81296 15.6525C-0.133466 16.9691 -0.263703 18.7046 0.475657 20.1477C1.21502 21.5909 2.69967 22.499 4.32117 22.5H12.1704C13.1996 22.5062 14.1962 22.1391 14.9754 21.4667C14.8397 21.222 14.7328 20.9622 14.6572 20.6928C13.9991 21.3535 13.1029 21.7216 12.1704 21.7142ZM11.3847 13.8571C11.3847 14.725 10.6811 15.4285 9.81329 15.4285C8.94545 15.4285 8.24188 14.725 8.24188 13.8571C8.24188 12.9893 8.94545 12.2857 9.81329 12.2857C10.6811 12.2857 11.3847 12.9893 11.3847 13.8571ZM9.02757 7.17861C9.24451 7.17861 9.42043 7.35449 9.42043 7.57148C9.42043 7.78842 9.24456 7.96434 9.02757 7.96434C8.81062 7.96434 8.6347 7.78847 8.6347 7.57148C8.6347 7.35449 8.81062 7.17861 9.02757 7.17861ZM7.84902 9.14288C8.49991 9.14288 9.02761 9.67053 9.02761 10.3215C9.02761 10.9724 8.49995 11.5001 7.84902 11.5001C7.19813 11.5001 6.67044 10.9724 6.67044 10.3215C6.67237 9.67135 7.19891 9.14481 7.84902 9.14288ZM6.67044 12.2857C6.88739 12.2857 7.0633 12.4616 7.0633 12.6786C7.0633 12.8955 6.88743 13.0715 6.67044 13.0715C6.45349 13.0715 6.27758 12.8956 6.27758 12.6786C6.27758 12.4616 6.45349 12.2857 6.67044 12.2857Z"
                  fill="black"
                />
                <path
                  d="M15.3132 19.75C15.3132 21.2687 16.5445 22.5 18.0632 22.5C19.582 22.5 20.8132 21.2687 20.8132 19.75V2.85718H15.3132V19.75ZM19.6346 6.39289C19.8516 6.39289 20.0275 6.56876 20.0275 6.78575C20.0275 7.00274 19.8516 7.17861 19.6346 7.17861C19.4177 7.17861 19.2418 7.00274 19.2418 6.78575C19.2418 6.56876 19.4177 6.39289 19.6346 6.39289ZM20.0275 9.53574C20.0275 10.4036 19.3239 11.1071 18.4561 11.1071C17.5882 11.1071 16.8847 10.4036 16.8847 9.53574C16.8847 8.6679 17.5882 7.96434 18.4561 7.96434C19.324 7.96429 20.0275 8.66786 20.0275 9.53574ZM17.2775 4.03576C17.9284 4.03576 18.4561 4.56342 18.4561 5.21435C18.4561 5.86528 17.9284 6.39293 17.2775 6.39293C16.6266 6.39293 16.0989 5.86528 16.0989 5.21435C16.1009 4.56423 16.6274 4.0377 17.2775 4.03576ZM16.099 12.2857C16.099 12.0688 16.2748 11.8929 16.4918 11.8929H19.6347C19.8516 11.8929 20.0275 12.0687 20.0275 12.2857V19.75C20.0275 20.8348 19.1481 21.7142 18.0633 21.7142C16.9784 21.7142 16.099 20.8348 16.099 19.75V12.2857Z"
                  fill="black"
                />
                <path
                  d="M18.0632 20.9285C18.7133 20.9265 19.2398 20.4 19.2418 19.7499V12.6785H16.8846V19.7499C16.8866 20.4 17.4131 20.9265 18.0632 20.9285Z"
                  fill="black"
                />
                <path
                  d="M21.2061 0.5H14.9204C14.4864 0.5 14.1346 0.851785 14.1346 1.28573C14.1346 1.71967 14.4864 2.07145 14.9204 2.07145H21.2061C21.64 2.07145 21.9918 1.71967 21.9918 1.28573C21.9918 0.851785 21.64 0.5 21.2061 0.5Z"
                  fill="black"
                />
                <path
                  d="M17.2775 5.60702C17.4945 5.60702 17.6704 5.43112 17.6704 5.21415C17.6704 4.99718 17.4945 4.82129 17.2775 4.82129C17.0605 4.82129 16.8846 4.99718 16.8846 5.21415C16.8846 5.43112 17.0605 5.60702 17.2775 5.60702Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Lab Tests</span>
          </Link>
          <Link to={"/"} className="text-gray-400 flex items-center space-x-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1230_9590)">
                  <path
                    d="M12.0001 2C10.1435 2 8.36306 2.7375 7.0503 4.05025C5.73755 5.36301 5.00005 7.14348 5.00005 9V12.528C5.0002 12.6831 4.96425 12.8362 4.89505 12.975L3.17805 16.408C3.09418 16.5757 3.05457 16.7621 3.063 16.9494C3.07143 17.1368 3.1276 17.3188 3.2262 17.4783C3.32479 17.6379 3.46252 17.7695 3.62632 17.8608C3.79011 17.9521 3.97453 18 4.16205 18H19.8381C20.0256 18 20.21 17.9521 20.3738 17.8608C20.5376 17.7695 20.6753 17.6379 20.7739 17.4783C20.8725 17.3188 20.9287 17.1368 20.9371 16.9494C20.9455 16.7621 20.9059 16.5757 20.8221 16.408L19.1061 12.975C19.0365 12.8362 19.0002 12.6832 19.0001 12.528V9C19.0001 7.14348 18.2626 5.36301 16.9498 4.05025C15.637 2.7375 13.8566 2 12.0001 2ZM12.0001 21C11.3794 21.0002 10.774 20.8079 10.2672 20.4498C9.76037 20.0916 9.37706 19.5851 9.17005 19H14.8301C14.623 19.5851 14.2397 20.0916 13.7329 20.4498C13.2261 20.8079 12.6207 21.0002 12.0001 21Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1230_9590">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>{" "}
            <span>Push Notification</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
