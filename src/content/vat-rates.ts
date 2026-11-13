/**
 * VAT rates table for /vat-calculator. Checked 13 November 2026.
 *
 * EU-27: European Commission, Your Europe — "List of VAT rates applied in EU
 *   member countries" (page "Last checked: 13/07/2026"):
 *   https://europa.eu/youreurope/business/finance-and-tax/vat/vat-rules-rates/index_en.htm
 *   Columns there: standard, reduced, super-reduced, parking. "Other rates"
 *   below merges reduced, super-reduced and parking rates.
 *   The EU minimum standard rate is 15% (Art. 97 VAT Directive), per
 *   https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en
 * Portugal (Madeira, Azores): Autoridade Tributária, Ofício Circulado 25045/2024.
 * United Kingdom: GOV.UK, "VAT rates" (standard 20%, reduced 5%, zero 0%):
 *   https://www.gov.uk/vat-rates
 * Norway: Skatteetaten, "Value added tax" rates for 2026 (25% / 15% / 12%):
 *   https://www.skatteetaten.no/en/rates/value-added-tax/
 * Switzerland: Swiss Federal Tax Administration (FTA), "Swiss VAT rates"
 *   (8.1% normal, 2.6% reduced, 3.8% special rate for accommodation):
 *   https://www.estv.admin.ch/estv/en/home/value-added-tax/vat-rates-switzerland.html
 * New Zealand: Inland Revenue, "GST" (15%): https://www.ird.govt.nz/gst
 */
export interface VatRateRow {
  country: string;
  standard: number;
  other: number[];
}

export const VAT_RATES_CHECKED = "13 November 2026";

export const EU_VAT_RATES: VatRateRow[] = [
  { country: "Austria", standard: 20, other: [13, 10] },
  { country: "Belgium", standard: 21, other: [12, 6] },
  { country: "Bulgaria", standard: 20, other: [9] },
  { country: "Croatia", standard: 25, other: [13, 5] },
  { country: "Cyprus", standard: 19, other: [9, 5, 3] },
  { country: "Czechia", standard: 21, other: [12, 0] },
  { country: "Denmark", standard: 25, other: [0] },
  { country: "Estonia", standard: 24, other: [9] },
  { country: "Finland", standard: 25.5, other: [13.5, 10] },
  { country: "France", standard: 20, other: [10, 5.5, 2.1] },
  { country: "Germany", standard: 19, other: [7] },
  { country: "Greece", standard: 24, other: [17, 13, 6, 4] },
  { country: "Hungary", standard: 27, other: [18, 5] },
  { country: "Ireland", standard: 23, other: [13.5, 9] },
  { country: "Italy", standard: 22, other: [10, 5, 4] },
  { country: "Latvia", standard: 21, other: [12, 5] },
  { country: "Lithuania", standard: 21, other: [12, 5] },
  { country: "Luxembourg", standard: 17, other: [14, 8, 3] },
  { country: "Malta", standard: 18, other: [12, 7, 5] },
  { country: "Netherlands", standard: 21, other: [9] },
  { country: "Poland", standard: 23, other: [8, 5] },
  { country: "Portugal (mainland)", standard: 23, other: [13, 6] },
  { country: "Romania", standard: 21, other: [11] },
  { country: "Slovakia", standard: 23, other: [19, 5] },
  { country: "Slovenia", standard: 22, other: [9.5, 5] },
  { country: "Spain", standard: 21, other: [10, 4] },
  { country: "Sweden", standard: 25, other: [12, 6] },
];

export const OTHER_VAT_RATES: VatRateRow[] = [
  { country: "Portugal (Madeira)", standard: 22, other: [12, 4] },
  { country: "Portugal (Azores)", standard: 16, other: [9, 4] },
  { country: "United Kingdom", standard: 20, other: [5, 0] },
  { country: "Norway", standard: 25, other: [15, 12] },
  { country: "Switzerland", standard: 8.1, other: [3.8, 2.6] },
  { country: "New Zealand (GST)", standard: 15, other: [] },
];

export const VAT_SOURCES: { label: string; href: string }[] = [
  {
    label: "European Commission — Your Europe: VAT rates applied in EU member countries",
    href: "https://europa.eu/youreurope/business/finance-and-tax/vat/vat-rules-rates/index_en.htm",
  },
  {
    label: "European Commission — VAT rates (EU minimum standard rate 15%, Art. 97 VAT Directive)",
    href: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en",
  },
  {
    label: "Portal das Finanças — Código do IVA, artigo 18.º (mainland rates 23% / 13% / 6%)",
    href: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva18.aspx",
  },
  {
    label: "Autoridade Tributária — Ofício Circulado 25045/2024 (Açores 16% / 9% / 4%; Madeira 22% / 12% / 4% since 1 Oct 2024)",
    href: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/instrucoes_administrativas/Documents/Oficio_circulado_25045_2024.pdf",
  },
  { label: "GOV.UK — VAT rates", href: "https://www.gov.uk/vat-rates" },
  { label: "Skatteetaten (Norway) — Value added tax rates", href: "https://www.skatteetaten.no/en/rates/value-added-tax/" },
  {
    label: "Swiss Federal Tax Administration — Swiss VAT rates",
    href: "https://www.estv.admin.ch/estv/en/home/value-added-tax/vat-rates-switzerland.html",
  },
  { label: "Inland Revenue (New Zealand) — GST", href: "https://www.ird.govt.nz/gst" },
];
