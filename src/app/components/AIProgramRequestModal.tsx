import { useEffect, useState, type FormEvent } from "react";
import { ArrowDownToLine, Check, MessageCircle, X } from "lucide-react";

type RequestMode = "register" | "brochure";

const AI_REGISTRATION_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby5zf1eiijJCQwnZHwUkKnEZ_v7HfFPrKvXTGRpBctHCoh2gqlskq618QEvefBss37k/exec";

const countryCodes = `Afghanistan|93|AF
Albania|355|AL
Algeria|213|DZ
American Samoa|1684|AS
Andorra|376|AD
Angola|244|AO
Anguilla|1264|AI
Antigua and Barbuda|1268|AG
Argentina|54|AR
Armenia|374|AM
Aruba|297|AW
Australia|61|AU
Austria|43|AT
Azerbaijan|994|AZ
Bahamas|1242|BS
Bahrain|973|BH
Bangladesh|880|BD
Barbados|1246|BB
Belarus|375|BY
Belgium|32|BE
Belize|501|BZ
Benin|229|BJ
Bermuda|1441|BM
Bhutan|975|BT
Bolivia|591|BO
Bosnia and Herzegovina|387|BA
Botswana|267|BW
Brazil|55|BR
British Indian Ocean Territory|246|IO
British Virgin Islands|1284|VG
Brunei|673|BN
Bulgaria|359|BG
Burkina Faso|226|BF
Burundi|257|BI
Cambodia|855|KH
Cameroon|237|CM
Canada|1|CA
Cape Verde|238|CV
Cayman Islands|1345|KY
Central African Republic|236|CF
Chad|235|TD
Chile|56|CL
China|86|CN
Christmas Island|61|CX
Cocos Islands|61|CC
Colombia|57|CO
Comoros|269|KM
Congo|242|CG
Congo (DRC)|243|CD
Cook Islands|682|CK
Costa Rica|506|CR
Croatia|385|HR
Cuba|53|CU
Curacao|599|CW
Cyprus|357|CY
Czechia|420|CZ
Denmark|45|DK
Djibouti|253|DJ
Dominica|1767|DM
Dominican Republic|1809|DO
Ecuador|593|EC
Egypt|20|EG
El Salvador|503|SV
Equatorial Guinea|240|GQ
Eritrea|291|ER
Estonia|372|EE
Eswatini|268|SZ
Ethiopia|251|ET
Falkland Islands|500|FK
Faroe Islands|298|FO
Fiji|679|FJ
Finland|358|FI
France|33|FR
French Guiana|594|GF
French Polynesia|689|PF
Gabon|241|GA
Gambia|220|GM
Georgia|995|GE
Germany|49|DE
Ghana|233|GH
Gibraltar|350|GI
Greece|30|GR
Greenland|299|GL
Grenada|1473|GD
Guadeloupe|590|GP
Guam|1671|GU
Guatemala|502|GT
Guernsey|44|GG
Guinea|224|GN
Guinea-Bissau|245|GW
Guyana|592|GY
Haiti|509|HT
Honduras|504|HN
Hong Kong|852|HK
Hungary|36|HU
Iceland|354|IS
India|91|IN
Indonesia|62|ID
Iran|98|IR
Iraq|964|IQ
Ireland|353|IE
Isle of Man|44|IM
Israel|972|IL
Italy|39|IT
Ivory Coast|225|CI
Jamaica|1876|JM
Japan|81|JP
Jersey|44|JE
Jordan|962|JO
Kazakhstan|7|KZ
Kenya|254|KE
Kiribati|686|KI
Kosovo|383|XK
Kuwait|965|KW
Kyrgyzstan|996|KG
Laos|856|LA
Latvia|371|LV
Lebanon|961|LB
Lesotho|266|LS
Liberia|231|LR
Libya|218|LY
Liechtenstein|423|LI
Lithuania|370|LT
Luxembourg|352|LU
Macao|853|MO
Madagascar|261|MG
Malawi|265|MW
Malaysia|60|MY
Maldives|960|MV
Mali|223|ML
Malta|356|MT
Marshall Islands|692|MH
Martinique|596|MQ
Mauritania|222|MR
Mauritius|230|MU
Mayotte|262|YT
Mexico|52|MX
Micronesia|691|FM
Moldova|373|MD
Monaco|377|MC
Mongolia|976|MN
Montenegro|382|ME
Montserrat|1664|MS
Morocco|212|MA
Mozambique|258|MZ
Myanmar|95|MM
Namibia|264|NA
Nauru|674|NR
Nepal|977|NP
Netherlands|31|NL
New Caledonia|687|NC
New Zealand|64|NZ
Nicaragua|505|NI
Niger|227|NE
Nigeria|234|NG
Niue|683|NU
Norfolk Island|672|NF
North Korea|850|KP
North Macedonia|389|MK
Northern Mariana Islands|1670|MP
Norway|47|NO
Oman|968|OM
Pakistan|92|PK
Palau|680|PW
Palestine|970|PS
Panama|507|PA
Papua New Guinea|675|PG
Paraguay|595|PY
Peru|51|PE
Philippines|63|PH
Poland|48|PL
Portugal|351|PT
Puerto Rico|1787|PR
Qatar|974|QA
Reunion|262|RE
Romania|40|RO
Russia|7|RU
Rwanda|250|RW
Saint Barthelemy|590|BL
Saint Helena|290|SH
Saint Kitts and Nevis|1869|KN
Saint Lucia|1758|LC
Saint Martin|590|MF
Saint Pierre and Miquelon|508|PM
Saint Vincent and the Grenadines|1784|VC
Samoa|685|WS
San Marino|378|SM
Sao Tome and Principe|239|ST
Saudi Arabia|966|SA
Senegal|221|SN
Serbia|381|RS
Seychelles|248|SC
Sierra Leone|232|SL
Singapore|65|SG
Sint Maarten|1721|SX
Slovakia|421|SK
Slovenia|386|SI
Solomon Islands|677|SB
Somalia|252|SO
South Africa|27|ZA
South Korea|82|KR
South Sudan|211|SS
Spain|34|ES
Sri Lanka|94|LK
Sudan|249|SD
Suriname|597|SR
Svalbard and Jan Mayen|47|SJ
Sweden|46|SE
Switzerland|41|CH
Syria|963|SY
Taiwan|886|TW
Tajikistan|992|TJ
Tanzania|255|TZ
Thailand|66|TH
Timor-Leste|670|TL
Togo|228|TG
Tokelau|690|TK
Tonga|676|TO
Trinidad and Tobago|1868|TT
Tunisia|216|TN
Turkey|90|TR
Turkmenistan|993|TM
Turks and Caicos Islands|1649|TC
Tuvalu|688|TV
U.S. Virgin Islands|1340|VI
Uganda|256|UG
Ukraine|380|UA
United Arab Emirates|971|AE
United Kingdom|44|GB
United States|1|US
Uruguay|598|UY
Uzbekistan|998|UZ
Vanuatu|678|VU
Vatican City|39|VA
Venezuela|58|VE
Vietnam|84|VN
Wallis and Futuna|681|WF
Western Sahara|212|EH
Yemen|967|YE
Zambia|260|ZM
Zimbabwe|263|ZW`;

