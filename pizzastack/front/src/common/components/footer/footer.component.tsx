import { FooterLink } from "../footer-link/footer-link.component";

export const Footer = () => {
  return (
    <div
      className="
    bg-gray-900
    pt-12
    px-12
    pb-8
    "
    >
      <div>
        <div className="mb-4">
          <span className="uppercase text-zinc-500 font-bold text-sm">
            Контакти
          </span>
        </div>
        <div>
          <ul>
          <FooterLink href="tel:+380674708721">067 470 87 21</FooterLink>
          <FooterLink href="mailto:umanProger@ukr.net">umanProger@ukr.net</FooterLink>
          </ul>
        </div>
        <hr/>
      </div>
    </div>
  );
};
