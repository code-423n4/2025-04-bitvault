export function Logo({
  size = 32,
}: {
  size?: number;
}) {
  return (
    <div>
      <svg
        fill="none"
        height={size}
        width={size}
        viewBox="0 0 32 32"
      >
        <path
          d="M31.097 10.687c-.295-.013-.593-.02-.891-.02-10.526 0-19.109 8.316-19.54 18.735V.91C4.453 3.107 0 9.034 0 16 0 7.163 7.163 0 16 0c6.974 0 12.906 4.462 15.097 10.687ZM10.667 31.09a15.456 15.456 0 0 0 .002 0l-.002-.045v.045Z"
          fill="#1C1D4F"
        />
        <path
          d="M16 32c8.837 0 16-7.163 16-16 0-1.862-.318-3.65-.903-5.313-.295-.013-.593-.02-.891-.02-10.8 0-19.556 8.756-19.556 19.556 0 .291.006.58.019.867 1.667.59 3.462.91 5.331.91Z"
          fill="#F5D93A"
        />
        <path
          d="M10.667 31.09C4.452 28.893 0 22.967 0 16h10.667v15.09Z"
          fill="#405AE5"
        />
        <path
          d="M0 16h10.667V.91C4.452 3.107 0 9.034 0 16Z"
          fill="#FB7C59"
        />
      </svg>
    </div>
  );
}