const countries = countryCodes.split("\n").map((row) => {
  const [name, dialCode, iso] = row.split("|");
  return { name, dialCode, iso };
}).sort((a, b) => a.name.localeCompare(b.name));

interface AIProgramRequestModalProps {
  mode: RequestMode;
  onClose: () => void;
}

export function AIProgramRequestModal({ mode, onClose }: AIProgramRequestModalProps) {
  const [countryIso, setCountryIso] = useState("IN");
  const [phone, setPhone] = useState("");
  const [notice, setNotice] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedCountry = countries.find((country) => country.iso === countryIso) ?? countries[0];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setNotice("Enter a valid email address to continue.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setNotice("Enter a valid 10-digit contact number.");
      return;
    }

    if (mode === "brochure") {
      const downloadLink = document.createElement("a");
      downloadLink.href = "/images/generation-z/AI%20for%20Generation%20Z.pdf";
      downloadLink.download = "AI-for-Generation-Z.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      setNotice("Your brochure download is starting.");
      setIsSuccess(true);
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch(AI_REGISTRATION_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            firstName: String(data.get("firstName") ?? "").trim(),
            lastName: String(data.get("lastName") ?? "").trim(),
            email,
            country: selectedCountry.name,
            callingCode: selectedCountry.dialCode,
            phone,
            age: String(data.get("age") ?? "").trim(),
            organisation: String(data.get("organisation") ?? "").trim(),
          }),
        });
        const result = await response.json() as { success?: boolean; error?: string };
        if (!response.ok || !result.success) {
          throw new Error(result.error || "Registration could not be saved.");
        }
        setNotice("You’ve registered successfully. We’ll contact you within the next 24 hours.");
        setIsSuccess(true);
      } catch (error) {
        console.error("AI course registration failed:", error);
        setNotice("We couldn’t submit your registration. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClass = "h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#0b1730]/70 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="ai-request-title" className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_28px_90px_rgba(2,8,23,0.35)]">
        <div className="relative overflow-hidden bg-[#102541] px-6 py-6 text-white sm:px-8">
          <div className="pointer-events-none absolute -right-12 -top-24 h-56 w-56 rounded-full border-[24px] border-white/5" />
          <button type="button" onClick={onClose} aria-label="Close form" className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"><X className="h-4 w-4" /></button>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-300">AI for Generation Z</p>
          <h2 id="ai-request-title" className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Submit your details</h2>
          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-blue-100">{mode === "register" ? "Share your details and our programme team will be in touch." : "Complete the form to unlock your programme brochure."}</p>
        </div>

        {isSuccess ? (
          <div className="px-6 py-8 sm:px-8 sm:py-10" role="status" aria-live="polite">
            <div className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"><Check className="h-5 w-5" /></span>
              <div>
                <h3 className="font-extrabold text-slate-950">{mode === "register" ? "Registration received" : "Brochure ready"}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{notice}</p>
                {mode === "register" && <p className="mt-2 text-sm leading-relaxed text-slate-700">Have a query? <a className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-2" href="https://wa.me/919971033924?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20AI%20programme." target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>.</p>}
                {mode === "brochure" && <a href="/images/generation-z/AI%20for%20Generation%20Z.pdf" download="AI-for-Generation-Z.pdf" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-800 underline underline-offset-4"><ArrowDownToLine className="h-4 w-4" />Download again</a>}
              </div>
            </div>
            <button type="button" onClick={onClose} className="mt-6 w-full rounded-xl bg-[#102541] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-blue-900">Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8 sm:py-7">
            <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
              <label className="text-xs font-bold text-slate-700">First Name<input className={`${inputClass} mt-1.5`} name="firstName" autoComplete="given-name" placeholder="First name" required /></label>
              <label className="text-xs font-bold text-slate-700">Last Name<input className={`${inputClass} mt-1.5`} name="lastName" autoComplete="family-name" placeholder="Last name" required /></label>
              <label className="text-xs font-bold text-slate-700">Email<input className={`${inputClass} mt-1.5`} name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
              <fieldset className="min-w-0">
                <legend className="text-xs font-bold text-slate-700">Contact No</legend>
                <div className="mt-1.5 flex gap-2">
                  <select aria-label="Country calling code" value={countryIso} onChange={(event) => setCountryIso(event.target.value)} className="h-11 w-[42%] min-w-0 rounded-xl border border-slate-200 bg-white px-2 text-xs text-slate-800 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:w-[46%]">
                    {countries.map(({ name, dialCode, iso }) => <option key={iso} value={iso}>{name} (+{dialCode})</option>)}
                  </select>
                  <input className={`${inputClass} min-w-0 flex-1`} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="10-digit number" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))} pattern="[0-9]{10}" minLength={10} maxLength={10} title="Enter exactly 10 digits" required />
                </div>
              </fieldset>
              <label className="text-xs font-bold text-slate-700">Age<input className={`${inputClass} mt-1.5`} name="age" type="number" min="12" max="17" inputMode="numeric" placeholder="Age (12–17)" required /></label>
              <label className="text-xs font-bold text-slate-700">Organisation<input className={`${inputClass} mt-1.5`} name="organisation" autoComplete="organization" placeholder="School or organisation" required /></label>
            </div>
            {notice && <p className="mt-3 text-sm font-semibold text-rose-700" role="alert">{notice}</p>}
            <p className="mt-4 text-[11px] leading-relaxed text-slate-500">All fields are required. Contact number must contain 10 digits; country calling code is selected separately.</p>
            <button type="submit" disabled={isSubmitting} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3.5 text-sm font-black text-slate-950 shadow-[0_10px_25px_rgba(244,123,32,0.23)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(244,123,32,0.3)] disabled:cursor-wait disabled:opacity-70">
              {isSubmitting ? "Submitting…" : mode === "register" ? "Register Now" : "Download Brochure"}{mode === "brochure" ? <ArrowDownToLine className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
