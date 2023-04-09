import clsx from "clsx";

// export function Container({ className, ...props }) {
//   return (
//     <div
//       className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
//       {...props}
//     />
//   );
// }

export function Container({ className: string, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
