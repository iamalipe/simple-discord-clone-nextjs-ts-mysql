"use client";

const Footer = () => {
  return (
    <>
      <footer className="dark:text-slate-300 w-full border-t flex-none overflow-auto text-xs flex flex-col md:flex-row items-center justify-between px-2 py-0.5 md:px-12 text-center">
        <span className="font-bold dark:text-slate-200">
          Simple Discord Clone
        </span>
        <span className="font-medium">
          This is a preview build. Go to{" "}
          <a className="font-bold cursor-pointer hover:underline dark:text-slate-200">
            Github
          </a>{" "}
          to learn more.
        </span>
      </footer>
    </>
  );
};
export default Footer;
