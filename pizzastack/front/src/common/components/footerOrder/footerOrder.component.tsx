import { FooterLink } from "../footer-link/footer-link.component";
import { FooterName } from "../footer-name/footer-name.component";

export const FooterOrder = () => {
  return (
    <footer className="bg-gray-900 p-8">
      <div>
        <h2 className="mb-1 uppercase text-zinc-500 font-bold text-sm">
          Контакти
        </h2>
        <address className="not-italic mb-8 text-white">
          <ul>
            <li>
              <FooterLink href="tel:+380674708721">067 470 87 21</FooterLink>
            </li>
            <li>
              <FooterLink href="mailto:umanProger@ukr.net">
                umanProger@ukr.net
              </FooterLink>
            </li>
          </ul>
        </address>
        <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500" />
        <div className="flex items-center justify-center mt-8">
          <FooterName href="mailto:umanProger@ukr.net">🌍 UmanProger</FooterName>
        </div>
      </div>
    </footer>
  );
};
