import Link from "next/link";

export default function AppHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[94px] px-[100px] flex justify-between items-center z-[99]">
      <div>
        <img src="/logo.svg" />
      </div>

      <Link
        href="/demo"
        className="flex items-center px-3 h-9 text-white hover:text-[#EA3206] border-2 border-white/50 hover:border-white/60 cursor-pointer"
        style={{ borderRadius: "10px" }}
      >
        <svg
          width="78"
          height="12"
          viewBox="0 0 78 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.48 0.799988H7.968C11.44 0.799988 12.864 2.19199 12.864 5.31199V7.48799C12.864 10.608 11.44 12 7.968 12H0.48C0.16 12 0 11.84 0 11.52V1.27999C0 0.959988 0.16 0.799988 0.48 0.799988ZM2.448 3.24799V9.56799C2.448 9.71199 2.512 9.77599 2.656 9.77599H7.904C9.792 9.77599 10.416 9.16799 10.416 7.27999V5.51999C10.416 3.63199 9.792 3.02399 7.904 3.02399H2.656C2.512 3.02399 2.448 3.08799 2.448 3.24799Z"
            fill="currentColor"
          />
          <path
            d="M18.2674 3.21599H22.9554C25.1474 3.21599 25.7234 3.90399 25.7234 5.83999V7.35999C25.7234 8.04799 25.4354 8.27199 24.8114 8.27199H16.7314V8.65599C16.7314 9.66399 17.0994 10.08 18.4914 10.08H25.1634C25.3554 10.08 25.4514 10.176 25.4514 10.368V11.712C25.4514 11.904 25.3554 12 25.1634 12H18.2674C15.3874 12 14.4594 11.088 14.4594 8.76799V6.46399C14.4594 4.14399 15.3874 3.21599 18.2674 3.21599ZM16.7314 6.41599V6.84799H23.2114C23.4034 6.84799 23.4834 6.78399 23.4834 6.57599V5.90399C23.4834 5.24799 23.2434 4.99199 22.5074 4.99199H18.4914C17.0994 4.99199 16.7314 5.39199 16.7314 6.41599Z"
            fill="currentColor"
          />
          <path
            d="M31.1964 3.21599H39.3724C42.2524 3.21599 43.1644 4.14399 43.1644 6.46399V11.648C43.1644 11.888 43.0524 12 42.8124 12H41.2444C41.0044 12 40.8924 11.888 40.8924 11.648V7.00799C40.8924 5.66399 40.6364 5.24799 39.2444 5.24799H36.4284V11.648C36.4284 11.888 36.3004 12 36.0604 12H34.4924C34.2524 12 34.1404 11.888 34.1404 11.648V5.24799H31.4204C30.0444 5.24799 29.6764 5.66399 29.6764 7.00799V11.648C29.6764 11.888 29.5644 12 29.3244 12H27.7564C27.5164 12 27.3884 11.888 27.3884 11.648V6.46399C27.3884 4.14399 28.3164 3.21599 31.1964 3.21599Z"
            fill="currentColor"
          />
          <path
            d="M48.8191 3.21599H53.3471C56.2271 3.21599 57.1551 4.14399 57.1551 6.46399V8.76799C57.1551 11.088 56.2271 12 53.3471 12H48.8191C45.9391 12 45.0111 11.088 45.0111 8.76799V6.46399C45.0111 4.14399 45.9391 3.21599 48.8191 3.21599ZM47.2991 6.84799V8.36799C47.2991 9.71199 47.6671 10.128 49.0431 10.128H53.1231C54.5151 10.128 54.8831 9.71199 54.8831 8.36799V6.84799C54.8831 5.50399 54.5151 5.10399 53.1231 5.10399H49.0431C47.6671 5.10399 47.2991 5.50399 47.2991 6.84799Z"
            fill="currentColor"
          />
          <path
            d="M78 7.5L71.25 11.3971L71.25 3.60289L78 7.5Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
}