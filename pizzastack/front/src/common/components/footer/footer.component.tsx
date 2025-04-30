import { FooterLink } from "../footer-link/footer-link.component";

export const Footer = () => {
  return (
    <div
      className="
    bg-gray-900
    p-12
    "
    >
      <div>
        <div className="mb-4">
          <span className="uppercase text-zinc-500 font-bold text-sm">
            Контакти
          </span>
        </div>
        <div className="mb-8">
          <ul>
          <FooterLink href="tel:+380674708721">067 470 87 21</FooterLink>
          <FooterLink href="mailto:umanProger@ukr.net">umanProger@ukr.net</FooterLink>
          </ul>
        </div>
        <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8"/>
        <span className="text-xl text-white font-semibold">🍕 PizzaStack</span>
      </div>
    </div>
  );
};
